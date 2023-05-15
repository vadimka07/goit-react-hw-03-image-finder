import { ModalOverlay } from "./Modal.styled";
import * as PropTypes from "prop-types";
import { Component } from "react";

export class Modal extends Component {

    handlePressEscape = ( event ) => {
        if ( event.key === 'Escape' ) {
            this.props.onToggle();
        }
    }

    handlePressBackdrop = ( event ) => {
        if ( event.target === event.currentTarget ) {
            this.props.onToggle();
        }
    }

    componentDidMount() {
        document.body.style.overflow = 'hidden';
        window.addEventListener( 'keydown', this.handlePressEscape )
    }

    componentWillUnmount() {
        document.body.style.overflow = 'inherit';
        window.removeEventListener( 'keydown', this.handlePressEscape )
    }

    render() {
        const { largeImage, description } = this.props;
        return (
            <ModalOverlay onClick={ this.handlePressBackdrop }>
                <div className="modal">
                    <img src={ largeImage } alt={ description } width={ 850 } />
                </div>
            </ModalOverlay>
        )
    }
}

Modal.propTypes = {
    largeImage: PropTypes.string,
    description: PropTypes.string,
}