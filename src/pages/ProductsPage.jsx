import { useContext } from "react"
import { CardComponent } from "../components/CardComponent"
import { ProductContext } from "../context/ProductContext"
import { CartContext } from "../context/CartContext"

export const ProductsPage = () => {

  const { products } = useContext(ProductContext)
  const { addProduct, removeProduct } = useContext(CartContext)

  return (
    <div className="products-section">
      <h1 className="products-heading">Catálogo</h1>
      <div className="products-grid">
        {products.map(product => (
          <CardComponent
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            handlerAdd={ () => addProduct(product) }
            handlerRemove={ () => removeProduct(product.id) }
          />
        ))}
      </div>
    </div>
  )
}
