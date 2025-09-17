// components/I18nProvider.tsx
"use client";

import { NextIntlClientProvider } from "next-intl";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const SUPPORTED = ["en", "es"] as const;
export type Locale = (typeof SUPPORTED)[number];
const DEFAULT_LOCALE: Locale = "en";

type Ctx = { locale: Locale; setLocale: (l: Locale) => void };
const LocaleCtx = createContext<Ctx>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
});

async function loadMessages(locale: Locale) {
  const mod = await import(`../messages/${locale}.json`);
  return mod.default as Record<string, string>;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return DEFAULT_LOCALE;
    const saved = window.localStorage.getItem("locale") as Locale | null;
    if (saved && SUPPORTED.includes(saved)) return saved;
    const nav = navigator.language.split("-")[0];
    return (SUPPORTED as readonly string[]).includes(nav)
      ? (nav as Locale)
      : DEFAULT_LOCALE;
  });

  const [messages, setMessages] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    loadMessages(locale).then(setMessages);
    // Persistir preferencia y ajustar <html lang="">
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
    window.localStorage.setItem("locale", locale);
  }, [locale]);

  // Prefetch “el otro” idioma para que el switch sea instantáneo (opcional)
  useEffect(() => {
    const other = locale === "es" ? "en" : "en";
    loadMessages(other as Locale);
  }, [locale]);

  const ctxValue = useMemo(() => ({ locale, setLocale }), [locale]);

  if (!messages) return null; // o un loader mínimo

  return (
    <LocaleCtx.Provider value={ctxValue}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LocaleCtx.Provider>
  );
}

export const useLocale = () => useContext(LocaleCtx);
