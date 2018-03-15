import React from 'react';
import styles from './modal.css';


/* TODO: Implement onClose prop function */
class Modal extends React.Component {

    render() {

        /* Modify the display style depending on open vs closed */        
        var display_val = this.props.isOpen ? "block" : "none";

        return (
            <div className={styles.modal} style={{display: display_val}}>
                <div className={styles.modalContent}>

                    <button onClick={this.props.onClose}>Close</button>
                    {this.props.children}

                </div>
            </div>
        );

    }
}

/* Modify the Modal class to enable rendering the title, body, and footer */

Modal.Title = class Title extends React.Component {
    render() {
        return <div className={styles.title}>{this.props.children}</div>
    }
}

Modal.Body = class Body extends React.Component {
    render () {
        return <div className={styles.body}>{this.props.children}</div>
    }
}

Modal.Footer = class Footer extends React.Component {
    render () {
        return <div className={styles.footer}>{this.props.children}</div>
    }
}

export default Modal;
