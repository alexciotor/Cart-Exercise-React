  import {AppContext} from '../App'
  import {useContext} from 'react'
  import {AiFillLock} from 'react-icons/ai'
  const Nav = ()=>{

      const data = useContext(AppContext)
      console.log(data);
return <div className="nav-content">
<h4 className="useReducer">useReducer</h4>
<div className="lock">
<AiFillLock/>
<span className="span">{data.cart.length}</span>
</div>
</div>
}

export default Nav