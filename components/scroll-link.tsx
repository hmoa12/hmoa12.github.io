"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

type ScrollLinkProps = {
  href: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function ScrollLink({ href, children, onClick, ...rest }: ScrollLinkProps) {
  const handleClick: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"] = (
    event,
  ) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      const target = document.querySelector<HTMLElement>(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    onClick?.(event);
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

