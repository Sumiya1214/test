import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Todotable from "../../components/tables/todotable"

const Dashboard = () => {
    return(
        <div className="w-full">
            <div className="p-[10px] m-auto">
                <div className="flex">
                    <div className="w-[300px] h-[full]"><Sidebar/></div>
                    <div className="w-full ml-[5px] bg-[#FAF8F8]" ><Todotable/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard