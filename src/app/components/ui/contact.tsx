import { Button } from "./button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Section } from "./section";
import { Instagram, Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  const links = {
    github: "https://github.com/enriquevillon25",
    linkedin: "https://www.linkedin.com/in/enriquevillon97/",
    email: "mailto:enriquevillon2597@example.com",
  };
  return (
    <Section id="contact" icon={Mail} title="Contact">
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Email</CardTitle>
            <CardDescription>Let’s build something great.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild size="lg">
              <a href={links.email}>enriquevillon2597@gmail.com</a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Social</CardTitle>
            <CardDescription>Follow or message me</CardDescription>
          </CardHeader>
          <CardFooter className="flex gap-3">
            <Button asChild variant="outline">
              <a href={links.github}>
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
              <Button asChild variant="outline">
                <a href={links.linkedin}>
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={links.linkedin}>
                  <Instagram className="mr-2 h-4 w-4" />
                  Instagram
                </a>
              </Button> 
          </CardFooter>
        </Card>
      </div>
    </Section>
  );
}
