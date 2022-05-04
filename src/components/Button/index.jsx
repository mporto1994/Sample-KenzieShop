
import {ButtonStyle} from "./styles.js"


const Button = ({content, func}) => {


    return (
        <ButtonStyle onClick={func}>{content}</ButtonStyle>
    )

}

export default Button