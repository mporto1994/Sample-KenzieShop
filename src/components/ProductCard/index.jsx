
import {ProdCardStyle} from "./styles.js"
import Button from "../Button"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import {addToCart} from "../../store/modules/cart/actions"



const ProductCard = ({prod}) => {
    const dispatch = useDispatch();


    const handleAddToCart = () => dispatch(addToCart(prod))



    return (
        <ProdCardStyle>
            <img src={prod.image} alt="" />
            <div>
                <p className="name">{prod.name}</p>
                <p className="price">{`R$ ${prod.price},00`}</p>
            </div>
            

            <Button content="Adicionar ao Carrinho" func={handleAddToCart}/>
        </ProdCardStyle>
    )

}

export default ProductCard