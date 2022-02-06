import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Container,Col,Row,Card,Button,ButtonToolbar,ButtonGroup, ToggleButton} from 'react-bootstrap'
import {AiOutlinePlusCircle,AiOutlineMinusCircle,AiFillDelete} from "react-icons/ai"
import { addCart, deleteProduct, updateQuantity } from '../redux/productActions';
const Cart=()=>{
    const cart=useSelector(state=>state.cart)
   
    const dispatch=useDispatch()
    const deleteCart=useDispatch()
    // useEffect(()=>{
    //     localStorage.setItem("cart",JSON.stringify(cart))
    // },[cart])
    // if(cart.length===0 && localStorage.getItem("cart")!==null){
    //     dispatch(addCart(JSON.parse(localStorage.getItem("cart"))))
    // }
    // const data= cart.filter((product,index,self)=>product.length!=0 && index===self.findIndex(data=>data.sku===product.sku && data.productName===product.productName))
    
    const handlePlus=(product)=>{
        
                product.quantity=product.quantity+1;
                dispatch(updateQuantity(product))
            
    }
    const handleMinus=(product)=>{
        if(product.quantity>0){
            console.log(product.quantity)
            product.quantity=product.quantity-1;
            dispatch(updateQuantity(product))
        }
    }
    const handleDelete=(product)=>{
        deleteCart(deleteProduct(product))
    }
    const totalPrice=()=>{
        
        const totalPrice=cart.reduce((price,product)=>price+(product.quantity * product.price),0)
        // console.log(totalPrice)
        return totalPrice
    }
    
    return(
        <div >
        {cart.length===0 ? <span>Nothing in Cart.Please add products in cart to view......</span> :

           <Container fluid>
            
               
                    <Row>
                         {cart.map((product,index)=>{
                        return(
                            <Col sm={3} style={{marginTop:"5px"}}>
                            <Card key={index}>
                            <Card.Img variant="top" style={{width:"100%",height:"300px"}} src={product.productImage} />
                            <Card.Body>
                                    <Card.Title>{product.poductName}</Card.Title>
                                    <Card.Text style={{fontWeight:"bold"}}>
                                      <span style={{float:"left"}}>  {`SKU ${product.sku}`} </span>
                                      <span style={{float:'right'}}>  {`Price:$${product.price}`} </span>
                                    </Card.Text>
                                    
                                    
                                </Card.Body>
                                <Card.Footer>
                                      <span style={{float:'left'}}>  Quantity </span>
                                      <span style={{float:'right'}}>  
                                    <AiOutlineMinusCircle 
                                    onClick={()=>handleMinus(product)}
                                    />
                                    {product.quantity}  
                                    <AiOutlinePlusCircle 
                                    onClick={()=>handlePlus(product)}
                                    />
                                    </span>
                                    <AiFillDelete style={{color:"red"}} onClick={()=>handleDelete(product)}/>
                                    </Card.Footer>
                            </Card>
                            </Col>

                            )
                        
                   
                })}
                 </Row>
                 <div style={{fontWeight:"bold",marginTop:"10px"}}>
                     subTotal :$ {totalPrice()}
                 </div>
           </Container>
           
}
        </div>
    )
}

export default Cart;