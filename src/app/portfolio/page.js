"use client";

import dynamic from "next/dynamic";

const Timeline = dynamic(() => import("./_components/timeline"), {
  ssr: false,
});

const projects = [
  {
    title: "SmartSpray",
    imageSrc: "/assets/portfolio/smartspray.png",
    techStack: "/assets/techstack/nest-next.png",
    url: "https://dev.smartspray.io/",
  },
  {
    title: "DeepLawn",
    imageSrc: "/assets/portfolio/deeplawn.png",
    techStack: "/assets/techstack/nest-next.png",
    url: "http://dev.deeplawn.com/",
  },
  {
    title: "Asclepius",
    imageSrc: "/assets/portfolio/asclepius.png",
    techStack: "/assets/techstack/next.png",
    url: "https://asclepius-v2.vercel.app/",
  },
  {
    title: "Comerzio",
    imageSrc: "/assets/portfolio/comerzio.png",
    techStack: "/assets/techstack/nest.png",
    url: "https://comerzio.fly.dev/",
  },
  {
    title: "Billing Care Solutions",
    imageSrc: "/assets/portfolio/bcs.png",
    techStack: "/assets/techstack/react.png",
    url: "http://billingcaresolutions.com/",
  },
  {
    title: "EUKA.ai",
    imageSrc: "/assets/portfolio/euka.png",
    techStack: "/assets/techstack/next.png",
    url: "https://euka.ai/",
  },
  {
    title: "Credentialing Management System",
    imageSrc: "/assets/portfolio/bcs-cms.png",
    techStack: "/assets/techstack/next.png",
    url: "https://bcs-cms.vercel.app/",
  },
  {
    title: "Express Wellness Lab",
    imageSrc: "/assets/portfolio/express-lab.png",
    techStack: "/assets/techstack/php.png",
    url: "https://expresswellnesslab.com",
  },
  {
    title: "Lead Your School",
    imageSrc: "/assets/portfolio/lys.png",
    techStack: "/assets/techstack/wordpress.png",
    url: "https://leadyourschool.com/",
  },
  {
    title: "Total Screening Solutions",
    imageSrc: "/assets/portfolio/tss.png",
    techStack: "/assets/techstack/wordpress.png",
    url: "http://totalscreeningsolutionsinc.com/",
  },
  {
    title: "Zenith Assistance",
    imageSrc: "/assets/portfolio/zenith.png",
    techStack: "/assets/techstack/wordpress.png",
    url: "http://zenithassistance.com/",
  },
  {
    title: "BrightRidge",
    imageSrc: "/assets/portfolio/br.png",
    techStack: "/assets/techstack/wordpress.png",
    url: "http://br.akcesse.com/",
  },
  {
    title: "Concluons",
    imageSrc: "/assets/portfolio/concluons.png",
    techStack: "/assets/techstack/wordpress.png",
    url: "https://concluons.com/en/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <Timeline projects={projects} />
      </div>
    </main>
  );
}
