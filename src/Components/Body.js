import React, { Component } from "react";
import styles from '../AppStyles.module.css';

class Body extends Component {

    render() {
        return(
            <div  className={styles.feedbackCard}>Name: {this.props.name}  |  Department: {this.props.dept}  |  Rating:  {this.props.rating}</div>
        )
    }
}

export default Body;