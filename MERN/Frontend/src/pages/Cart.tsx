import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";

const CartItemData = [
  {
    productId: 1,
    name: "Mac Book",
    photo: "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg",
    price: 2000,
    quantity: 1
  },
  
  
]

const subTotal = 2000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subTotal + tax + shippingCharges - discount;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("")
  const [checkedCouponCode, setCheckedCouponCode] = useState<boolean>(false)

  useEffect(() => {
    const timeId = setTimeout(() => {
      if(Math.random() > 0.3) setCheckedCouponCode(true)
      else setCheckedCouponCode(false)
    }, 1000)

    return () => {
      clearTimeout(timeId)
      // setCheckedCouponCode(false)
    }

  }), [couponCode]


  return (
    <>
      <h1 className="cart-heading">Cart</h1>
    <div className="cart">
      <main>
       {CartItemData.map((item) => (
         <CartItem key={item.productId} cartItem={item}/>
       ))}
      </main>

      <aside>
        <p>Subtotal: Rs {subTotal}</p>
        <p>Shipping Charges: Rs {shippingCharges}</p>
        <p>Tax: Rs {tax}</p>
        <p>
          Discount: <em>Rs {discount}</em>
        </p>
        <p>
          <b>Total: Rs {total}</b>
        </p>

        <input type="text" placeholder="Enter the Coupon Code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)}/>

        {couponCode && (
          checkedCouponCode ? (
            <span className="green">Rs {discount} off using the {couponCode}</span>
          ) : (
            <span className="red">Invalid Coupon Code </span>
          )
        )}
        <button>Apply</button>
      </aside>
    </div>
    </>
  );
};

export default Cart;
