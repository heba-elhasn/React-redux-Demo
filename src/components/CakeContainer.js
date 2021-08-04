import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

const CakeContainer = (props) => {
    return (
        <div>
            <h3> number of cakes {props.numOfCakes}</h3>
            <button onClick={ props.buyCake}>Buy Cake</button>
        </div>
    )
}
const mapStateToProps =(state)=>{
return{
    numOfCakes: state.numOfCakes
}}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake: ()=> dispatch(buyCake())
    }
}
export default  connect (mapStateToProps, mapDispatchToProps)(CakeContainer)
