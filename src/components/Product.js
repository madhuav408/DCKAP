import React, { useEffect } from 'react'
import {data} from '../products'
import {Link} from 'react-router-dom'
import {Container,Col,Row,Card,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addCart, setProduct } from '../redux/productActions';
const Product=()=>{
    const dispacth=useDispatch();
    const dispatchCart=useDispatch();
    const cart=useSelector(state=>state.cart)
    const products=useSelector(state=>state.allProducts.products);
    useEffect(()=>{
        dispacth(setProduct(data))
    },[])
    const handleClick=(product)=>{
        if(localStorage.getItem(cart)===null){
            localStorage.setItem("cart",JSON.stringify(product))
        }
        let oldData = JSON.parse(localStorage.getItem(cart)) || [];
        oldData.push(product);
        dispatchCart(addCart(product))
    }
    return(
        <div >
           <Container fluid>
            
               
                    <Row>
                    
                         {products.map((product,index)=>{
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
                                <Link to="/cart">
                                        <Button style={{marginBottom:"10px"}}variant="primary" onClick={()=>handleClick(product)}>
                                        Add To Cart
                                        </Button>
                                        </Link>
                            </Card>
                            </Col>

                            )
                        
                   
                })}
                 </Row>
            
           </Container>
        </div>
    )
}

export default Product;