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
    <nav className="bg-[#FAF8F3]">
      <div className="max-w-[1400px] mx-auto px-6 py-2">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
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
