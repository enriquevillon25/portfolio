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
import testImage2 from "../app/images/auna_classic.png";
import testUtp from "../app/images/utp+class.png";
import Image from "next/image";
import { Slider } from "./components/ui/slider";
import { Contact } from "./components/ui/contact";
import { Section } from "./components/ui/section";
import TwoImageTransition from "./components/ui/twoImageTransition";

const links = {
  github: "https://github.com/enriquevillon25",
  linkedin: "https://www.linkedin.com/in/enriquevillon97/",
  email: "mailto:enriquevillon2597@example.com",
};

const hola =
  "https://cdn.pixabay.com/photo/2022/10/09/14/52/windows-7509369_1280.jpg";

const projects = [
  {
    image: testImage,
    title: "Auna Org",
    description:
      "Responsive hero/banner slider with Storybook controls, tokens, and SVG assets. Built with React + Vite.",
    tags: ["React", "Storybook", "Vite", "Design System"],
    href: "#",
    repo: "#",
  },
  {
    image: "",
    title: "Mi Auna App",
    description:
      "Cross-platform React Native app for Auna customers, with authentication, billing, and support chat.",
    tags: ["React Native", "Angular", "Reanimated"],
    href: "#",
    repo: "#",
  },
  {
    image: testUtp,
    title: "UTP+Class",
    description:
      "E‑learning mobile app for UTP university, with video streaming, quizzes, and certificates.",
    tags: ["React", "Tailwind CSS", "MySQL", "Docker"],
    href: "#",
    repo: "#",
  },
  {
    image: "",
    title: "Strapi CMS Kit 2",
    description:
      "Dockerized Strapi + MySQL template with sane defaults, auth, and media pipeline.",
    tags: ["Strapi", "MySQL", "Docker"],
    href: "#",
    repo: "#",
  },
  {
    image: "",
    title: "Strapi CMS Kit 3",
    description:
      "Dockerized Strapi + MySQL template with sane defaults, auth, and media pipeline.",
    tags: ["Strapi", "MySQL", "Docker"],
    href: "#",
    repo: "#",
  },
];

const experience = [
  {
    role: "Senior Front‑End (React / ReactNative)",
    company: "Auna Digital",
    period: "2024 — Present",
    points: [
      "Built and maintained design-system components (HeroSlider, FloatingButtonSection).",
      "Led performance and accessibility improvements across web and mobile apps.",
      "Collaborated with platform squads on CI/CD and package versioning.",
    ],
  },
  {
    role: "Senior Mobile (React Native)",
    company: "Rbit Informática & Telecomunicaciones",
    period: "2019 — Present",
    points: [
      "Computer repair, custom PC builds, and local SEO presence.",
      "Handled sourcing, diagnostics, and data‑recovery workflows.",
    ],
  },
  {
    role: "Founder",
    company: "Rbit Informática & Telecomunicaciones",
    period: "2019 — Present",
    points: [
      "Computer repair, custom PC builds, and local SEO presence.",
      "Handled sourcing, diagnostics, and data‑recovery workflows.",
    ],
  },
];

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
  return (
    <div id="home" className="border-b">
      <Container>
        <div className="grid lg:grid-cols-12 gap-8 py-14 md:py-20 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            >
              Enrique Villón
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-4 text-muted-foreground text-base md:text-lg"
            >
              Senior Front‑End & React Native Developer — I build fast,
              accessible products and robust design‑system components.
            </motion.p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#projects">
                  See my work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={links.github}>
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={links.linkedin}>
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pl-8">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5" /> Featured
                </CardTitle>
                <CardDescription>Latest project preview</CardDescription>
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
                    Open <ExternalLink className="ml-2 h-4 w-4" />
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
  return (
    <Section id="about" icon={User} title="About">
      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <p className="text-muted-foreground leading-relaxed">
            I’m a software engineer focused on product quality and developer
            experience. I design systems, ship features, and mentor teams on
            accessibility, testing, performance, and maintainable front‑end
            architectures.
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
  return (
    <Section id="projects" icon={Code2} title="Projects">
      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}
      <Slider className="mt-2" slideClassName="w-full sm:w-1/2 lg:w-1/3">
        {projects.map((p) => (
          <Card key={p.title} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-base md:text-lg">{p.title}</CardTitle>
              <CardDescription>{p.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
                <Image
                  src={p.image}
                  alt="Project preview"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-4 flex gap-2 flex-wrap">
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="mt-auto flex gap-2">
              <Button asChild size="sm">
                <a href={p.href}>Live</a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a href={p.repo}>Code</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </Slider>
      {/* </div> */}
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" icon={Briefcase} title="Experience">
      <div className="grid gap-4">
        {experience.map((e) => (
          <Card key={e.role + e.company}>
            <CardHeader>
              <CardTitle className="text-base md:text-lg">
                {e.role} — {e.company}
              </CardTitle>
              <CardDescription>{e.period}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Nav />
      <main>
        <Hero />
        <Container>
          <div className="py-12 md:py-16 space-y-16">
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
  );
}
