import React from 'react';
import styles from './nameCard.css';
import PropTypes from 'prop-types';

class NameCard extends React.Component {

    render () {
        return (
            <div className={styles.cardContainer}>
                <img src={this.props.imageUrl} alt="card_image" className={styles.image} />
                <div className={styles.cardInfo}>
                    <h4 className={styles.entry}>Name: {this.props.name}</h4>
                    <h4 className={styles.entry}>Email: {this.props.email}</h4>
                    <h4 className={styles.entry}>Telephone: {this.props.telephone}</h4>
                </div>
            </div>
        );
    }
};

NameCard.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
}


export default NameCard;