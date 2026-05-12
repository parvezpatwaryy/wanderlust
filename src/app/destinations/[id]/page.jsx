
import { EditModal } from "@/components/Edit";
import { Button } from "@heroui/react";
import Image from "next/image";
import { BiEdit } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";

const DestinationsDetailsPage = async ({ params }) => {
  const { id } = await params
  const res =await fetch(`http://localhost:5000/destination/${id}`)
  const destination = await res.json()
  const {departureDate, country, price, duration, imageUrl, description } = destination
  return (
    <div className="max-w-7xl mx-auto space-y-5">
      <EditModal></EditModal>
      <Image
      alt={description}
      src={imageUrl}
      height={500}
      width={800}
      />
      <div>
        <div className="flex justify-between items-center ">
          <h2 className="text-xl font-bold">{country}</h2>
          <p className="text-xl font-bold">${price}</p>
          </div>
          
        <div className="flex gap-3 items-center">
          <p>{duration}</p>

          <FaCalendarAlt /><h1>{departureDate}</h1>
          
          </div>
          <h2 className="mt-10 text-xl font-bold">OverView</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DestinationsDetailsPage;