import { Li } from "./ImageGalleryItem.styled";
import { Modal } from "../Modal/Modal";
import * as PropTypes from "prop-types";
import { Component } from "react";

export class ImageGalleryItem extends Component {
    state = {
        isOpenModal: false,
    }

    toggleModal = ( event ) => {
        this.setState( prevState => {
            return {
                isOpenModal: !prevState.isOpenModal
            }
        } )
    }

    render() {
        const { webformatImage, largeImage, description } = this.props;
        return (
            <>
                <Li>
                    <img src={ webformatImage } alt={ description } width={ 250 } onClick={ this.toggleModal } />
                </Li>
                { this.state.isOpenModal &&
                    <Modal largeImage={ largeImage } description={ description } onToggle={ this.toggleModal } /> }
            </>
        )
    }
}

ImageGalleryItem.propTypes = {
    webformatImage: PropTypes.string,
    largeImage: PropTypes.string,
    description: PropTypes.string
}