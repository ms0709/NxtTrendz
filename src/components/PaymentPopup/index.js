import {Component} from 'react'
import './index.css'
import CartContext from '../../context/CartContext'

class PaymentPopup extends Component {
  state = {paymentSuccess: false, paymentMethod: ''}

  renderPaymentSuccessView = () => (
    <h2 className="success-msg">Your order has been placed successfully</h2>
  )

  onChangePaymentMethod = event => {
    this.setState({paymentMethod: event.target.value})
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value
          const {paymentSuccess, paymentMethod} = this.state
          let totAmount = 0
          cartList.forEach(eachCart => {
            totAmount += eachCart.price * eachCart.quantity
          })

          const onSubmitPayment = event => {
            event.preventDefault()

            this.setState({paymentSuccess: true})
          }

          return (
            <>
              {paymentSuccess ? (
                this.renderPaymentSuccessView()
              ) : (
                <div className="popup-content">
                  <>
                    <div className="popup-product-summary-container">
                      <h2 className="amt-text">
                        Total Amount Rs:{' '}
                        <span className="amt">{totAmount}</span>
                      </h2>
                    </div>
                    <form
                      className="popup-form-container"
                      onSubmit={onSubmitPayment}
                    >
                      <div className="option-container">
                        <input
                          type="radio"
                          name="paymentType"
                          id="card"
                          className="payment-option-radio"
                          onChange={this.onChangePaymentMethod}
                          value={paymentMethod}
                        />
                        <label htmlFor="card" className="label">
                          Card
                        </label>
                      </div>
                      <div className="option-container">
                        <input
                          type="radio"
                          name="paymentType"
                          id="netBanking"
                          className="payment-option-radio"
                          onChange={this.onChangePaymentMethod}
                          value={paymentMethod}
                          disabled
                        />
                        <label htmlFor="netBanking" className="label">
                          Net Banking
                        </label>
                      </div>
                      <div className="option-container">
                        <input
                          type="radio"
                          name="paymentType"
                          id="upi"
                          className="payment-option-radio"
                          onChange={this.onChangePaymentMethod}
                          value={paymentMethod}
                        />
                        <label htmlFor="upi" className="label">
                          UPI
                        </label>
                      </div>
                      <div className="option-container">
                        <input
                          type="radio"
                          name="paymentType"
                          id="wallet"
                          className="payment-option-radio"
                          onChange={this.onChangePaymentMethod}
                          value={paymentMethod}
                        />
                        <label htmlFor="wallet" className="label">
                          Wallet
                        </label>
                      </div>
                      <div className="option-container">
                        <input
                          type="radio"
                          name="paymentType"
                          id="cashOnDelivery"
                          className="payment-option-radio"
                          onChange={this.onChangePaymentMethod}
                          value={paymentMethod}
                        />
                        <label htmlFor="cashOnDelivery" className="label">
                          Cash on Delivery
                        </label>
                      </div>
                      <button type="submit" className="conform-order-btn">
                        Confirm Order
                      </button>
                    </form>
                  </>
                </div>
              )}
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default PaymentPopup
