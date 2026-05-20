import { useState } from "react";
import { useSelector } from "react-redux";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import DashboardMenu from "../Menu/Menu"
import './Header.css';

const NavHeader = ({ isMenuOpen, toggleMenu, onMenuClose, onClick }) => {
    const user = useSelector(state => state.auth.user);
    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <>
            {/* Overlay */}
            {isMenuOpen && (
                <div className="menu-overlay" onClick={onMenuClose}></div>
            )}

            {/* Sidebar Menu */}
            <div className={`sidebar-wrapper ${isMenuOpen ? 'open' : ''}`}>
                <DashboardMenu onClose={onMenuClose} />
            </div>

            {/* Main Content */}
            <div className={`main-header-wrapper ${isMenuOpen ? 'shifted' : ''}`}>
                <div className="nav-header">
                    <div className="nav-left">
                        <IoReorderThreeOutline size={35} onClick={toggleMenu} className="menu-toggle" />
                        <div className="search-input-field">
                            <input type="text" placeholder="Search" className="search-input" />
                            <IoSearchOutline size={25} className="search-icon" />
                        </div>
                    </div>
                    <div className="nav-right">
                        <div className="nav-notifications">
                            <IoNotificationsOutline size={24} className="notification" />
                        </div>
                        <div className="nav-dark-mode-toggle">
                            {isDarkMode ? <MdOutlineDarkMode size={24} /> :
                                <MdOutlineLightMode size={24} />}
                        </div>
                        <div className="nav-user-profile">
                            <span className="user-name"><FaRegUserCircle size={24} />{user?.name || 'User'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavHeader;