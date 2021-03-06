import { Menu } from '@material-ui/icons'
import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <IconButton>
                <Menu />
            </div>
            <div className='header__middle'></div>
            <div className='header__right'></div>
        </div>
    )
}

export default Header
