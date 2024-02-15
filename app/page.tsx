import Image from "next/image";
import Link from "@/components/ui/Link";
import Section from "@/components/Section";
import ConnectLinks from "@/components/ConnectLinks";

import Workplaces from "@/components/Workplaces";
import sourcedFactLogo from "public/work/sourcedfact.jpeg";
import methodLogo from "public/work/method.jpeg";

import clsx from "clsx";
import { allProjects } from ".contentlayer/generated";
import Halo from "@/components/ui/Halo";

export default async function Home() {

    const projects = allProjects;

  return (
    <div className="flex flex-col gap-12 md:gap-18">
      <div className="flex animate-in flex-col gap-8">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
            Tony Yu
          </h1>
          <p
            className="animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            Computer Engineering @uWaterloo
          </p>
        </div>
      </div>

      <div
        className="flex flex-col gap-10 animate-in md:gap-14"
        style={{ "--index": 3 } as React.CSSProperties}
      >      <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-4">
            <p>Hi! I&apos;m currently a student at the <span className="magic-text">University of Waterloo </span>  
           studying Computer Engineering with a specialization in Artificial Intelligence.</p>

            <p>
            I have around 16 months of internship experience in the <span className="magic-text">software
          development </span> space, and I&apos;m eager to keep learning and grow in this exciting industry!
            </p>
            <p>
              Outside of school and work, I enjoy photography, basketball, skiing, music, and traveling.
            </p>
          </div>
        </Section>

        <Section heading="Work" headingAlignment="left">
          <div className="flex flex-col w-full gap-4">
            <p>Professionally, I have worked with a variety of technologies, such as React/React Native,
              Django, .NET, SQL, MongoDB, AWS, Redis, and Docker, just to name a few. 
            </p>
            <p>
              I believe that the most important quality in a software engineer is to always be 
              <span className="magic-text"> eager to learn</span>.
            </p>
            <p></p>
            <Workplaces items={workplaces} />
          </div>
        </Section>

        <Section heading="Projects" headingAlignment="left">
        <div className="flex flex-col gap-7">
      <ul
        className="animate-in flex flex-col w-full animated-list"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        {projects.map((project, i) => (
          <li
            key={project.slug}
            className={clsx(
              "py-6 flex flex-col md:flex-row gap-4 md:gap-6 transition-opacity first:pt-0 last:pb-0"
            )}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="w-full md:w-2/5 aspect-video bg-tertiary rounded-lg border border-secondary overflow-clip select-none"
            >
              <Halo strength={10}>
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full "
                />
              </Halo>
            </Link>
            <div className="w-full md:w-3/5 space-y-2">
              <div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-primary font-medium hover:underline"
                >
                  {project.title}
                </Link>
                <time className="text-secondary"> · {project.time}</time>
              </div>

              <p className="line-clamp-3 text-tertiary">
                {project.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
      </div>

    </Section>

        <Section heading="Connect" headingAlignment="left">
          <div className="flex flex-col w-full gap-8">
            <p>
              Please feel free to reach out!
            </p>
            <ul className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-2 animated-list">
              {ConnectLinks.map((link) => (
                <li className="transition-opacity col-span-1" key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-opacity no-underline w-full border rounded-lg p-4 border-primary inline-grid"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{link.icon}</span>
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 ml-auto text-secondary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </div>

    </div>
  );
}


const workplaces = [
  {
    title: "Software Engineer Intern",
    company: "SourcedFact",
    time: "Jan 2024 - Present",
    imageSrc: sourcedFactLogo,
    link: "https://sourcedfact.com/",
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Method:CRM",
    time: "Apr 2023 - Jan 2024",
    imageSrc: sourcedFactLogo,
    link: "https://www.method.me/",
  },
  {
    title: "Automation Developer Intern",
    company: "Method:CRM",
    time: "Jan 2023 - Apr 2023",
    imageSrc: methodLogo,
    link: "https://www.method.me/",
  },
];