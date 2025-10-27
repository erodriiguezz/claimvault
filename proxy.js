import { NextResponse } from "next/server";

export function proxy(request) {
  const ua = request.headers.get("user-agent" || "");

  const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(ua);

  if (!isMobile) {
    return NextResponse.rewrite(new URL("/unsupported", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
