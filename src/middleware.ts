import { withAuth } from "next-auth/middleware"

// Protect admin routes with authentication
export default withAuth(
  function middleware(req) {
    // You can add custom middleware logic here if needed
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token // Only allow authenticated users
    },
    pages: {
      signIn: '/admin/login',
    }
  }
)

// Configure which routes to protect
export const config = {
  matcher: [
    "/admin/dashboard/:path*",  // Only protect dashboard routes
    "/api/admin/:path*",        // Protect admin API routes
    "/admin/((?!login$).*)",    // Protect all admin routes except login
  ]
}
