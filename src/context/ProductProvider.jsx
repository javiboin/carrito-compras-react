import Swal from "sweetalert2"
import { ProductContext } from "./ProductContext"
import { useEffect, useState } from "react"

export const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
        console.log(data)
    } catch (error) {
        Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Hubo un problema al cargar los productos!",
        footer: '<a href="#">¿Por que tuve este problema?</a>'
        });
        console.error(error)
    }
    }

    useEffect(() => {
    fetchProducts()
    }, [])

    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}
