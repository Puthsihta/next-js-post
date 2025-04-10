// import createMiddleware from "next-intl/middleware";
// import { localePrefix, locales } from "./hooks/useNavigation";
// import { NextRequest, NextResponse } from "next/server";

// const intlMiddelware = createMiddleware({
//   defaultLocale: "en",
//   localePrefix,
//   locales,
// });

// const PUBLIC_FILE = /^(\/.*\..*|\/public\/.*)$/;

// export default function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;

//   if (PUBLIC_FILE.test(pathname)) {
//     return NextResponse.next();
//   }

//   return intlMiddelware(req);
// }

// export const config = {
//   // Match only internationalized pathnames
// matcher: [
//   "/",
//   "/(km|en)/:path*",
//   "/((?!_next).*)",
//   "/((?!api|_next|_vercel|.*\\..*).*)",
//   // However, match all pathnames within `/users`, optionally with a locale prefix
//   "/([\\w-]+)?/users/(.+)",
// ],
// };
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: [
    "/",
    "/(km|en)/:path*",
    "/((?!_next).*)",
    "/((?!api|_next|_vercel|.*\\..*).*)",
    "/([\\w-]+)?/users/(.+)",
  ],
};
