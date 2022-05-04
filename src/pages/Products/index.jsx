import {ProductsStyle, Container} from "./styles.js"
import Header from "../../components/Header"
import ProductCard from "../../components/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import CartCard from "../../components/CartCard/index.jsx"
import {addToCart} from "../../store/modules/products/actions"
import { useState } from "react"
import { useEffect } from "react"

const Products = () => {
    const products = useSelector((state)=>state.products)
    const cartProducts= useSelector((state)=> state.cart)
    // const dispatch = useDispatch();
    // const [product, setProduct]=useState("");


    // const handleAddToCart = () => dispatch(addToCart(product))

    useEffect(()=>{

        // console.log("carrinho",cartProducts)
        // console.log("produto",products)
    }, [products,cartProducts])

    return (
        <ProductsStyle>
            <Header/>
            <Container>
                
                <div className="productsList">
                    {/* {console.log(products)} */}
                    {
                    products.length!=0 && products.map(
                        (product)=>{                
                            return(<ProductCard prod={product}/>)})
                    }

                    {/* <ProductCard prod={products[0]}/> */}
                    {/* <ProductCard prod={products[1]}/> */}
                    {/* <ProductCard prod={products[2]}/> */}
                    {/* <ProductCard prod={products[3]}/> */}
                    {/* <ProductCard prod={products[2]}></ProductCard> */}
                    {/* <ProductCard prod={products[3]}></ProductCard> */}
                    {/* <ProductCard prod={products[1]}></ProductCard> */}
                    {/* <ProductCard prod={products[0]}></ProductCard> */}
                </div>
                
                <aside>
                    <h3>Carrinho de Compras</h3>
                    {/* {console.log(cartProducts)} */}
                    {cartProducts.map(
                        (product)=>{                
                            return(<CartCard prod={product}/>)})
                    }

                    {/* <CartCard prod={products}/> */}
                </aside>
                
            </Container>
            
        </ProductsStyle>
    )

}

export default Products