import Link from 'next/link';

interface LocationTaglineProps {
    variant?: 'default' | 'service' | 'specialty' | 'social-proof';
    serviceName?: string;
    specialtyName?: string;
    className?: string;
}

export default function LocationTagline({
    variant = 'default',
    serviceName,
    specialtyName,
    className = ''
}: LocationTaglineProps) {

    const locations = [
        { name: 'Beverly Hills', href: '/locations/beverly-hills' },
        { name: 'Palo Alto', href: '/locations/palo-alto' },
        { name: 'San Diego', href: '/locations/san-diego' },
    ];

    const renderLocationLinks = () => {
        return locations.map((location, index) => (
            <span key={location.name}>
                {index > 0 && (index === locations.length - 1 ? ', and ' : ', ')}
                <Link href={location.href} className="text-primary hover:underline font-bold">
                    {location.name}
                </Link>
            </span>
        ));
    };

    const renderContent = () => {
        switch (variant) {
            case 'service':
                if (serviceName) {
                    return (
                        <>
                            Helping psychiatrists in {renderLocationLinks()} with {serviceName.toLowerCase()}.
                        </>
                    );
                }
                return (
                    <>
                        Serving psychiatrists in {renderLocationLinks()}, and{' '}
                        <Link href="/locations" className="text-primary hover:underline font-bold">
                            across California
                        </Link>.
                    </>
                );

            case 'specialty':
                if (specialtyName) {
                    return (
                        <>
                            Supporting {specialtyName} psychiatrists across {renderLocationLinks()}, and{' '}
                            <Link href="/locations" className="text-primary hover:underline font-bold">
                                California
                            </Link>.
                        </>
                    );
                }
                return (
                    <>
                        Serving psychiatrists in {renderLocationLinks()}, and{' '}
                        <Link href="/locations" className="text-primary hover:underline font-bold">
                            across California
                        </Link>.
                    </>
                );

            case 'social-proof':
                return (
                    <>
                        Trusted by California psychiatrists in {renderLocationLinks()}, and 45+ cities.
                    </>
                );

            default:
                return (
                    <>
                        Serving psychiatrists in {renderLocationLinks()}, and{' '}
                        <Link href="/locations" className="text-primary hover:underline font-bold">
                            across California
                        </Link>.
                    </>
                );
        }
    };

    return (
        <p className={`text-base text-slate-500 font-medium mb-8 max-w-2xl ${className}`}>
            {renderContent()}
        </p>
    );
}
