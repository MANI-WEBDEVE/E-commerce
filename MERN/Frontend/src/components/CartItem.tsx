import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CartItem = ({cartItem}:any) => {
    const {productId, photo, name, price, quantity} = cartItem
  return (
    <div className='cart-item'>
      <img src={photo} alt="" />
      <article>
        <Link to={`/product/${productId}`}>
            {name}
        </Link>
        <span>Rs {price}</span>
      </article>

      <div>
        <button>
            -
        </button>
        <p>{quantity}</p>
        <button>+</button>
      </div>
      <button>
        <FaTrash/>
      </button>
    </div>
  )
}

export default CartItem
