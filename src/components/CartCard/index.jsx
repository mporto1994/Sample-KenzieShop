
import {CartCardStyle} from "./styles.js"
import Button from "../Button"
import {rmToCart} from "../../store/modules/cart/actions"
import { useDispatch, useSelector } from "react-redux"



const CartCard = ({prod}) => {
    const dispatch = useDispatch();

    const handleRmToCart = () => dispatch(rmToCart(prod))

    return (
        <CartCardStyle>
            <img src={prod.image} alt="" />
            <div>
                <p className="name">{prod.name}</p>
                <p className="price">{`R$ ${prod.price},00`}</p>
            </div>
            

            <Button content="Remover" func={handleRmToCart}/>
        </CartCardStyle>
    )

}

export default CartCard