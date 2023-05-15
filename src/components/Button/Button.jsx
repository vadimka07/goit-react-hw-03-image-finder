import { ButtonStyle } from "./Button.styled";
import PropTypes from "prop-types";

export function Button( { onClick } ) {
    return (
        <ButtonStyle onClick={ onClick }>Load more</ButtonStyle>
    )
}

Button.propTypes = {
    onClick:PropTypes.func
}