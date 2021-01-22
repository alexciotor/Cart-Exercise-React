import {useContext } from 'react'
import {AppContext} from '../App'
import {IoIosArrowDown} from 'react-icons/io'
import {IoIosArrowUp} from 'react-icons/io'
const Content = ({increase, decrease})=>{
    const data = useContext(AppContext)
     const {id,img,price,title,amount} = data
   return   data.cart.map(item=>{
const {id,img,price,title,amount} = item
return <article key={id} className="article">
    <header className="head">
    <div className="img">
    <img src={img} alt={title}/>
    </div>
    <div className="content">
    <h4>{title}</h4>
    <p>{price}</p>
    <button className="btn">remove</button>
    </div>
    </header>
    <footer className="footer">
    <div className="footer-content">
    <IoIosArrowUp onClick={()=>{
        increase(id)
    }} />
    <p>{amount}</p>
<IoIosArrowDown onClick={()=>{
    decrease(id)
}}/>
    </div>
    </footer>
    </article>

     })
    }


export default Content