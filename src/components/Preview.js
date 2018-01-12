import React, { Component } from 'react'
import reactCSS from 'reactcss'
import '../styles/App.css'


class Preview extends Component {
    
    render() { 
        const styles = reactCSS({
            'default': {
                colorPrimary: {
                    backgroundColor: `rgba(${this.props.colorPrimary.r}, ${this.props.colorPrimary.g}, ${this.props.colorPrimary.b}, ${this.props.colorPrimary.a})`,
                },
                colorSecondary: {
                    color: `rgba(${this.props.colorSecondary.r}, ${this.props.colorSecondary.g}, ${this.props.colorSecondary.b}, ${this.props.colorSecondary.a})`,
                },
            },
        })

        return ( 
            <div className="preview-container">
                <div className="question" style={styles.colorSecondary}>Sample Question?</div>
                <div className="arch" style={styles.colorPrimary}></div>

                <div className="answers">
                    <div className="answer-left">Answer left</div>
                    <div className="answer-right">Answer right</div>
                </div>
            </div>
         )
    }
}
 
export default Preview;