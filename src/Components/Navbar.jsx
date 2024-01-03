import React from 'react'

function Navbar() {
    return (
        <>

            <header>

                <nav className="navbar">

                    <div className="logo">E-COMMERCE</div>
                    <div className="searchBar"><input type="text" placeholder='Search Here' /></div>
                    <div className="cart">Cart</div>

                </nav>

                <div className="navBottom">
                    <div className='items'>Filter By {"-->"} </div>
                    <div className='items'>No Filter</div>
                    <div className='items'>Mobiles</div>
                    <div className='items'>Laptops</div>
                    <div className='items'>Tablets</div>
                    <div className='items'>{">="}29999</div>
                    <div className='items'>{">="}49999</div>
                    <div className='items'>{">="}69999</div>
                    <div className='items'>{">="}89999</div>
                </div>

            </header>

        </>
    )
}

export default Navbar
