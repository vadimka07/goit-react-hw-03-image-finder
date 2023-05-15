import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Ul } from "./ImageGallery.styled";
import PropTypes from "prop-types";


export function ImageGallery( { listItems } ) {
    return (
            <Ul>
                { listItems.map( ( { id, webformatURL, largeImageURL, tags } ) => {
                    return (
                        <ImageGalleryItem key={ id } webformatImage={ webformatURL } largeImage={ largeImageURL }
                                          description={ tags } />
                    )
                } ) }
            </Ul>

    )
}

ImageGallery.propTypes = {
    listItems:PropTypes.array,
    webformatImage:PropTypes.string,
    largeImage:PropTypes.string,
    description:PropTypes.string
}