import { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'

const nextIntlMiddleware = createMiddleware({
  locales: ['pl'],
  defaultLocale: 'pl',
})

const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl
  if (pathname === '/') {
    return Response.redirect(new URL('/pl/landing', request.url))
  }
  if (pathname === '/pl') {
    return Response.redirect(new URL('/pl/landing', request.url))
  }
  return nextIntlMiddleware(request)
}

export const config = {
  matcher: ['/', '/pl', '/landing', '/login', '/register', '/(pl)/:path*'],
}

export default middleware
