import React from 'react'
import './App.scss';
import {useReducer,useState,useEffect} from 'react'
import Content from './modules/content'
import Nav from './modules/nav'
import Loading from './modules/loading'
import Footer from './modules/footer'
const AppContext = React.createContext()
const url = 'https://course-api.com/react-useReducer-cart-project'
  
const initialState = {
  loading:false,
  cart:[],
 
}

const reducer = (state,action) =>{
  if(action.type === 'ITEMS'){
    return {...state, cart:action.payload}
  }
  if(action.type==='LOADING'){
    return {...state, loading:true}
  }
  if(action.type === 'INCREASE'){
  let tempCart = state.cart.map(item=>{
    if(item.id === action.payload){
      return {...item, amount: item.amount + 1}
    }
return item    
  })
  return {...state , cart:tempCart}
    }
    if(action.type ==='DECREASE'){
      let temCart = state.cart.map(item=>{
        if(item.id ===action.payload){
          return {...item, amount:  item.amount-1}
        }
        return item
      }).filter(item=>item.amount !==0)
      return {...state, cart:temCart}
    }
    if(action.type==='TOTAL'){
const {orderTotal, totalItems} = state.cart.reduce((cartTotal, cartItem)=>{
  
})
    }
}


function App() {
  const [data, getData ] =  useState([])
const [loading,setLoading] = useState(false); 
const [state, dispatch] = useReducer(reducer, initialState)
 


const getItems = async()=>{
  dispatch({type:'LOADING'})
  const response = await fetch(url);
  const data = await response.json()
 dispatch({type:'ITEMS', payload:data})
}

const increase =(id)=>{
  dispatch({type:'INCREASE',payload:id})
}
const decrease = (id) =>{
  dispatch({type:'DECREASE',payload:id})
}
useEffect(()=>{
getItems()
},[])
 
 useEffect(()=>{
   dispatch({type:'TOTAL'})
 },[state.cart])
if(loading){
  return <Loading/>
}
  return (
    <AppContext.Provider value = {state} >
 <Nav/>
 <div className="bag"><h4>your bag</h4></div>
 <Content increase ={increase} decrease={decrease}/>
 <Footer/>
    </AppContext.Provider>
  );
}

export default App;
export {AppContext}