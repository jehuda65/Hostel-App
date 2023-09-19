import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const HostelInfo = () => {
    const { id } = useParams();
    const { data: hostel, error, isPending} = useFetch( 'http://localhost:8000/hostels/' + id);
    const navigate = useNavigate();

    const handleClick =() => {
        fetch('http://localhost:8000/hostels/' + hostel.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        }) 
    }


    return ( 
        <div className="text-sm">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { hostel && (
                <article>
                    <h2 className="text-xl text-pink-600 mb-4 font-semibold">{hostel.place}</h2>
                    <p className="text-sm">Hosted by {hostel.host}</p>
                    <div className="text-sm font-normal my-5">{ hostel.body }</div>
                    <button onClick={handleClick} className="bg-pink-600 text-white font-semibold px-3 py-2 rounded-lg hover:bg-pink-400 transition-all">Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default HostelInfo;