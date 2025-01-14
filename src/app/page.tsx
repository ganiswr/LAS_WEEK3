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

export default function Home() {
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
        <div className="absolute left-0 top-0 h-full w-1/2 flex items-center justify-center">
          <Image src="/profilesaya.jpg"
            alt="Your Alt Text"
            width={400}
            height={400}
            className="rounded-full object-cover"/>
        </div>

        <div className="text-right p-8 absolute top-1/2 right-0 transform -translate-y-1/2" style={{ width: '50%' }}>
          <h1 className="text-[#550A35] font-bold text-4xl mb-4">
            TELKOM UNIVERSITY<br />
            TELECOMMUNICATIONS
            ENGINEERING STUDENT
          </h1>
          <p className="text-[#550A35] font-normal text-xl mt-4">
            <span className="text-base">I am a student at Telkom University, Bachelor of Engineering Study Program Telecommunication, Faculty of Electrical Engineering. Have a high interest in learning and adapting to technology which continues to grow. Have the achievement to become a student who graduates with the best grades and have a profession according to the skills they have.<br/>
            </span>
          </p>
        </div>

        <div style={{ 
          position: "absolute", 
          bottom: "10px", 
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
