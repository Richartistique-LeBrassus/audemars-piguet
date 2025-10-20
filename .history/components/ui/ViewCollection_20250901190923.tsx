import Image from "next/image";

interface ViewCollectionProps {
  img: string;
  title: string;
}

export default function ViewCollection({ img, title }: ViewCollectionProps) {
  return (
    /*  w-[83.8vw] h-[84.92vw] */
    <figure className="w-fit h-fit cursor-pointer overflow-clip flex flex-col items-start">
      <div className="relative w-[83.8vw] h-[110.82vw]
        md:w-[22.55vw] md:h-[29.86vw]
        lg:w-[16.5vw] lg:h-[29.86vw]
        overflow-hidden"
      >
        <Image
          src={img}
          alt={title}
          fill
          //width={568}
          //height={751}
          className="object-cover mdp:object-cover"
        />
      </div>

      <div className="mt-4">
        <p className="text-[22px]">----- View Collection</p>
      </div>
    </figure>
  );
}
