import {useContext} from 'react'
import {AppContext} from '../App'
const Footer = ()=>{
    const data = useContext(AppContext)
console.log(data);
    return <div className="clear-cart">
    <div className="clear-content">
    <h4>Total</h4>
    <span> {data.orderTotal}</span>
    </div>
    <button className="cart-btn">Clear Cart</button>
    </div>
}
export default Footer