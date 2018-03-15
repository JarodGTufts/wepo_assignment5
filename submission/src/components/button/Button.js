import React from 'react';
import styles from './button.css';


const Button = ({ type, children }) => {

    return <button className={styles.btn}>{children}</button>;
};


export default Button;