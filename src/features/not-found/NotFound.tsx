import { Link } from "react-router-dom"
import { ChevronLeft, AlertTriangle } from 'lucide-react';
import { Button } from "@/components/ui/button";
export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <div className="text-center">
        <AlertTriangle className="mx-auto h-24 w-24 text-orange-400 animate-pulse" />
        <h1 className="mt-8 text-6xl font-bold tracking-tight text-orange-400">404</h1>
        <p className="mt-4 text-3xl font-semibold">Page Not Found</p>
        <p className="mt-4 text-lg text-gray-400">Oops! The page you're looking for doesn't exist.</p>
        <div className="mt-10">
          <Link to="/" className="inline-flex items-center border-orange-400 text-orange-400 hover:text-gray-900">
          <Button variant="outline" className="inline-flex items-center border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-gray-900">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

