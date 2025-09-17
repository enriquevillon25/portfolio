// src/app/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Code2,
  Briefcase,
  User,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";

import { Nav } from "./components/ui/nav";
import { Container } from "./components/ui/container";

import testImage from "../app/images/auna.org_pe.png";
import luxuryClubImage from "../app/images/luxuryClub.png";
import rimacImage from "../app/images/rimac.png";
import personalImage from "../app/images/personalpay.jpg";
import testImage2 from "../app/images/auna_classic.png";
import arcuswebp from "../app/images/arcus.webp";
import testUtp from "../app/images/utp+class.png";
import agenteR from "../app/images/agenteR.png";
import pleizy from "../app/images/pleizy.png";
import ripleytracker from "../app/images/ripleytracker.webp";
import Image from "next/image";
import { Slider } from "./components/ui/slider";
import { Contact } from "./components/ui/contact";
import { Section } from "./components/ui/section";
import TwoImageTransition from "./components/ui/twoImageTransition";
import { I18nProvider } from "./i18n/i18nProvider";
import { useTranslations } from "next-intl";

const links = {
  instagram: "https://www.instagram.com/enriquevillon",
  github: "https://github.com/enriquevillon25",
  linkedin: "https://www.linkedin.com/in/enriquevillon97/",
  email: "mailto:enriquevillon2597@example.com",
};

// Estructura para proyectos: los textos salen del i18n (projects.<key>.*)
const projectsData = [
  {
    key: "miAuna",
    image: testImage,
    tags: [
      "React",
      "Angular",
      "React Native",
      "TypeScript",
      "AWS",
      "Storybook",
    ],
    href: "#",
    repo: "#",
  },
  {
    key: "rimac",
    image: rimacImage,
    tags: ["React", "Redux", "TailwindCSS", "Styled Components", "AWS Cognito"],
    href: "#",
    repo: "#",
  },
  {
    key: "arcus",
    image: arcuswebp,
    tags: ["React Native", "TypeScript", "Redux Toolkit", "Jest", "AWS"],
    href: "#",
    repo: "#",
  },
  {
    key: "personalPay",
    image: personalImage,
    tags: ["React Native", "TypeScript", "Material UI", "Storybook"],
    href: "#",
    repo: "#",
  },
  {
    key: "utpClass",
    image: testUtp,
    tags: ["React", "TypeScript", "TailwindCSS", "Styled Components", "Azure"],
    href: "#",
    repo: "#",
  },
  {
    key: "agenteR",
    image: agenteR,
    tags: ["React", "TypeScript", "PostgreSQL", "Azure DevOps"],
    href: "#",
    repo: "#",
  },
  {
    key: "ripleyTracker",
    image: ripleytracker,
    tags: ["React Native", "TypeScript", "PostgreSQL", "Google APIs"],
    href: "#",
    repo: "#",
  },
  {
    key: "pleizy",
    image: pleizy,
    tags: ["Angular", "React Native", "MongoDB", "RxJS", "Redux"],
    href: "#",
    repo: "#",
  },
  {
    key: "luxuryClub",
    image: luxuryClubImage,
    tags: ["Angular", "Spring Boot", "iOS", "MongoDB", "Node.js"],
    href: "#",
    repo: "#",
  },
] as const;

// Experiencia: los textos salen del i18n (experience.<key>.*)
const experienceDefs = [
  { key: "auna", points: 5 },
  { key: "softtek", points: 4 },
  { key: "baufest", points: 4 },
  { key: "utp", points: 3 },
  { key: "ripley", points: 3 },
  { key: "rbit", points: 3 },
  { key: "sonr", points: 3 },
] as const;

const skills = [
  "React",
  "React Native",
  "Angular",
  "TypeScript",
  "Next.js",
  "Tailwind",
  "shadcn/ui",
  "Node.js",
  "Docker",
  "Strapi",
  "MySQL",
  "Testing Library",
  "Playwright",
];

function Hero() {
  const tHero = useTranslations("hero");

  return (
    <div id="home" className="border-b">
      <Container>
        <div className="grid lg:grid-cols-12 gap-8 py-8 lg:py-16 md:py-20 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            >
              {tHero("name")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-muted-foreground text-base md:text-lg"
            >
              {tHero("subtitle")}
            </motion.p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#projects">
                  {tHero("cta")} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={links.github} target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" /> {tHero("github")}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={links.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> {tHero("linkedin")}
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pl-8">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5" /> {tHero("featured")}
                </CardTitle>
                <CardDescription>{tHero("latestPreview")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full rounded-xl bg-muted grid place-items-center">
                  <TwoImageTransition
                    srcA={testImage}
                    srcB={testImage2}
                    effect="fade"
                    className="h-full"
                  />
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <div className="flex gap-2">
                  <Badge>React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Tailwind</Badge>
                </div>
                <Button variant="ghost" asChild>
                  <a href="#projects">
                    {tHero("open")} <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

function About() {
  const tSections = useTranslations("sections");
  const tAbout = useTranslations("about");

  return (
    <Section id="about" icon={User} title={tSections("about")}>
      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <p className="text-muted-foreground leading-relaxed">
            {tAbout("bio")}
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <Badge key={s} variant="secondary">
                {s}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Projects() {
  const tSections = useTranslations("sections");
  const tProj = useTranslations("projects");

  return (
    <Section id="projects" icon={Code2} title={tSections("projects")}>
      <Slider className="mt-2" slideClassName="w-full sm:w-1/2 lg:w-1/3">
        {projectsData.map((p) => {
          const title = tProj(`${p.key}.title`);
          const description = tProj(`${p.key}.description`);
          return (
            <Card
              key={p.key}
              className="grid grid-rows-[3fr_7fr] overflow-hidden"
            >
              <CardHeader>
                <CardTitle className="text-base md:text-lg">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
                  <Image
                    src={p.image}
                    alt="Project preview"
                    className="object-cover h-full"
                    priority
                  />
                </div>
                <div className="mt-6 flex gap-2 flex-wrap">
                  {p.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </Slider>
    </Section>
  );
}

function Experience() {
  const tSections = useTranslations("sections");
  const tExp = useTranslations("experience");

  return (
    <Section id="experience" icon={Briefcase} title={tSections("experience")}>
      <div className="grid gap-6">
        {experienceDefs.map(({ key, points }) => {
          const role = tExp(`${key}.role`);
          const company = tExp(`${key}.company`);
          const period = tExp(`${key}.period`);
          const pts = Array.from({ length: points }, (_, i) =>
            tExp(`${key}.points.${i + 1}`)
          );

          return (
            <Card key={key}>
              <CardHeader>
                <CardTitle className="text-base md:text-lg">
                  {role} — {company}
                </CardTitle>
                <CardDescription>{period}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  {pts.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

export default function PortfolioPage() {
  // Opción A: Mantener el provider aquí
  // (Si lo moviste a app/layout.tsx, elimina <I18nProvider> de aquí)
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Nav />
        <main>
          <Hero />
          <Container>
            <div className="py-12 md:py-16 space-y-10 md:space-y-16">
              <About />
              <Projects />
              <Experience />
              <Contact />
            </div>
          </Container>
        </main>
        <footer className="border-t py-8">
          <Container>
            <div className="text-sm text-muted-foreground flex flex-wrap items-center gap-3 justify-between">
              <span>© {new Date().getFullYear()} Enrique Villón</span>
              <div className="flex items-center gap-2">
                <a
                  className="p-2 rounded-lg hover:bg-accent"
                  href={links.github}
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  className="p-2 rounded-lg hover:bg-accent"
                  href={links.linkedin}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  className="p-2 rounded-lg hover:bg-accent"
                  href={links.email}
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </I18nProvider>
  );
}
