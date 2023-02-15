import React from "react";
import { SidebarLink } from "./SidebarComponents";

const Sidebar = () => {
    return (
        <nav id="sidebar" className="app-sidebar">
            {/* <!-- BEGIN scrollbar --> */}
            <div className="app-sidebar-content app-sidebar-minified" data-scrollbar="false" data-height="100%">
                {/* <!-- BEGIN menu --> */}
                <div className="menu">
                    <div className="menu-header">Navigation</div>
                    {/* TODO active class -> theme color */}
                    <SidebarLink linkLabel="Home" linkIcon="home" to="/" />
                    <SidebarLink linkLabel="People" linkIcon="users" to="people" />
                    <SidebarLink linkLabel="Assets" linkIcon="cog" to="assets" />
                </div>
                {/* <!-- END menu --> */}
            </div>
            {/* <!-- END scrollbar --> */}

            {/* <!-- BEGIN mobile-sidebar-backdrop --> */}
            <button className="app-sidebar-mobile-backdrop" data-dismiss="sidebar-mobile"></button>
            {/* <!-- END mobile-sidebar-backdrop --> */}
        </nav>
    );
};


export default Sidebar;

