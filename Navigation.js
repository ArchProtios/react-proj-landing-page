import React from 'react'

const Navigation = () => {
    return (
        <>
            <nav className='container'>

                <div className='logo'>
                    <img src='images/brand_logo.png' alt='logo'></img>
                </div>

                <div className='mid-nav'>
                    <ul>
                        <li href='#'>Menu</li>
                        <li href='#'>Location</li>
                        <li href='#'>About</li>
                        <li href='#'>Contact</li>
                    </ul>
                </div>

                <div className='button'>
                    <button> Login </button>
                </div>
                
            </nav>
        </>
    )
}

export default Navigation

