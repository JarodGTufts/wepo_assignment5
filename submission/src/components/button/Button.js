import React from 'react';
import styles from './button.css';


const StyleButton = ({ type, children }) => {

    return <button className={styles.btn}>{children}</button>;
};


export default StyleButton;