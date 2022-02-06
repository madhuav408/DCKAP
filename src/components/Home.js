import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import { BsFillCartPlusFill } from "react-icons/bs";
import {Link} from 'react-router-dom'
const Home=()=>{
    return(
        <div>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container>
                <Navbar.Brand>
                    <Link to="/" style={{textDecorationLine:"none"}}>
                    DXKAP
                    </Link>
                    </Navbar.Brand>
                <Navbar.Brand href="cart">
                <Link to="/cart">
                    <BsFillCartPlusFill/>
               </Link>
                </Navbar.Brand>

                </Container>
            </Navbar>
        </div>
    )
}

export default Home;