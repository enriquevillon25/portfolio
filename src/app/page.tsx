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
  instagram: "https://www.instagram.com/enriquevillon",
  github: "https://github.com/enriquevillon25",
  linkedin: "https://www.linkedin.com/in/enriquevillon97/",
  email: "mailto:enriquevillon2597@example.com",
};

const projects = [
  {
    image: testImage,
    title: "Mi Auna",
    description:
      "Main digital healthcare app for Auna. Implemented appointment scheduling, insurance validation, and user flows with Clean Architecture and DDD.",
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
    image: testImage,
    title: "Rimac Seguros Quoting System",
    description:
      "Dynamic web product for retirement insurance quotes. Improved performance and restructured architecture with React and Tailwind.",
    tags: ["React", "Redux", "TailwindCSS", "Styled Components", "AWS Cognito"],
    href: "#",
    repo: "#",
  },
  {
    image: testImage,
    title: "Arcus Perú (Cencosud)",
    description:
      "Mobile ERP for Wong and Metro stores nationwide. Developed features for store management, geolocation, and authentication.",
    tags: ["React Native", "TypeScript", "Redux Toolkit", "Jest", "AWS"],
    href: "#",
    repo: "#",
  },
  {
    image: testImage,
    title: "PersonalPay Wallet (Telecom Argentina)",
    description:
      "Cross-platform mobile wallet app with dynamic interface, Clean Architecture, and API integration.",
    tags: ["React Native", "TypeScript", "Material UI", "Storybook"],
    href: "#",
    repo: "#",
  },
  {
    image: testImage,
    title: "UTP+Class",
    description:
      "Virtual classroom platform for UTP. Implemented modules for evaluations, assignments, and task corrections with Hexagonal Architecture.",
    tags: ["React", "TypeScript", "TailwindCSS", "Styled Components", "Azure"],
    href: "#",
    repo: "#",
  },
  {
    image: testImage,
    title: "AgenteR (Ripley)",
    description:
      "Web app for financial agents at Ripley. Developed workflows, API integrations, and routing algorithms.",
    tags: ["React", "TypeScript", "PostgreSQL", "Azure DevOps"],
    href: "#",
    repo: "#",
  },
  {
    image: testImage,
    title: "Seller Ripley",
    description:
      "Mobile app for transport logistics at Ripley. Implemented geolocation, Google APIs, and PostgreSQL backend integration.",
    tags: ["React Native", "TypeScript", "PostgreSQL", "Google APIs"],
    href: "#",
    repo: "#",
  },
  {
    image: testImage,
    title: "Pleizy Marketplace",
    description:
      "E-commerce marketplace with Angular (web) and React Native (mobile). Delivered pixel-perfect UI and responsive design.",
    tags: ["Angular", "React Native", "MongoDB", "RxJS", "Redux"],
    href: "#",
    repo: "#",
  },
  {
    image: testImage,
    title: "Scotiabank Luxury",
    description:
      "E-commerce platform for exclusive products. Built with Angular, Spring Boot, and iOS integration.",
    tags: ["Angular", "Spring Boot", "iOS", "MongoDB", "Node.js"],
    href: "#",
    repo: "#",
  },
];

const experience = [
  {
    role: "Senior Frontend Developer",
    company: "Auna Clinic",
    period: "Aug 2024 – Present",
    points: [
      "Led development of Mi Auna digital product interface using React, Angular, and React Native.",
      "Applied Clean Architecture, DDD, and SOLID principles to improve code quality and maintainability.",
      "Implemented API RESTful integration, Storybook components, and automated deployments.",
      "Guided team decisions, collaborated with UI/UX, backend, and QA, and managed POD leadership.",
      "Delivered efficient features for appointment scheduling, validated insurance workflows, and coordinated store releases.",
    ],
  },
  {
    role: "Senior Frontend Lead",
    company: "Softtek",
    period: "Apr 2024 – Jul 2024",
    points: [
      "Developed digital quoting system for Rimac Seguros using React.js, Redux, and Tailwind CSS.",
      "Improved project performance and restructured codebase with design patterns and clean architecture.",
      "Led frontend team, coordinated with Business Managers, and presented solutions to final clients.",
      "Implemented API consumption, unit tests (Jest, RTL), and AWS services like Cognito and CloudWatch.",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "Baufest",
    period: "Jun 2022 – Jan 2024",
    points: [
      "Built mobile ERP (Arcus Perú - Cencosud) with React Native, managing store operations nationwide.",
      "Led frontend team, implemented geolocation, authentication, and high-complexity features.",
      "Developed PersonalPay mobile wallet (Telecom Argentina) with React Native and Clean Architecture.",
      "Implemented Storybook, Material UI, API integrations, and functional programming best practices.",
    ],
  },
  {
    role: "Frontend Developer Semi-Senior",
    company: "Universidad Tecnológica del Perú (UTP)",
    period: "Sep 2021 – Jun 2022",
    points: [
      "Developed UTP+Class virtual classroom web app with React.js, Tailwind CSS, and Styled Components.",
      "Implemented evaluations, assignments, and task correction modules with Hexagonal Architecture.",
      "Led frontend team in PODs, collaborated with UI/UX, backend, and QA for agile delivery.",
    ],
  },
  {
    role: "Full Stack Developer Semi-Senior",
    company: "Ripley",
    period: "Mar 2021 – Sep 2021",
    points: [
      "Developed flows for Ripley’s AgenteR (web) and Seller (mobile) apps with React.js and React Native.",
      "Designed PostgreSQL database and implemented Google APIs (Recaptcha, Maps, Geolocation).",
      "Implemented routing algorithms, Redux for state management, and coordinated stakeholder needs.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Rbit",
    period: "Sep 2020 – Mar 2021",
    points: [
      "Developed Pleizy marketplace web (Angular) and mobile app (React Native).",
      "Implemented database design with MongoDB and applied RxJS, Redux, and responsive UI practices.",
      "Delivered pixel-perfect design, SOLID principles, and unit testing with Jest.",
    ],
  },
  {
    role: "Junior Full Stack Developer",
    company: "Sonr Digital",
    period: "Jun 2019 – Sep 2020",
    points: [
      "Developed Scotiabank Luxury ecommerce platform with Angular and Spring Boot APIs.",
      "Implemented shopping cart, web/mobile features, and MVVM/DDD architecture.",
      "Worked with Angular, Node.js, iOS (Swift), SCSS, and applied Scrum methodology.",
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
        <div className="grid lg:grid-cols-12 gap-8 py-8 lg:py-16 md:py-20 items-center">
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
              transition={{ duration: 0.3 }}
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
                <a href={links.github} target="_blank">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={links.linkedin} target="_blank">
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
          <Card
            key={p.title}
            className="grid grid-rows-[3fr_7fr] overflow-hidden"
          >
            <CardHeader>
              <CardTitle className="text-base md:text-lg">{p.title}</CardTitle>
              <CardDescription>{p.description}</CardDescription>
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
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
            {/* <CardFooter className="mt-auto flex gap-2">
              <Button asChild size="sm">
                <a href={p.href}>Live</a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a href={p.repo}>Code</a>
              </Button>
            </CardFooter> */}
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
      <div className="grid gap-6">
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
          <div className="py-12 md:py-16  space-y-10 md:space-y-16">
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
