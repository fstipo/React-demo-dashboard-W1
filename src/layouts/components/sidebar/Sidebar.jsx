import { SidebarLink } from "./SidebarComponents";
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <nav id="sidebar" className="app-sidebar">
            <div className="app-sidebar-content app-sidebar-minified" data-scrollbar="false" data-height="100%">
                <div className="menu">
                    <div className="menu-header">Navigation</div>
                    <SidebarLink linkLabel="Home" linkIcon="home" to="/" />
                    <SidebarLink linkLabel="People" linkIcon="users" to="people" />
                </div>
            </div>
            <button className="app-sidebar-mobile-backdrop" data-dismiss="sidebar-mobile"></button>
        </nav>
    );
};

export default Sidebar;

