import React from 'react';
import styles from './tabs.css';
import Radium from 'radium';


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

            console.log(className);
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
}


export default Tabs;