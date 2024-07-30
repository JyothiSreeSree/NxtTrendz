import CartContext from '../../context/CartContext'

const CartSummary = props => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalAmount = 0
      const len = cartList.length

      const total = cartList.map(each => {
        totalAmount += each.quantity * each.price
        return each
      })
      return (
        <div>
          <h1>Order Total: Rs.{totalAmount}</h1>
          <p>{cartList.length} items in cart</p>
          <button>Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
