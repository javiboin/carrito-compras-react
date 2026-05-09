import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import '../styles/NavbarComponent.css'

export const NavbarComponent = () => {

    const { shoppingList } = useContext(CartContext)

    return (
        <header className="brut-header">
            <nav className="brut-nav container">
                <NavLink to='/' className="brut-brand">
                    SUPER<span>COMPRAS</span>
                </NavLink>

                <div className="brut-nav-links">
                    <NavLink to='/' className={({ isActive }) => `brut-link ${isActive ? 'brut-link--active' : ''}`}>
                        Productos
                    </NavLink>
                    <NavLink to='/carrito' className={({ isActive }) => `brut-link ${isActive ? 'brut-link--active' : ''}`}>
                        Carrito
                    </NavLink>
                </div>

                <NavLink to='/carrito' className='brut-cart-btn'>
                    <Badge badgeContent={shoppingList.length} color="primary">
                        <ShoppingCartIcon />
                    </Badge>
                </NavLink>
            </nav>
        </header>
    )
}
