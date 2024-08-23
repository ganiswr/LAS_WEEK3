import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HoverEffect } from "@/components/ui/card-hover-effect"; // Adjust the import path if necessary

const items = [
  {
    title: "MAJELIS PERWAKILAN KELAS (MPK)",
    description: "2020 - 2021 | DKOMISI A PENDIDIKAN AGAMA DAN PERIBADATAN.",
    link: "/Skills",
  },
  {
    title: "MAJELIS PERWAKILAN KELAS (MPK)",
    description: "2021-2022 | KOORDINATOR KELAS",
    link: "/Skills",
  },
  {
    title: "PA/PAWAKA (ORAGANISASI KEAGAMAAN)",
    description: "2021-2022 | SEKRETARIS",
    link: "/Skills",
  },
  {
    title: "IKASEMA (Ikatan Mahasiswa Semarang)",
    description: "2024-2025 | Bendahara Roadshow",
    link: "/Skills",
  },
  {
    title: "NetSchool-NetDev Adaptive Network Laboratory",
    description: "2023-2024 | Peserta",
    link: "/Skills",
  },

];

const Experiences = () => {
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
          EXPERIENCES
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
}

export default Experiences;