import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Swal from 'sweetalert2'

export const CartPage = () => {

  const { shoppingList, removeProduct, incrementQuantity, decrementQuantity } = useContext(CartContext)

  const calculateTotal = () => {
    return shoppingList.reduce( (total, product) => total + product.price * product.quantity, 0 ).toFixed(2)
  }

  const handlerPurchase = () => {
    const productsPurchased = shoppingList.map(product => `${product.title} x ${product.quantity}`).join('\n')
    Swal.fire({
      icon: "success",
      title: "¡Compra realizada!",
      html: `<p>Has comprado:</p><pre>${productsPurchased}</pre>`
    })
  }

  return (
    <div className="cart-section">
      <h1 className="products-heading">Carrito</h1>

      {shoppingList.length === 0 ? (
        <p className="cart-empty">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="cart-table-wrapper">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Quitar</th>
                </tr>
              </thead>
              <tbody>
                {shoppingList.map(product => (
                  <tr key={product.id}>
                    <td className="cart-product-name">{product.title}</td>
                    <td className="cart-product-price">${product.price}</td>
                    <td>
                      <div className="cart-qty-controls">
                        <button
                          className="cart-qty-btn"
                          onClick={() => decrementQuantity(product.id)}
                          aria-label="Disminuir cantidad"
                        >−</button>
                        <span className="cart-qty-display">{product.quantity}</span>
                        <button
                          className="cart-qty-btn"
                          onClick={() => incrementQuantity(product.id)}
                          aria-label="Aumentar cantidad"
                        >+</button>
                      </div>
                    </td>
                    <td>
                      <button
                        className="cart-remove-btn"
                        onClick={() => removeProduct(product.id)}
                      >
                        Quitar
                      </button>
                    </td>
                  </tr>
                ))}
                <tr className="cart-total-row">
                  <td colSpan={3}><strong>TOTAL</strong></td>
                  <td className="cart-total-price"><strong>${calculateTotal()}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="cart-checkout">
            <button
              className="cart-checkout-btn"
              type="button"
              onClick={handlerPurchase}
            >
              Confirmar compra
            </button>
          </div>
        </>
      )}
    </div>
  )
}
