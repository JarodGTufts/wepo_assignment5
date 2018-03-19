import React from 'react';
import styles from './tabs.css';
import PropTypes from 'prop-types';


class Tabs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let theme = this.capitalizeFirstLetter(this.props.theme);
        let layout = this.capitalizeFirstLetter(this.props.layout);

        let header = [];

        let current = this.props.children[0];
        this.props.children.forEach( (tab, index) => {
            let className = "tabHeader" + theme + layout;

            if(tab.props.selectionKey === this.props.currentSelectedTab) {
                current = tab;
                className += "Active";
            }

            header.push(
                <div className={styles[className]}
                     onClick={ () => this.props.onSelect(tab.props.selectionKey)}
                     key={'tabHeader'+index}>
                    {tab.props.title}
                </div>);
        });
        return (
            <div className={styles["tabs" + theme]}>
                <div className={styles["tabList" + theme]}>
                    {header}
                </div>
                <div className={styles["currentTab" + theme + layout]}>
                    {current}
                </div>
            </div>);
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
};

Tabs.propTypes = {
        theme: PropTypes.oneOf(['dark', 'light']).isRequired,
        layout: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
        onSelect: PropTypes.func.isRequired,
        currentSelectedTab: PropTypes.number.isRequired
    };

export default Tabs;