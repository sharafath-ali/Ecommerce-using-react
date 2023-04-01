import React ,{ createContext,useState,useEffect } from "react";
import { createClient } from '@supabase/supabase-js'

export const Cartcontext=createContext({
  items:[],
  getProductQuantity :()=>{},// we can define this funtion down in Cartprovider function
  addOneToCart:()=>{},
  removeOneFromCart:()=>{},
  deleteFromcart:()=>{},
  getTotalcost:()=>{}
});

function Cartprovider({children}) {
  // <fetch1>
     const supabase = createClient('https://tohotntbwabfhwloqzcw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvaG90bnRid2FiZmh3bG9xemN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQzMjU1NzYsImV4cCI6MTk4OTkwMTU3Nn0.68wZ_XsY2hO_4g2v0cRszz7LGpeztpic9xnocuFiFNE')
     const [products, setProducts] = useState([]);
  // </fetch1>

     const [Cartitems, setCartitems] = useState([])

  // <fetch2>
    useEffect(() => {
      async function fetchProducts() {
          const {data} = await supabase.from('products').select();
          setProducts(data);
      }
      fetchProducts()    
    }, []);
       console.log('this is array',products)
  // </fetch2>
  function getProductQuantity(id){
    const quantity=Cartitems.find(element=>element.id===id)?.quantity
    if(quantity===undefined){
      return 0
    }
    return quantity
  }

  function addOneToCart(id)
  {
      const quantity=getProductQuantity(id)
      if(quantity===0){
         setCartitems([...Cartitems,{id:id,quantity:1}])
      }
      else{
         setCartitems(
           Cartitems.map(
            element=>
            element.id===id?
            {...element,quantity:element.quantity+1}
            :element
            )
         )
         
      }
  }
  function deleteFromcart(id){
    setCartitems(Cartitems=>Cartitems.filter(currentelement=>{
      return currentelement.id !=id;
    }))
  }

  function removeOneFromCart(id){
    const quantity=getProductQuantity(id)
    if(quantity===1)
    {
      deleteFromcart(id)
    }
    else{
      setCartitems(
        Cartitems.map(
          element=>
          element.id===id?
          {...element,quantity:element.quantity-1}
          :element
      )
      )
    }
  }
  function Getproduct(id){
    let Productdata=products.find(Product=>Product.id===id)
    return Productdata
  }

  function getTotalcost(){
    let totalcost=0
    Cartitems.map((Cartitems)=>{
      const productData=Getproduct(Cartitems.id)
      totalcost+=(productData.price*Cartitems.quantity )
    })
    return totalcost
  }
  const contValue={
    items:[],
  getProductQuantity,
  addOneToCart,
  removeOneFromCart,
  deleteFromcart,
  getTotalcost
  }

  return (
    <Cartcontext.Provider value={contValue}>{children}</Cartcontext.Provider>
  )
}

export default Cartprovider;