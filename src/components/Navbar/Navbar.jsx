import React from 'react';
import s from './Navbar.module.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <Link to="/game" >Profile</Link>
            </div>
            <div className={s.item}>
                <Link to="/Info" >Info</Link>
            </div>
            <div className={s.item}>
                <Link to="/cardsManagment" >Cards managment</Link>
            </div>
        </nav>
    )
}

export default Navbar;