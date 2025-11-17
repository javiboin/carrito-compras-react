import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import '../styles/NavbarComponent.css'

export const NavbarComponent = () => {

    const { shoppingList } = useContext(CartContext)

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink  to='/' className="navbar-brand" href="#">Super Compras</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to='/' className="nav-link">Productos</NavLink>
                        </div>
                        <div className="navbar-nav">
                            <NavLink to='/carrito' className="nav-link">Carrito</NavLink>
                        </div>
                    </div>
                    <NavLink to='/carrito' className='cart-icon'>
                        <Badge badgeContent={shoppingList.length} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                    </NavLink>
                </div>
            </nav>  
        </>
    )
}
