import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const GOOGLE_SCRIPT_URL = Deno.env.get('GOOGLE_SCRIPT_URL');

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 3; // Max 3 submissions
const RATE_LIMIT_WINDOW = 3600000; // 1 hour in milliseconds

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }
  
  record.count++;
  return false;
}

// Validation functions
function validateName(name: string): { valid: boolean; error?: string } {
  if (!name || typeof name !== 'string') {
    return { valid: false, error: 'Name is required' };
  }
  const trimmed = name.trim();
  if (trimmed.length < 1 || trimmed.length > 100) {
    return { valid: false, error: 'Name must be between 1 and 100 characters' };
  }
  return { valid: true };
}

function validatePhone(phone: string): { valid: boolean; error?: string } {
  if (!phone || typeof phone !== 'string') {
    return { valid: false, error: 'Phone number is required' };
  }
  const trimmed = phone.trim();
  // Allow digits, spaces, dashes, parentheses, and + for international
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,20}$/;
  if (!phoneRegex.test(trimmed)) {
    return { valid: false, error: 'Please enter a valid phone number' };
  }
  return { valid: true };
}

function validateEmail(email: string): { valid: boolean; error?: string } {
  if (!email || email.trim() === '') {
    return { valid: true }; // Email is optional
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return { valid: false, error: 'Please enter a valid email address' };
  }
  if (email.length > 255) {
    return { valid: false, error: 'Email must be less than 255 characters' };
  }
  return { valid: true };
}

function validateCompany(company: string): { valid: boolean; error?: string } {
  if (!company || company.trim() === '') {
    return { valid: true }; // Company is optional
  }
  if (company.length > 100) {
    return { valid: false, error: 'Company name must be less than 100 characters' };
  }
  return { valid: true };
}

function validateMessage(message: string): { valid: boolean; error?: string } {
  if (!message || message.trim() === '') {
    return { valid: true }; // Message is optional
  }
  if (message.length > 2000) {
    return { valid: false, error: 'Message must be less than 2000 characters' };
  }
  return { valid: true };
}

// Sanitize string to prevent injection
function sanitize(str: string): string {
  if (!str) return '';
  return str.trim().replace(/[<>]/g, '');
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('cf-connecting-ip') || 
                     'unknown';
    
    // Check rate limit
    if (isRateLimited(clientIP)) {
      console.log('Rate limit exceeded for IP:', clientIP);
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body = await req.json();
    const { name, phone, email, company, message } = body;

    console.log('Received form submission from IP:', clientIP);

    // Validate all inputs
    const nameValidation = validateName(name);
    if (!nameValidation.valid) {
      return new Response(
        JSON.stringify({ error: nameValidation.error }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const phoneValidation = validatePhone(phone);
    if (!phoneValidation.valid) {
      return new Response(
        JSON.stringify({ error: phoneValidation.error }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const emailValidation = validateEmail(email);
    if (!emailValidation.valid) {
      return new Response(
        JSON.stringify({ error: emailValidation.error }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const companyValidation = validateCompany(company);
    if (!companyValidation.valid) {
      return new Response(
        JSON.stringify({ error: companyValidation.error }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const messageValidation = validateMessage(message);
    if (!messageValidation.valid) {
      return new Response(
        JSON.stringify({ error: messageValidation.error }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!GOOGLE_SCRIPT_URL) {
      console.error('GOOGLE_SCRIPT_URL is not configured');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Sanitize and prepare data
    const sanitizedData = {
      name: sanitize(name),
      phone: sanitize(phone),
      email: sanitize(email) || '',
      company: sanitize(company) || '',
      message: sanitize(message) || '',
      timestamp: new Date().toISOString(),
    };

    // Send data to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sanitizedData),
    });

    console.log('Google Script response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Script error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to submit form' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Form submitted successfully');

    return new Response(
      JSON.stringify({ success: true, message: 'Form submitted successfully' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error processing form submission:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
