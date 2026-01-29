import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link 
                  href={item.href} 
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-trust-navy font-medium">
                  {item.label}
                </span>
              )}
              {index < items.length - 1 && (
                <span className="material-symbols-outlined text-xs">chevron_right</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
