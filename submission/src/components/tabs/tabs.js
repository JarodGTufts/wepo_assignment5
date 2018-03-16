import React from 'react';
import styles from './tabs.css';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
    render () {
        return <div>Tabs not implemented</div>;
    }
};

Tabs.propTypes = {
    theme: PropTypes.oneOf(['dark', 'light']).isRequired,
    layout: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
    onSelect: PropTypes.func.isRequired,
    currentSelectedTab: PropTypes.number.isRequired
}



export default Tabs;