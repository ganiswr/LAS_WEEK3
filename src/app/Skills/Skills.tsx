import React from 'react';
import Image from 'next/image';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HoverEffect } from "@/components/ui/card-hover-effect"; // Adjust the import path if necessary

const items = [
  {
    title: "Docker",
    description: "Docker is a software platform that enables you to build, ship, and run applications inside containers.",
    link: "https://www.docker.com/",
  },
  {
    title: "Django",
    description: "Django is a high-level Python web framework that simplifies the development of robust and scalable web applications.",
    link: "https://www.djangoproject.com/",
  },
  {
    title: "C Language",
    description: "",
    link: "https://id.wikipedia.org/wiki/C_(bahasa_pemrograman)",
  },
  {
    title: "Python",
    description: "",
    link: "https://www.python.org/",
  },
  {
    title: "Canva",
    description: "Canva is a graphic design application used to create graphic media, presentations, posters, documents and other visual content.",
    link: "https://www.canva.com/id_id/",
  },
  {
    title: "Linux",
    description: "Linux is a family of open-source Unix-like operating systems based on the Linux kernel.",
    link: "https://www.linux.org/",
  },
];

const Skills = () => {
  return (
    <>
      {/* Navbar Section */}
      <div style={{ backgroundColor: "white", padding: "10px", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ float: "right" }}>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbLink href="/Skills">Skills</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbLink href="/Experiences">Experiences</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbLink href="/Project">Project</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbLink href="/Contact">Contact</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h1 style={{ fontWeight: "bold" }}>GANIS WIDYA RENATA</h1>
      </div>

      {/* Background Beams Section */}
      <BackgroundBeamsWithCollision className="min-h-screen w-full">
        <div style={{ height: '100vh', padding: "10px" }}>
          <HoverEffect items={items} className="mt-10" />
        </div>

        <div style={{ 
          position: "absolute", 
          bottom: "40%", 
          left: "50%", 
          transform: "translateX(-50%)", 
          fontSize: "2rem", 
          fontWeight: "bold" 
        }}>
          SKILLS
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
}

export default Skills;
