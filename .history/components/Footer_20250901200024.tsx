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
import Link from "next/link";

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
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        {/* Watches */}
        <div>
          <h4 className="uppercase font-bold tracking-wider mb-3">Watches</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">All Watches</Link></li>
            <li><Link href="#" className="hover:underline">Our Collections</Link></li>
            <li><Link href="#" className="hover:underline">New Releases</Link></li>
            <li><Link href="#" className="hover:underline">Find a Boutique</Link></li>
          </ul>
        </div>
        {/* Our World */}
        <div>
          <h4 className="uppercase font-bold tracking-wider mb-3">Our World</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">Born in Le Brassus</Link></li>
            <li><Link href="#" className="hover:underline">Musée Atelier</Link></li>
            <li><Link href="#" className="hover:underline">AP Chronicles</Link></li>
            <li><Link href="#" className="hover:underline">Stay Connected</Link></li>
          </ul>
        </div>
        {/* Services */}
        <div>
          <h4 className="uppercase font-bold tracking-wider mb-3">Services</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">Hi-Care Programme</Link></li>
            <li><Link href="#" className="hover:underline">Maintenance Services</Link></li>
            <li><Link href="#" className="hover:underline">Extend Your Warranty</Link></li>
            <li><Link href="#" className="hover:underline">Contact Us</Link></li>
            <li><Link href="#" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <h4 className="uppercase font-bold tracking-wider mb-3">Company</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">Careers</Link></li>
            <li><Link href="#" className="hover:underline">Press</Link></li>
            <li><Link href="#" className="hover:underline">Foundation</Link></li>
            <li><Link href="#" className="hover:underline">Commitments</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 mt-12 pt-6 text-xs text-center">
        <p className="mb-2"><Link href="#" className="hover:underline">Terms of Use</Link> - <Link href="#" className="hover:underline">Privacy Notice</Link> - <Link href="#" className="hover:underline">Cookie Policy</Link> - <Link href="#" className="hover:underline">Accessibility</Link></p>
        <p>© {new Date().getFullYear()} Audemars Piguet</p>
      </div>
    </footer>
  )
}

export default Footer