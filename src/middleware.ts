import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the token from cookies
  const token = request.cookies.get('authToken')?.value;

  // Check if the route starts with /editors-login
  if (request.nextUrl.pathname.startsWith('/editors-login')) {
    // If the token is missing, redirect to the login page
    if (!token) {
      const loginUrl = new URL('/login', request.url); // Replace '/login' with your actual login page route
      return NextResponse.redirect(loginUrl);
    }
  }

  // Allow the request to proceed if token exists or the path is not restricted
  return NextResponse.next();
}


export const config = {
    matcher: '/editors-login/:path*',
  };
  