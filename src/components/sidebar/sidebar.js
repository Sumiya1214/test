import React from "react";
import "./sidebar.css";
import { AiFillBank } from "react-icons/ai";
import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="Sidebar_container">
            <div className="Sidebar_Menu">
                <div className="Sidebar_MenuButton">
                    <span className="Sidebar_MenuSpan">
                        <div className="Sidebar_Menu_Span_icon">
                            <AiFillBank/>
                        </div>
                        <span className="Sidebar_Menu_list"> 
                            <Link to= {"/admin/dashboard"}>nuur huudas</Link>
                        </span>
                    </span>
                </div>
            </div>

        </div>
)
}

export default Sidebar