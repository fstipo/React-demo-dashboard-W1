import React from "react";

const Sidebar = () => {
    console.log("Sidebar.jsx");
    return (
        <div id="sidebar" className="app-sidebar">
            {/* {console.log("Sidebar.jsx")} */}
            {/* <!-- BEGIN scrollbar --> */}
            <div className="app-sidebar-content app-sidebar-minified" data-scrollbar="true" data-height="100%">
                {/* <!-- BEGIN menu --> */}
                <div className="menu">
                    <div className="menu-header">Navigation</div>
                    <div className="menu-item active">
                        <a href="index.html" className="menu-link">
                            <span className="menu-icon"><i className="fa fa-home"></i></span>
                            <span className="menu-text">Home</span>
                        </a>
                    </div>
                </div>
                {/* <!-- END menu --> */}
            </div>
            {/* <!-- END scrollbar --> */}

            {/* <!-- BEGIN mobile-sidebar-backdrop --> */}
            <button className="app-sidebar-mobile-backdrop" data-dismiss="sidebar-mobile"></button>
            {/* <!-- END mobile-sidebar-backdrop --> */}
        </div>
    );
};


export default Sidebar;