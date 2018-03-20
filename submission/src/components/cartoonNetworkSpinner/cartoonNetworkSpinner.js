import React from 'react';
import styles from './cartoonNetworkSpinner.css';

import PropTypes from 'prop-types';

const images = [
    'https://image.ibb.co/dnUJPc/9.png',
    'https://preview.ibb.co/kOVQ4c/8.png',
    'https://image.ibb.co/f0CGAH/7.png',
    'https://preview.ibb.co/et4UVH/6.png',
    'https://image.ibb.co/iFewAH/5.png',
    'https://image.ibb.co/jKTpVH/4.png',
    'https://image.ibb.co/ccGMcx/3.png',
    'https://image.ibb.co/fEAExx/2.png',
    'https://preview.ibb.co/jOddPc/1.png',
    'https://image.ibb.co/gPOCjc/0.png']

class CartoonNetworkSpinner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index : 0,
        };
    }
    componentDidMount() {
        setInterval(this.rotateImages.bind(this), this.props.interval * 1000)
    }
    render() {

        return <img alt={""} src={images[this.state.index]} className={styles.image} style={{'-webkit-animation-duration': this.props.interval+'s'}} />;
    }

    rotateImages() {

        let index = (this.state.index + 1) % images.length;
        this.setState({index: index});
    }
};

CartoonNetworkSpinner.propTypes = {
    interval: PropTypes.number.isRequired
}

CartoonNetworkSpinner.defaultProps = {
    interval: 3
}

export default CartoonNetworkSpinner;
