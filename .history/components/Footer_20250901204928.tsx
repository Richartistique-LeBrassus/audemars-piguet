"use client";
import Image from "next/image";
import React from "react";
import { AlertTriangle, Globe }  from "lucide-react";
import { 
  FaInstagram, 
  FaFacebookF, 
  FaYoutube, 
  FaTiktok, 
  FaLinkedinIn, 
  FaPinterestP, 
  FaWeibo, 
  FaWeixin, 
  FaLine, 
  FaXTwitter 
} from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Heading + Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between lg:justify-start uppercase font-bold tracking-wider mb-3 lg:mb-4"
      >
        {title}
        <span
          className={`lg:hidden transition-transform duration-300 ease-in-out ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      {/* Links with staggered reveal */}
      <ul
        className={`overflow-hidden transition-all duration-500 ease-in-out
          ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
          lg:max-h-none lg:opacity-100 lg:block`}
      >
        {links.map((link, idx) => (
          <li
            key={idx}
            style={{
              transitionDelay: `${idx * 100}ms`, // staggered by 100ms each
            }}
            className={`transform transition-all duration-500 ease-out text-xl
              ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
              lg:opacity-100 lg:translate-y-0`}
          >
            <Link
              href={link.href}
              className="hover:underline block transition-colors duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white px-6 md:px-8 lg:px-[97px] py-12">
     
      <div className="flex flex-col gap-7 pt-10 pb-16 max-w-fit mx-auto items-center
        md:flex-row md:gap-[80px]"      
      >
          <div className="relative w-[141px] h-[14px]
            overflow-hidden"
          >
            <Image
              src="imgs/chronicles.svg"
              alt="CU"
              fill
              //width={1280}
              //height={838}
              className="object-contain mdp:object-cover"
            />
          </div>
  
          <div className="relative w-[89px] h-[56px]
            overflow-hidden"
          >
            <Image
              src="imgs/musee.svg"
              alt="CU"
              fill
              //width={1280}
              //height={838}
              className="object-contain mdp:object-cover"
            />
          </div>
  
          <div className="relative w-[142px] h-[48px]
            mdp:w-fit mdp:h-fit
            overflow-hidden"
          >
            <Image
              src="imgs/foundations.svg"
              alt="CU"
              fill
              //width={1280}
              //height={838}
              className="object-contain mdp:object-cover"
            />
          </div>
        </div>

      {/* CURRENCY */}
      <div className="border-t border-white/20 inline-flex w-full items-center mx-auto gap-3
        py-8 text-neutral-200"
      >
        <Globe size={24} /> 
        <p className="text-lg pt-[2px] font-semibold">
          Change Language / Currency
        </p> 
      </div>

      <div className="max-w-screen-lg mx-auto grid 
      grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-lg">
        <FooterSection
          title="Watches"
          links={[
            { href: "#", label: "All Watches" },
            { href: "#", label: "Our Collections" },
            { href: "#", label: "New Releases" },
            { href: "#", label: "Find a Boutique" },
          ]}
        />
        <FooterSection
          title="Our World"
          links={[
            { href: "#", label: "Born in Le Brassus" },
            { href: "#", label: "Musée Atelier" },
            { href: "#", label: "AP Chronicles" },
            { href: "#", label: "Stay Connected" },
          ]}
        />
        <FooterSection
          title="Services"
          links={[
            { href: "#", label: "Hi-Care Programme" },
            { href: "#", label: "Maintenance Services" },
            { href: "#", label: "Extend Your Warranty" },
            { href: "#", label: "Contact Us" },
            { href: "#", label: "FAQ" },
          ]}
        />
        <FooterSection
          title="Company"
          links={[
            { href: "#", label: "Careers" },
            { href: "#", label: "Press" },
            { href: "#", label: "Foundation" },
            { href: "#", label: "Commitments" },
          ]}
        />
      </div>

      <div className="grid gird-cols-1 md:gird-cols-2 my-14 gap-4">
        <div className="flex justify-between max-w-screen-lg mx-auto w-full">
          <FaInstagram size={23} />
          <FaFacebookF size={23} />
          <FaYoutube size={23} />
          <FaTiktok size={23} />
          <FaLinkedinIn size={23} />
        </div>

        <div className="flex justify-between max-w-screen-lg mx-auto w-full">  
          <FaPinterestP size={23} />
          <FaWeibo size={23} />
          <FaWeixin size={23} />
          <FaLine size={23} />
          <FaXTwitter size={23} />
        </div>
      </div>

      <div className="border-t border-white/20 mt-14 pt-6 text-xs text-center">
        <p className="mb-2">
          <Link href="#" className="hover:underline">
            Terms of Use
          </Link>{" "}
          -{" "}
          <Link href="#" className="hover:underline">
            Privacy Notice
          </Link>{" "}
          -{" "}
          <Link href="#" className="hover:underline">
            Cookie Policy
          </Link>{" "}
          -{" "}
          <Link href="#" className="hover:underline">
            Accessibility
          </Link>
        </p>
        <p>© {new Date().getFullYear()} Audemars Piguet</p>
      </div>
    </footer>
  )
}

export default Footer