import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-navy-700",
  secondary:
    "border border-navy/20 bg-white text-navy hover:border-navy hover:bg-sky-soft/60",
  ghost: "text-navy hover:bg-sky-soft",
};

function isExternal(href: string) {
  return /^https?:\/\//i.test(href);
}

/**
 * Tombol berbasis <a>. Link eksternal otomatis memakai
 * target="_blank" dan rel="noopener noreferrer".
 */
export default function ButtonLink({
  href,
  variant = "primary",
  icon,
  children,
  className = "",
  ...rest
}: ButtonLinkProps) {
  const external = isExternal(href);
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {icon}
      {children}
    </a>
  );
}
