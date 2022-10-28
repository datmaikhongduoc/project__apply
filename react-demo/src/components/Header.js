import {FaSearch,FaUserFriends} from "react-icons/fa";
import{ImMenu} from "react-icons/im";
import {BiChart,BiBell} from "react-icons/bi";
import{TbGhost,TbTornado,TbActivity} from "react-icons/tb";
import{AiOutlineClose,AiOutlineAppstore,AiOutlineSetting} from "react-icons/ai";
import { useState } from "react";
const Header = () => {
    // show menu 
    const [showMenu,setShowMenu] = useState(true);

    // const navMenu = document.getElementById('nav-menu'),
    // navToggle = document.getElementById('nav-toggle'),
    // navClose = document.getElementById('nav-close')
    
    // if(navMenu){
    // navToggle.addEventListener("click", ()=>{
    //   navMenu.classList.remove('show-menu')
    // })
    // }
    // if(navClose){
    // navClose.addEventListener("click", ()=>{
    //   navMenu.classList.add('show-menu')
    // })}
    return(
 
            <nav className="navbar">
                <ul className="navbar-nav">
                    <div className="nav__btns nav">
                    <div className="nav__toggle" onClick={()=>setShowMenu(true)} id="nav-toggle">
                        {/* <i className="uil uil-align-justify icon__option" /> */}
                        <ImMenu className="icon__option" />
                    </div>
                    </div>
                    <li className="nav__search nav__float">
                    <form action className="search">
                        <FaSearch className="icon__search"/>
                        <input type="text" placeholder="Search" />
                    </form> 
                    </li>
                    <div className="play-list nav">
                    {/* <img className="playList__logo" src="./menu.png" alt="play-list" srcSet /> */}
                    <ImMenu className="playList__logo" />
                    <p>Play-list</p>
                    </div>
                    <li className="nav-item nav__one nav">
                    {/* <i className="uil uil-chart icon__" /> */}
                    <BiChart className="icon__"/>
                    </li>
                    <li className="notification nav-item nav">
                    {/* <i className="uil uil-bell icon__" /> */}
                    <BiBell className="icon__"/>
                    </li>
                    <li className="icon__square">
                    {/* <i className="uil uil-snapchat-square icon__sq " /> */}
                    <TbGhost className="icon__"/>
                    <span className="friends">My Friends</span>
                    </li>
                    {/*-LIST ITEM */}
                    {showMenu? <div className="nav__menu" id="nav-menu">
                    <ul className="list__item">
                        <div className="logo__name">
                            <div className="buzz__deg">
                                <h1 className="buzz__title">BUZZ!</h1>
                            </div> 
                        </div>
                        <div className="nav__btns">
                            <div className="nav__close" onClick={()=>setShowMenu(false)} id="nav-close">
                                {/* <i className="uil uil-multiply close__button" /> */}
                                <AiOutlineClose className="close__button"/>
                            </div>
                        </div>
                        <li className="title__option">
                        <a href className="nav-link">
                            {/* <img className="playList__logo" src="/layer-out/image/menu.png" alt="" srcSet /> */}
                            <ImMenu className="playList__logo" />
                            <span className="nav__name list">LIST</span>
                        </a>
                        </li>
                        <li className="nav__item">
                        <a href="dashboard" className="nav-link center__text">
                            {/* <i className="icon__link uil uil-apps" /> */}
                            <AiOutlineAppstore className="icon__link"/>
                            <span className="nav__name">Dashboard</span>
                        </a>
                        </li>
                        <li className="nav__item">
                        <a href="activity" className="nav-link center__text">
                            {/* <i className="icon__link uil uil-tornado" /> */}
                            <TbTornado className="icon__link"/>
                            <span className="nav__name">Activity</span>  
                        </a>
                        </li>
                        <li className="nav__item">
                        <a href="trending" className="nav-link center__text">
                            {/* <i className=" icon__link uil uil-trees" /> */}
                            <TbActivity className="icon__link "/>
                            <span className="nav__name">Trending</span>
                        </a>
                        </li>
                        <li className="nav__item">
                        <a href="friend" className="nav-link center__text">
                            {/* <i className="icon__link uil uil-folder-medical" /> */}
                            <FaUserFriends className="icon__link"/>
                            <span className="nav__name">My friends</span>
                        </a>
                        </li>
                        <li className="nav__item">
                        <a href="setting" className="nav-link center__text">
                            {/* <i className="icon__link uil uil-setting" /> */}
                            <AiOutlineSetting className="icon__link"/>
                            <span className="nav__name">Setting</span>
                        </a>
                        </li>
                    </ul>
                    </div>:null}
                    
                </ul>
            </nav>
      
    )
    
};
export default Header;