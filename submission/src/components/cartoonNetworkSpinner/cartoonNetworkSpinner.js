import React from 'react';
import styles from './cartoonNetworkSpinner.css';

import PropTypes from 'prop-types';

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
