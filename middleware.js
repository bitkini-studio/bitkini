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
    '/docs/privacy_policy',
    '/docs/privacy_policy/:path*',
    '/docs/term_of_service',
    '/docs/term_of_service/:path*',
  ],
}
