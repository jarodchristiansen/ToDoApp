import React from 'react'
import './Sidebar.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const Sidebar = () => {
    return(
        
        <div className="sideMain">
        <div className="SideOptions">
            <div className="Inbox topOption">
               Inbox
            </div>
            <div className="Today topOption">
                Today
            </div>
            <div className="NextSevenDays topOption">
                Next 7 Days
            </div>
            <div className="Categories topOption dropdown">
                Categories <img></img>
            </div>
            <div className="spacer">
                <br/>
            </div>
            <div className="categoryDropdown">
            <div className="Personal category">
                Personal
            </div>
            <div className="Shopping category">
                Shopping
            </div>
            <div className="Work category">
                Work
            </div>
            <div className="Errands category">
                Errands
            </div>
            <div className="Movies category">
                Movies to watch
            </div>
            <div className="Add category">
                Add a category
            </div>
            
            </div>
            </div>
        </div>
    )
}
export default Sidebar;