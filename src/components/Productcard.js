import React from 'react'
import { Card,Button,Form ,Row ,col} from 'react-bootstrap'
import { useState } from 'react'
import { useContext } from 'react'
import { Cartcontext } from '../Cartcontext'
function Productcard(props) {
 const cart=useContext(Cartcontext)
 const products=props.products
 const ProductQuantity=cart.getProductQuantity(props.hh)
 const [bcounter, setbcounter] = useState(0);
  return (
    <>
    <Card>
        <Card.Body>
            <Card.Title>{products.product_name_en}</Card.Title>
            <Card.Text>
                 <hr></hr>
                  <h5>Product Detail:</h5>
                  <br></br>
                  <p>Product category : {products.product_cat}</p>
                  <p>Weight: {products.product_size}</p>
                  <p>Price:  {products.product_price}Rupees</p>

                  
                  {/*<p>{props.hh}</p> i cannot use key instead of hh*/}

                  <hr/>
               </Card.Text>
               <Button   variant="outline-dark" size='sm' style={{marginRight:'5px',marginBottom:'5px' }}   onClick={()=>{setbcounter(bcounter+1)}}> + </Button>
               <Button style={{marginBottom:'5px'  }} variant="dark" onClick={()=>cart.addOneToCart(props.hh)}>ADD TO CART :{bcounter}</Button>
               <Button variant="outline-dark" size='sm' style={{marginLeft:'5px',marginBottom:'5px'}} onClick={()=>{ if(bcounter>0){ setbcounter(bcounter-1)}}}>-</Button>
        </Card.Body>
    </Card>
    </>
  )
}
     
export default Productcard