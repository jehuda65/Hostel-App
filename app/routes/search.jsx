import { Outlet } from "@remix-run/react"
import Navbar from "./components/navbar"
import NewHostelRoute from "./search.new"
import HostelRoute from "./hostel.$hostelId"

export default function Search() {
    return(
        <div>
            <Navbar />
            <p>search</p>
            <main>
                <Outlet />
                <NewHostelRoute/>
                <HostelRoute />
            </main>
        </div>
        )

}