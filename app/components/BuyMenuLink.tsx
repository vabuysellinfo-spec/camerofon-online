"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

type Language = "uk" | "en";

export default function BuyMenuLink() {
  const pathname = usePathname();
  const [language, setLanguage] = useState<Language>("uk");
  const [mainNav, setMainNav] = useState<HTMLElement | null>(null);
  const [headerTools, setHeaderTools] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setMainNav(null);
      setHeaderTools(null);
      return;
    }

    const savedLanguage = window.localStorage.getItem("camerofon-language");
    if (savedLanguage === "uk" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }

    setMainNav(document.querySelector<HTMLElement>(".main-nav"));
    setHeaderTools(document.querySelector<HTMLElement>(".header-tools"));

    const handleLanguageClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const button = target.closest<HTMLButtonElement>(".language-switcher button");
      const label = button?.textContent?.trim();

      if (label === "UA") setLanguage("uk");
      if (label === "EN") setLanguage("en");
    };

    document.addEventListener("click", handleLanguageClick);
    return () => document.removeEventListener("click", handleLanguageClick);
  }, [pathname]);

  if (pathname !== "/") return null;

  const fullLabel = language === "uk" ? "Купити код" : "Buy code";
  const shortLabel = language === "uk" ? "Код" : "Buy";

  return (
    <>
      {mainNav &&
        createPortal(
          <a className="buy-nav-link buy-nav-link-desktop" href="/buy/">
            {fullLabel}
          </a>,
          mainNav
        )}

      {headerTools &&
        createPortal(
          <a
            className="buy-nav-link buy-nav-link-mobile"
            href="/buy/"
            aria-label={fullLabel}
          >
            <span className="buy-label-full">{fullLabel}</span>
            <span className="buy-label-short">{shortLabel}</span>
          </a>,
          headerTools
        )}

      <style jsx global>{`
        .main-nav .buy-nav-link-desktop,
        .buy-nav-link-mobile {
          align-items: center;
          background: var(--blue);
          border: 1px solid rgba(56, 103, 245, 0.9);
          border-radius: 12px;
          box-shadow: 0 8px 18px rgba(56, 103, 245, 0.24);
          color: #ffffff;
          display: inline-flex;
          font-size: 13px;
          font-weight: 720;
          justify-content: center;
          min-height: 40px;
          padding: 0 15px;
          transition: background 160ms ease, box-shadow 160ms ease, transform 160ms ease;
        }

        .main-nav .buy-nav-link-desktop:hover,
        .main-nav .buy-nav-link-desktop:focus-visible,
        .buy-nav-link-mobile:hover,
        .buy-nav-link-mobile:focus-visible {
          background: var(--blue-dark);
          box-shadow: 0 10px 22px rgba(56, 103, 245, 0.3);
          color: #ffffff;
          transform: translateY(-1px);
        }

        .buy-nav-link-mobile {
          display: none;
          white-space: nowrap;
        }

        .buy-label-short {
          display: none;
        }

        @media (max-width: 1000px) {
          .buy-nav-link-mobile {
            display: inline-flex;
          }
        }

        @media (max-width: 760px) {
          .buy-nav-link-mobile {
            border-radius: 11px;
            font-size: 12px;
            min-height: 42px;
            padding: 0 12px;
          }
        }

        @media (max-width: 430px) {
          .buy-nav-link-mobile {
            min-width: 46px;
            padding: 0 9px;
          }

          .buy-label-full {
            display: none;
          }

          .buy-label-short {
            display: inline;
          }
        }
      `}</style>
    </>
  );
}
