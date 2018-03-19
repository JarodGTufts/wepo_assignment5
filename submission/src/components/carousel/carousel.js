import React from 'react';
import styles from './carousel.css';
import PropTypes from 'prop-types';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
        this.length = props.images.length;
    }

    render () {
        return (
            <div className = {styles.main}>
                <div className = {styles["content" + this.props.size]}>
                    <div className = {styles.image}>
                        <img className = {styles["img"]} src={this.props.images[this.state.index]}
                        alt= {""}/>
                    </div>

                    <div className = {styles.buttons}>
                        <button
                            onClick = {() => {
                                let index = this.state.index;
                                if(--index < 0)
                                    index = this.length - 1;
                                this.setState({index: index});
                            }}
                        className = {styles.button}>Left</button>
                        <button onClick = {() => {
                            let index = this.state.index;
                            if(++index > this.length - 1)
                                index = 0;
                            this.setState({index: index});
                        }}
                        className = {styles.button}>Right</button>
                    </div>
                </div>
            </div>);
    }
};

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired
}

Carousel.defaultProps = {
    size: 'medium'
}

export default Carousel;
