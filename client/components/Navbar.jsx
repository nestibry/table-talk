import React from 'react'
import Home from '/images/house.png'
import Search from '/images/search.png'
import Profile from '/images/profile.png'

export default function NavBar () {

    return (
        <>
            <div className='fixed-left'>
                <a href=''>
                    <img src={Home} alt='/'></img>
                </a>
                <a href=''>
                    <img src={Search} alt='/search'></img>
                </a>
                <a href=''>
                    <img src={Profile} alt='/profile'></img>
                </a>
            </div>
        </>
    )
}