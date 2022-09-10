import Image from "next/image";
import {IconInfoSquare} from "@tabler/icons";

const SkyScraperAd=({url})=>{
  const width=300;
  //120x600 Skyscraper
  //160x600 Wide Skyscraper
  //300x600 Half-Page Ad

  return(
    <div className={`h-full w-[${width+20}px] bg-slate-400 grid place-content-center`}>



      <div className={`h-[650px] w-[${width}px]`}>
        <div className={`h-[600px] w-[${width}px] my-auto bg-gray-300 relative`}>
          <Image src={url} alt={'ad image'}  objectFit='cover' layout="fill"/>
        </div>
        <div className="h-[50px] w-full flex justify-center">
          <span>ADVERTISEMENT</span><IconInfoSquare/>
        </div>
      </div>



    </div>
  )
}

export default SkyScraperAd;