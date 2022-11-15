import React from 'react'
import style from './header.module.css'

function Header() {
    return (
        <nav className={style.nav}>
            <div className={style['left-section']}>
                <i></i>
                <h3>Awesome Booking Site</h3>
            </div>

            <ul>
                <li>Home</li>
                <li>Order History</li>
                <li>Account Setting</li>
                <li>Manage Booking</li>
            </ul>  <div className={style['right-section']}>
                <div>Become a Host</div>
                <div className={style['user-box']}>
                    <i className='iconfont'></i>
                </div>
            </div>

            <div className={style.line}></div>
        </nav>
    )
}

export default Header