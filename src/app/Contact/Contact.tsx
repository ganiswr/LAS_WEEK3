import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
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
        <div className="flex flex-col md:flex-row justify-center items-center p-10 gap-10">
          {/* Contact Information Section */}
          <div className="text-center md:text-left p-4 text-[#000000] md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-sm mb-8 mt-2">Nice to know you, please contact me and lets be friends!</p>

            <div className="text-sm">
              <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                <FaMapMarkerAlt />
                <p>Semarang, Jawa Tengah</p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                <FaPhone />
                <p>+62 81903388787</p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                <FaEnvelope />
                <p>gwidya20@gmail.com</p>
              </div>

              <div className="flex justify-center md:justify-start items-center gap-4 mt-8">
                <a href="https://www.instagram.com/ganis_wr?igsh=Znp0NGN4YWNtdTNt" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-[#550A35]" size={24} />
                </a>
                <a href="https://www.tiktok.com/@kadaleropa0?_t=8p6fanlGE4H&_r=1" target="_blank" rel="noopener noreferrer">
                  <FaTiktok className="text-[#550A35]" size={24} />
                </a>
                <a href="https://www.linkedin.com/in/ganiswr/">
                  <FaLinkedin className="text-[#550A35]" size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 w-full max-w-md md:w-1/2">
            <div className="flex flex-col gap-4">
              <InputDemo />
              <TextareaDemo />
              <div className="w-full mt-4">
                <Button
                  variant="outline"
                  className="w-full text-[#FFFFFF] bg-[#000000] border-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF]"
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
};

const InputDemo = () => {
  return (
    <div className="grid gap-4">
      <div className="grid items-center gap-1.5">
        <label htmlFor="username" className="text-[#550A35] font-bold">Username</label>
        <Input type="text" id="username" placeholder="Username" className="p-2 border rounded" />
      </div>
      <div className="grid items-center gap-1.5">
        <label htmlFor="email" className="text-[#550A35] font-bold">Email</label>
        <Input type="email" id="email" placeholder="Email" className="p-2 border rounded" />
      </div>
    </div>
  );
};

const TextareaDemo = () => {
  return (
    <div className="grid items-center gap-1.5">
      <label htmlFor="message" className="text-[#550A35] font-bold">Message</label>
      <Textarea id="message" placeholder="Type your message here." className="p-2 border rounded" />
    </div>
  );
};

export default Contact;
