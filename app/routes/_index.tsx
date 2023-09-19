// import type { V2_MetaFunction } from "@remix-run/node";
import Navbar from "./components/navbar";
import HomeSearch from "./components/homeSearch";
import Established from "./components/established";
import Advert from "./components/advert";
import Footer from "./components/footer";
import HostelList from "./hostelList";
import useFetch from "./useFetch";
  

// export const meta: V2_MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

export default function Index() {

  
  const{ data: hostels} = useFetch('http://localhost:8000/hostels');

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Navbar />
    
      <HomeSearch/>
      <Established />
      <Advert />
      <div className="text-center py-8 font-bold text-gray-700">
      <HostelList  hostels={hostels} title="Our Listings"/> 
      </div>
      <Footer />

      
    </div>
  );
}
