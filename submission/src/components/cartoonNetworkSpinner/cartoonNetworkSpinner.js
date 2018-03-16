import React from 'react';
import styles from './cartoonNetworkSpinner.css';

import PropTypes from 'prop-types';

import Image from '../../static/img/cartoonNetworkSpinner/0.png';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../../static/img/cartoonNetworkSpinner/', false, /\.(png|jpe?g|svg)$/));

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
        return <img src={images[this.state.index]} className = {styles.image}/>;
    }

    rotateImages() {

        let index = (this.state.index + 1) % images.length;
        this.setState({index: index});
    }
};

CartooNetworkSpinner.propTypes = {
    interval: PropTypes.number.isRequired
}

export default CartooNetworkSpinner;