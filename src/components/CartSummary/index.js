import {AiFillCloseCircle} from 'react-icons/ai'
import Popup from 'reactjs-popup'
import './index.css'
import CartContext from '../../context/CartContext'
import PaymentPopup from '../PaymentPopup'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalAmt = 0
      cartList.forEach(eachCart => {
        totalAmt += eachCart.price * eachCart.quantity
      })
      // console.log(cartList)

      return (
        <div className="cart-summary-container">
          <div className="amt-container">
            <h1 className="amt">
              <span className="order-total-text">Order Total: </span> Rs{' '}
              {totalAmt}/-
            </h1>
          </div>
          <p>{cartList.length} Items in Cart</p>
          <Popup
            modal
            trigger={
              <button type="button" className="Checkout-btn">
                Checkout
              </button>
            }
            closeOnDocumentClick
            contentStyle={{
              background: 'white',
              borderRadius: '16px',
              // padding: '20px',
              width: '80%',
            }}
            overlayStyle={{
              backdropFilter: 'blur(8px)',
              background: 'rgba(0, 0, 0, 0.3)',
            }}
          >
            {close => (
              <div className="popup-container">
                <div className="popup-header-container">
                  <h2 className="popup-heading">Complete your payment</h2>
                  <button
                    type="button"
                    className="popup-close-btn"
                    onClick={() => close()}
                  >
                    <AiFillCloseCircle color="#616E7C" size={20} />
                  </button>
                </div>
                <hr className="popup-line" />
                <PaymentPopup />
              </div>
            )}
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
