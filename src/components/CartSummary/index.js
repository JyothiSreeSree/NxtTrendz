import Popup from 'reactjs-popup'
import CartContext from '../../context/CartContext'
import Payment from '../Payment'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const total = cartList.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0,
      )
      return (
        <div>
          <h1>Order Total: Rs.{total}</h1>
          <p>{cartList.length} items in cart</p>
          <Popup modal trigger={<button type="button">Checkout</button>}>
            {close => <Payment close={close} />}
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
