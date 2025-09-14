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
            className={`transform transition-all duration-500 ease-out
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
    /*<footer className="relative min-h-screen w-full bg-teal-900 px-auto text-white">
      <div className="w-full text-center">
        <div className="flex flex-col gap-7 py-16 mx-auto w-full
          border-b border-teal-600"      
        >
          <div className="relative w-[45vw] h-[12vw] 
            md:w-[41.82vw] md:h-[27.42vw]
            mdp:w-fit mdp:h-fit
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
  
          <div className="relative w-[28vw] h-[17.7vw] 
            md:w-[41.82vw] md:h-[27.42vw]
            mdp:w-fit mdp:h-fit
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
  
          <div className="relative w-[43vw] h-[24vw] 
            md:w-[41.82vw] md:h-[27.42vw]
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

          <div className="inline-flex w-full items-center mx-auto gap-3">
            <Globe size={27} /> 
            <p className="text-[22px] pt-[2px]">
              Change Language / Currency
            </p> 
          </div>

          <div className="grid gird-cols-1 md:gird-cols-2 w-full">
            <div className="inline-flex gap-4">
              <FaInstagram size={27} />
              <FaFacebookF size={27} />
              <FaYoutube size={27} />
              <FaTiktok size={27} />
              <FaLinkedinIn size={27} />
            </div>
            <div className="inline-flex gap-4">  
              <FaPinterestP size={27} />
              <FaWeibo size={27} />
              <FaWeixin size={27} />
              <FaLine size={27} />
              <FaXTwitter size={27} />
            </div>
          </div>

          <div className="flex flex-wrap">
            <p>Terms of Use</p>
            <p>Privacy Notice</p>
            <p>Cookie Policy</p>
              <div className="inline-flex">
                <p>Accessibility</p>
                <Image
                  width={61}
                  height={23}
                  src="/imgs/essential.svg"
                  alt="This icon serves as a link to 
                  download the eSSENTIAL Accessibility 
                  assistive technology app for individuals 
                  with physical disabilities. 
                  It is featured as part of our commitment 
                  to diversity and inclusion."
                >                  
                </Image>
              </div>
          </div>

        <p className="text-xl">© 2025 Audemars Piguet</p>
      </div> 
    </footer>*/
    
    <footer className="bg-teal-900 text-white px-6 md:px-8 lg:px-[97px] py-12">
     
      <div className="flex flex-col gap-7 pt-10 pb-16 max-w-fit mx-auto items-center"      
        >
          <div className="relative w-[45vw] h-[12vw] 
            md:w-[41.82vw] md:h-[27.42vw]
            mdp:w-fit mdp:h-fit
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
  
          <div className="relative w-[28vw] h-[17.7vw] 
            md:w-[41.82vw] md:h-[27.42vw]
            mdp:w-fit mdp:h-fit
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
  
          <div className="relative w-[43vw] h-[24vw] 
            md:w-[41.82vw] md:h-[27.42vw]
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
      <div className="inline-flex w-full items-center mx-auto gap-3">
            <Globe size={27} /> 
            <p className="text-[22px] pt-[2px]">
              Change Language / Currency
            </p> 
          </div>

      <div className="border-t border-white/20 max-w-screen-lg mx-auto grid 
      grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
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

      <div className="border-t border-white/20 mt-12 pt-6 text-xs text-center">
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