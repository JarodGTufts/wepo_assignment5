import React from 'react';
import styles from './title.css';


const Title = ({ type, children }) => {

    return <div className={styles.title}>{children}</div>;
    
};


export default Title;