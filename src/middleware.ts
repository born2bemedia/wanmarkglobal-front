import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  const restrictedRoutes = ['/account'];

  if (
    restrictedRoutes.some(route =>
      request.nextUrl.pathname.startsWith(route),
    ) &&
    !token
  ) {
    const loginUrl = new URL('/', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|static).*)'],
};
