import DestinationsCard from "@/components/DestinationsCard";


const DestinationsPage = async () => {
  const res = await fetch('http://localhost:5000/destination')
  const destinations = await res.json()

  return (
    <div className="max-w-7xl mx-auto">
      <h1>Al Destinations</h1>

      <div className="grid grid-cols-4 gap-3">
        {
          destinations.map(destination => <DestinationsCard key={destination._id} destination={destination}></DestinationsCard>)
        }
      </div>
    </div>
  );
};

export default DestinationsPage;