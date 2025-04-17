import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalAmt = 0
      cartList.forEach(eachCart => {
        totalAmt += eachCart.price * eachCart.quantity
      })

      return (
        <div className="cart-summary-container">
          <div className="amt-container">
            <h1 className="amt">
              <span className="order-total-text">Order Total: </span> Rs{' '}
              {totalAmt}/-
            </h1>
          </div>
          <p>{cartList.length} Items in Cart</p>
          <button type="button" className="Checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
