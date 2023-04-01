
const Product=[
    { 
        id:1,
        title:'strawberry juice',
        price:'6 $'

    },
    {
        id:2,
        title:'guava juice',
        price:'5 $'
    },
    {
        id:3,
        title:'avocado juice',
        price: '3 $'
    },
    { 
        id:4,
        title:'banana juice',
        price:'2.5 $'

    }
]

function Getproduct(id){
    let Productdata=Product.find(Product=>Product.id===id)
    return Productdata
}

export {Product ,Getproduct }




