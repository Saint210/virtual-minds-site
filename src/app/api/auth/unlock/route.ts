import { NextRequest, NextResponse } from 'next/server';

const SITE_PASSWORD = process.env.SITE_PASSWORD || 'virtualmindspro2026';
const AUTH_COOKIE = 'vm_site_auth';

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (body.password !== SITE_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });

  // Set a persistent auth cookie (30 days)
  response.cookies.set(AUTH_COOKIE, SITE_PASSWORD, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
  });

  return response;
}
