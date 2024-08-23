import React from 'react';
import Image from 'next/image';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HoverEffect } from "@/components/ui/card-hover-effect"; 
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

const items = [
  {
    title: "WEB PORTOFOLIO",
    description: "Web Portofolio menggunakan Django sebagai framework dan Docker untuk deploy",
    link: "/Skills",
  },
  {
    title: "WEB RESTORAN : NETNIBBLES",
    description: "Web Restoran bernama NetNibbles dengan menggunakan Django dan Docker",
    link: "/Skills",
  },
  {
    title: "LANDING PAGE MBC LABORATORY",
    description: "Landing Page mengenai MBC Laboratory dan melakukan deploy",
    link: "/Skills",
  },
  {
    title: "MINI-NDN",
    description: "Melakukan Simulasi Mini NDN",
    link: "/Skills",
  },
];

const Project = () => {
  return (
    <>
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
          PROJECT
        </div>
      </BackgroundBeamsWithCollision>

        <BackgroundBeamsWithCollision className="min-h-screen w-full">
          <ParallaxScroll images={images} className="mt-10" />
        </BackgroundBeamsWithCollision>

    </>
  );
}

const images = [
  "/a.jpg",
  "/b.jpg",
  "/g.jpg",
  "/h.jpg",
  "/i.jpg",
  "/j.jpg",
];

export default Project;