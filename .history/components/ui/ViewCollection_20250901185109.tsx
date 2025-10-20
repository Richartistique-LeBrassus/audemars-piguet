import Image from "next/image";

interface TrialCardProps {
  img: string;
  title: string;
}

export default function TrialCard({ img, title }: TrialCardProps) {
  return (
    <figure className="w-fit h-fit cursor-pointer overflow-clip flex flex-col items-start">
      <div className="relative w-[83.8vw] h-[54.92vw] 
        md:w-[41.82vw] md:h-[27.42vw]
        mdp:w-fit mdp:h-fit
        overflow-hidden"
      >
        <Image
          src={img}
          alt={title}
          fill
          className="object-contain mdp:object-cover"
        />
      </div>

      <div className="mt-4">
        <p className="text-[22px]">----- View Collection</p>
      </div>
    </figure>
  );
}
