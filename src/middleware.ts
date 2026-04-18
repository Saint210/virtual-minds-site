import { NextRequest, NextResponse } from 'next/server';

// ─── Configuration ────────────────────────────────────────────────────────────
// Change this to whatever password you want to use
const SITE_PASSWORD = process.env.SITE_PASSWORD || '4767';

// Cookie name to track authenticated sessions
const AUTH_COOKIE = 'vm_site_auth';

// Routes that bypass the password gate (keep these open)
const PUBLIC_PATHS = [
  '/api/auth/unlock',   // our unlock endpoint
  '/_next',            // Next.js internal assets
  '/favicon.ico',
];

// ─────────────────────────────────────────────────────────────────────────────

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip password check for public paths
  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // Check if the user is already authenticated
  const authCookie = request.cookies.get(AUTH_COOKIE);
  if (authCookie?.value === SITE_PASSWORD) {
    return NextResponse.next();
  }

  // If the request is for a non-HTML resource (images, fonts, etc.) let it through
  const acceptHeader = request.headers.get('accept') || '';
  const isPageRequest = acceptHeader.includes('text/html');

  if (!isPageRequest && pathname !== '/') {
    return NextResponse.next();
  }

  // Build the password gate HTML response
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Protected — Virtual Minds</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0a0a0f;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      overflow: hidden;
    }

    /* Animated gradient orbs */
    body::before, body::after {
      content: '';
      position: fixed;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.15;
      pointer-events: none;
    }
    body::before {
      width: 600px; height: 600px;
      background: radial-gradient(circle, #7c3aed, transparent 70%);
      top: -200px; left: -200px;
      animation: drift1 12s ease-in-out infinite alternate;
    }
    body::after {
      width: 500px; height: 500px;
      background: radial-gradient(circle, #2563eb, transparent 70%);
      bottom: -150px; right: -150px;
      animation: drift2 10s ease-in-out infinite alternate;
    }
    @keyframes drift1 { to { transform: translate(100px, 80px); } }
    @keyframes drift2 { to { transform: translate(-80px, -60px); } }

    .card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px;
      padding: 48px 40px;
      width: 100%;
      max-width: 420px;
      backdrop-filter: blur(20px);
      box-shadow: 0 25px 60px rgba(0,0,0,0.5);
      position: relative;
      z-index: 10;
      animation: fadeUp 0.5s ease both;
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 32px;
    }
    .logo-icon {
      width: 40px; height: 40px;
      background: linear-gradient(135deg, #7c3aed, #2563eb);
      border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      font-size: 20px;
    }
    .logo-text {
      font-size: 18px;
      font-weight: 600;
      color: #fff;
      letter-spacing: -0.3px;
    }

    h1 {
      font-size: 22px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 8px;
      letter-spacing: -0.4px;
    }
    p {
      font-size: 14px;
      color: rgba(255,255,255,0.45);
      margin-bottom: 28px;
      line-height: 1.6;
    }

    label {
      display: block;
      font-size: 12px;
      font-weight: 500;
      color: rgba(255,255,255,0.5);
      margin-bottom: 8px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    .input-wrap {
      position: relative;
      margin-bottom: 16px;
    }
    input[type="password"] {
      width: 100%;
      padding: 14px 16px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 12px;
      color: #fff;
      font-size: 15px;
      outline: none;
      transition: border-color 0.2s, background 0.2s;
    }
    input[type="password"]:focus {
      border-color: #7c3aed;
      background: rgba(124,58,237,0.08);
    }

    button {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, #7c3aed, #2563eb);
      border: none;
      border-radius: 12px;
      color: #fff;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.2s, transform 0.15s;
      margin-top: 4px;
    }
    button:hover { opacity: 0.9; transform: translateY(-1px); }
    button:active { transform: translateY(0); }

    .error {
      display: none;
      margin-top: 12px;
      padding: 10px 14px;
      background: rgba(239,68,68,0.1);
      border: 1px solid rgba(239,68,68,0.25);
      border-radius: 8px;
      color: #f87171;
      font-size: 13px;
      text-align: center;
    }
    .error.show { display: block; }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">
      <div class="logo-icon">🧠</div>
      <span class="logo-text">Virtual Minds</span>
    </div>
    <h1>Private Preview</h1>
    <p>This site is restricted to authorized viewers only. Enter the access password to continue.</p>

    <form id="form">
      <label for="pwd">Access Password</label>
      <div class="input-wrap">
        <input id="pwd" type="password" placeholder="Enter password..." autofocus autocomplete="off" />
      </div>
      <button type="submit">Unlock Site →</button>
      <div class="error" id="err">Incorrect password. Please try again.</div>
    </form>
  </div>

  <script>
    document.getElementById('form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const pwd = document.getElementById('pwd').value;
      const err = document.getElementById('err');
      err.classList.remove('show');

      const res = await fetch('/api/auth/unlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pwd }),
      });

      if (res.ok) {
        window.location.reload();
      } else {
        err.classList.add('show');
        document.getElementById('pwd').value = '';
        document.getElementById('pwd').focus();
      }
    });
  </script>
</body>
</html>`;

  return new NextResponse(html, {
    status: 401,
    headers: { 'Content-Type': 'text/html' },
  });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
