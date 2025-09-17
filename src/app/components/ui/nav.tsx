"use client";

import * as React from "react";
import { Button } from "./button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "./sheet";
import { Github, Linkedin, Instagram, Menu, X } from "lucide-react";
import { ThemeToggle } from "./themeToggle";
import { LangToggle } from "./langToogle";
// Contenedor simple
function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

const links = {
  instagram: "https://www.instagram.com/enriquevillon",
  github: "https://github.com/enriquevillon25",
  linkedin: "https://www.linkedin.com/in/enriquevillon97/",
  email: "mailto:enriquevillon2597@example.com",
};

export function Nav() {
  const items = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<string | null>(null);

  React.useEffect(() => {
    const onHash = () => {
      setActive(window.location.hash || "#home");
      setOpen(false); // si cambias de sección en mobile, cierra el drawer
    };
    // set inicial al montar
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const linkBase =
    "group relative inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-all bg-transparent";
  const hoverFx =
    "hover:-translate-y-0.5 hover:shadow-sm hover:shadow-[hsl(var(--primary))/0.15] hover:bg-[hsl(var(--accent))]";
  const underline =
    "after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:origin-left after:transition-transform after:duration-200 after:scale-x-0 group-hover:after:scale-x-100 after:bg-[hsl(var(--primary))] after:opacity-0 group-hover:after:opacity-100";

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-bold tracking-tight text-lg">
            EV
          </a>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                aria-current={active === it.href ? "page" : undefined}
                className={
                  linkBase +
                  " " +
                  hoverFx +
                  " " +
                  underline +
                  " " +
                  (active === it.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground")
                }
              >
                {it.label}
              </a>
            ))}
            <ThemeToggle />
            <LangToggle />
            <Button asChild>
              <a href={links.email}>Hire me</a>
            </Button>
          </nav>

          {/* Mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <LangToggle />

              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={
                    "h-8 w-8 md:h-9 md:w-9 p-0 text-[hsl(var(--foreground))] " +
                    "border-[hsl(var(--foreground))/0.25] hover:border-[hsl(var(--foreground))/0.45] hover:bg-[hsl(var(--accent))] " +
                    (open ? "opacity-0 pointer-events-none" : "")
                  }
                  aria-expanded={open}
                  aria-controls="mobile-drawer"
                  aria-label={open ? "Close menu" : "Open menu"}
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                id="mobile-drawer"
                className="
                  w-[min(64vw,240px)] p-0
                  bg-[hsl(var(--background))] text-[hsl(var(--foreground))]
                  border-l border-[hsl(var(--foreground))/0.12] shadow-2xl
                "
              >
                <div className="flex items-center justify-between h-16 px-3 border-b border-[hsl(var(--foreground))/0.12]">
                  <SheetHeader className="p-0">
                    <SheetTitle className="text-sm font-semibold">
                      Navegación
                    </SheetTitle>
                  </SheetHeader>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 p-0"
                      aria-label="Cerrar"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </SheetClose>
                </div>

                <nav className="p-3 grid gap-1.5" aria-label="Mobile">
                  {items.map((it) => (
                    <SheetClose asChild key={it.href}>
                      <a
                        href={it.href}
                        aria-current={active === it.href ? "page" : undefined}
                        className={
                          "flex items-center gap-2 px-3 py-2 rounded-xl transition-colors " +
                          (active === it.href
                            ? "bg-[hsl(var(--accent))] text-[hsl(var(--foreground))] shadow-sm"
                            : "text-[hsl(var(--foreground))]/75 hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent))]")
                        }
                      >
                        <span
                          className={
                            "h-1.5 w-1.5 rounded-full " +
                            (active === it.href
                              ? "bg-[hsl(var(--primary))]"
                              : "bg-[hsl(var(--primary))/0.35]")
                          }
                        />
                        {it.label}
                      </a>
                    </SheetClose>
                  ))}

                  <div className="mt-3 grid gap-2">
                    <SheetClose asChild>
                      <Button asChild className="w-auto">
                        <a href={links.email} target="_blank">
                          Hire me
                        </a>
                      </Button>
                    </SheetClose>
                    <div className="flex items-center gap-2">
                      <a
                        className="p-2 rounded-lg hover:bg-[hsl(var(--accent))]"
                        href={links.github}
                        aria-label="GitHub"
                        target="_blank"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        className="p-2 rounded-lg hover:bg-[hsl(var(--accent))]"
                        href={links.linkedin}
                        aria-label="LinkedIn"
                        target="_blank"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        className="p-2 rounded-lg hover:bg-[hsl(var(--accent))]"
                        href={links.instagram}
                        aria-label="LinkedIn"
                        target="_blank"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </div>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
