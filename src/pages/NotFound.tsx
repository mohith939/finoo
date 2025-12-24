import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-semibold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          This page doesn't exist. But don't worry — let's get you back on track.
        </p>
        <Button variant="calm" size="lg" asChild>
          <Link to="/">
            <Home className="mr-2" />
            Back to home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
