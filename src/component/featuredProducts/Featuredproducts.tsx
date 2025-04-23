// import  { useEffect, useState } from 'react'
// import axios from 'axios'
// import ProductTypes from '../../types/productTypes.types'

// function Featuredproducts() {
    
//     const [products, setProducts]=useState<ProductTypes[]>([])
//     const [loading, setLoading]=useState<boolean>(true)
//     const [error, setError]=useState<boolean>(false)

    

//     useEffect(()=>{
//         const fetchProductsList=async()=>{
//             try {
//                 const fetchProductsRes = await axios.get("https://api.sampleapis.com/coffee/hot")
//                 setProducts(fetchProductsRes.data)
//                 console.log(fetchProductsRes)
//                 setLoading(false)
//             } catch (error ) {
//                 setError(true)
//             }finally{
//                 setLoading(false)
//             }
//         }
//         fetchProductsList()
//     },[])


//   return (
//     <div>Featuredproducts</div>
//   )
// }

// export default Featuredproducts