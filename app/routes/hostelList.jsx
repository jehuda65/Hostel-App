import {Link} from 'react-router-dom';
// import hostels from dataTest/db.json;

const HostelList = ({hostels, title}) => {
const obj = {};
    
    return ( 
        <div className="hostel-list">
            <h1 className="text-3xl font-semi bold">{ title }</h1>
            <div className="flex flex-col gap-8 flex-wrap">

          {Array.isArray(obj) ? hostels.map((hostel) => (
            <div className="px-3 py-4 mx-6 border-b hover:shadow-md hover:cursor-pointer hover:scale-105 hover:transition" key={hostel.id}>
               <Link to={`/HostelInfo/${hostel.id}`}>
                <p className="text-xl font-bold text-pink-500 mb-2">{hostel.place}</p>
                <p>Posted by {hostel.host}</p>
                </Link>
            </div>)): true}
            
            </div>
        </div>
     );
}
 
export default HostelList;