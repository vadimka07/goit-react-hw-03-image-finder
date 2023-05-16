import { Searchbar } from "./Searchbar/Searchbar";
import { Component } from "react";
import { getImagesList } from "./services/api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import PropTypes from "prop-types";
import { Loader } from "./Loader/Loader";

export class App extends Component {
    state = {
        value: '',
        imagesList: [],
        page: 1,
        perPage: 12,
        isLoading: false,
        showBtn: false
    }

    getInputValue = ( value ) => {
        if ( value === this.state.value || !value ) {
            return;
        }
        this.setState( {
            value,
            imagesList: [],
            page: 1,
            perPage: 12,
            isLoading: false,
            showBtn: false
        } )
    }

    loadMore = () => {
        this.setState( prevState => {
            return {
                page: prevState.page + 1,
            }
        } )
    }

    getImages = () => {
        const { value: queryString, page, perPage: per_page } = this.state;
        this.setState( {
            isLoading: true,
        } )
        getImagesList( { queryString, page, per_page } ).then( ( data ) => {
            this.setState( prevState => {
                return {
                    imagesList: [...prevState.imagesList, ...data.hits],
                    showBtn: this.state.page < Math.ceil( data.totalHits / this.state.perPage )
                }

            } )
        } ).catch( ( error ) => {
            console.log( error );
        } ).finally( () => {
            this.setState( {
                isLoading: false,
            } )
        } )
    }

    componentDidUpdate( prevProps, prevState, snapshot ) {
        console.log( prevState.value, this.state.value )
        if ( prevState.value !== this.state.value || prevState.page !== this.state.page ) {
            this.getImages();
        }
    }

    render() {
        return (
            <div
                style={ {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 40,
                    color: '#010101',
                    paddingBottom: 50
                } }
            >
                <Searchbar onSubmit={ this.getInputValue } />
                <ImageGallery listItems={ this.state.imagesList } />
                { this.state.showBtn && <Button onClick={ this.loadMore } /> }
                { this.state.isLoading && <Loader /> }
            </div>
        );
    }

}


App.propTypes = {
    onSubmit:PropTypes.func,
    listItems:PropTypes.array,
    onClick:PropTypes.array
}