import { NextResponse } from 'next/server'

export function middleware(request) {
  const host = request.headers.get('host') || ''
  const isAllowedHost =
    host.startsWith('bigeyes.bitkini.com') ||
    host.startsWith('localhost') ||
    host.startsWith('127.0.0.1')

  if (!isAllowedHost) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/docs/privacy-policy',
    '/docs/privacy-policy/:path*',
    '/docs/terms-of-service',
    '/docs/terms-of-service/:path*',
  ],
}
