"use client";

import React from "react";
import { Button } from "./button";
import { Languages } from "lucide-react";
import { useLocale } from "../../i18n/i18nProvider"; // <-- tu hook

export function LangToggle() {
  const { locale, setLocale } = useLocale();

  const next = locale === "es" ? "en" : "es";
  const label = locale === "es" ? "Cambiar a inglés" : "Switch to Spanish";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={label}
      onClick={() => setLocale(next)}
      title={label}
    >
      <Languages className="h-5 w-5" />
      <span className="sr-only">{label}</span>
    </Button>
  );
}
