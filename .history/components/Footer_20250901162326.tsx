import Image from "next/image";
import React from "react";
import { Globe }  from "lucide-react";
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

const Footer = () => {
  return (
    <footer className="relative min-h-screen w-full bg-teal-900 px-auto">
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

          <div className="flex flex-wrap gap-4 text-2xl text-white">
            <FaInstagram size={27} />
            <FaFacebookF size={27} />
            <FaYoutube size={27} />
            <FaTiktok size={27} />
            <FaLinkedinIn size={27} />
            <FaPinterestP size={27} />
            <FaWeibo size={27} />
            <FaWeixin size={27} />
            <FaLine size={27} />
            <FaXTwitter size={27} />
          </div>

        <p className="text-xl">© 2025 Audemars Piguet</p>
      </div> 
    </footer>
  )
}

export default Footer