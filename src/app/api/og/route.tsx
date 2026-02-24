import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);

        // Dynamic parameters
        const title = searchParams.get('title') || 'Practice Intelligence';
        const category = searchParams.get('category') || 'Insights';

        // Load logo reliably
        const logoPath = path.join(process.cwd(), 'public/images/virtual-minds-logo-opt.png');
        const logoBuffer = fs.readFileSync(logoPath);
        const logoData = `data:image/png;base64,${logoBuffer.toString('base64')}`;

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        backgroundColor: '#0B1C3E', // Trust Navy
                        backgroundImage: 'radial-gradient(circle at 0% 0%, rgba(210, 105, 30, 0.15) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(210, 105, 30, 0.05) 0%, transparent 50%)',
                        padding: '80px',
                        position: 'relative',
                    }}
                >
                    {/* Architectural Left Border */}
                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: '12px',
                            backgroundColor: '#D2691E',
                        }}
                    />

                    {/* Grid Overlay */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            opacity: 0.1,
                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                            backgroundSize: '100px 100px',
                        }}
                    />

                    {/* Header Area with Logo */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '60px',
                            position: 'relative',
                            zIndex: 10,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                borderRadius: '12px',
                                padding: '12px 24px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                marginRight: '20px',
                            }}
                        >
                            <img
                                src={logoData}
                                alt="Virtual Minds Logo"
                                width="44"
                                height="44"
                                style={{
                                    marginRight: '16px',
                                    objectFit: 'cover',
                                    borderRadius: '50%',
                                    border: '1px solid rgba(255, 255, 255, 0.2)'
                                }}
                            />
                            <span
                                style={{
                                    fontSize: 28,
                                    fontWeight: 900,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.3em',
                                    color: '#FAF8F3',
                                }}
                            >
                                Intelligence
                            </span>
                        </div>
                    </div>

                    {/* Title Area */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            zIndex: 10,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                fontSize: 96,
                                fontFamily: 'serif',
                                fontWeight: 'bold',
                                color: 'white',
                                lineHeight: 1.0,
                                marginBottom: '40px',
                                maxWidth: '1000px',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            {title}
                        </div>

                        {/* Category Tag */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <div
                                style={{
                                    height: '2px',
                                    width: '60px',
                                    backgroundColor: '#D2691E',
                                    marginRight: '20px',
                                }}
                            />
                            <span
                                style={{
                                    fontSize: 36,
                                    fontWeight: 'bold',
                                    color: '#D2691E',
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                }}
                            >
                                {category}
                            </span>
                        </div>
                    </div>

                    {/* Footer */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '80px',
                            left: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            zIndex: 10,
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: 28, fontWeight: 'bold', color: 'white', letterSpacing: '0.05em' }}>thevirtualminds.com</span>
                            <span style={{ fontSize: 20, color: '#94A3B8', marginTop: '4px' }}>Expert Administrative Support for Psychiatry</span>
                        </div>
                    </div>

                    {/* Decorative Corner */}
                    <div
                        style={{
                            position: 'absolute',
                            right: '80px',
                            top: '80px',
                            width: '100px',
                            height: '100px',
                            borderTop: '2px solid rgba(255,255,255,0.1)',
                            borderRight: '2px solid rgba(255,255,255,0.1)',
                        }}
                    />
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
