import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("auth_token")?.value;
  const isAdminPath = request.nextUrl.pathname.startsWith("/admin");
  const isLoginPage = request.nextUrl.pathname === "/admin/login";

  // If accessing admin routes without token, redirect to login
  if (isAdminPath && !isLoginPage && !authToken) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // If accessing login page with token, redirect to dashboard
  if (isLoginPage && authToken) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
