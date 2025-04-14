import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  // Als de rootpagina wordt bezocht, stuur dan door naar de standaard locale
  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/nl-NL', req.url));
  }

  return NextResponse.next();
}
