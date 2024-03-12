import { currencyFormatter } from "../util/formatting"


export default function CartItem({ 
  name, 
  quantity, 
  price, 
  onIncrease, 
  onDecrease
}) {


  return (
    <li className="cart-item">
      <p>
        {/* name - qty x price */}
        {name} - {quantity} X {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button>-</button>
        {/* todo : Fix onDecrease button*/}
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>  
      </p>
    </li>
  )
}