import Image from "next/image";

interface ViewCollectionProps {
  img: string;
  title: string;
}

export default function ViewCollection({ img, title }: ViewCollectionProps) {
  return (
    <figure className="w-fit h-fit cursor-pointer overflow-clip flex flex-col items-start">
      <div className="relative w-[83.8vw] h-[110.82vw]
        md:w-[22.55vw] md:h-[29.86vw]
        lg:w-[16.5vw] lg:h-[21.66vw]
        overflow-hidden"
      >
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover mdp:object-cover"
        />
      </div>
      <div className="group flex flex-row items-center w-fit cursor-pointer">
        <span
          className="relative inline-block w-[47px]
          after:absolute after:left-0 after:top-1/2 
          after:h-[1px] after:w-full after:bg-white 
          after:origin-right after:transition-all after:duration-500 
          group-hover:after:scale-x-[0.25]"
        ></span>
        <p className="pl-3 [24px] py-4 text-white font-semibold">
          View Collection
        </p>
      </div>
    </figure>
  );
}