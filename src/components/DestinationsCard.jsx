import { Calendar } from "@heroui/react";
import { GoLinkExternal } from "react-icons/go";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { IoCalendarNumberSharp } from "react-icons/io5";
import Link from "next/link";


const DestinationsCard = ({ destination }) => {
  const {_id, country, category, price, duration, imageUrl, description } = destination
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-100 bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
     
      <div className="relative overflow-hidden">
        
        <Image
          alt={destination}
          src={imageUrl}
          height={400}
          width={400}
          className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-5 right-5 rounded-xl bg-white/90 px-4 py-2 text-lg font-bold text-emerald-600 shadow-sm backdrop-blur-md">
          ${price}
        </div>
      </div>

      
      <div className="p-8"> 

        
        <div className="flex items-center justify-between mb-6"> 
          <div className="flex items-center gap-3 text-gray-500"> 
            <LuMapPin className="text-xl text-emerald-500" />
            <span className="text-sm font-medium tracking-wide uppercase">{country}</span>
          </div>
          <span className="rounded-full bg-emerald-50 px-4 py-1 text-xs font-bold uppercase tracking-tighter text-emerald-700">
            {category}
          </span>
        </div>

        
        <div className="mb-8">  
          <h2 className="text-2xl font-extrabold text-slate-800 leading-tight group-hover:text-emerald-600 transition-colors">
            {description}
          </h2>
        </div>

        
        <div className="flex items-center justify-between border-t border-slate-100 pt-6">
          <div className="flex items-center gap-3 text-slate-600">
            <IoCalendarNumberSharp className="text-2xl text-emerald-500" />
            <span className="font-semibold text-lg">{duration}</span>
          </div>


        </div>
      </div>
      <Link href={`/destinations/${_id}`}><button className="flex gap-2 items-center rounded-full bg-slate-900 px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-emerald-600 ml-5">
        Book Now<GoLinkExternal />
      </button></Link>
    </div>
  );
};

export default DestinationsCard;