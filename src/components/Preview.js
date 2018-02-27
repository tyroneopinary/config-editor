import React, { Component } from 'react'
import reactCSS from 'reactcss'
import '../styles/App.css'

class Preview extends Component {

    render() {
        const primaryColor = `rgba(${this.props.colorPrimary.r}, ${this.props.colorPrimary.g}, ${this.props.colorPrimary.b}, ${this.props.colorPrimary.a})`
        const componentColor = `rgba(${this.props.colorComponent.r}, ${this.props.colorComponent.g}, ${this.props.colorComponent.b}, ${this.props.colorComponent.a})`
        const opinionColor = `rgba(${this.props.colorOpinion.r}, ${this.props.colorOpinion.g}, ${this.props.colorOpinion.b}, ${this.props.colorOpinion.a})`
        const handlerPrimaryColor = `rgba(${this.props.colorHandlerPrimary.r}, ${this.props.colorHandlerPrimary.g}, ${this.props.colorHandlerPrimary.b}, ${this.props.colorHandlerPrimary.a})`
        const handlerSecondaryColor = `rgba(${this.props.colorHandlerSecondary.r}, ${this.props.colorHandlerSecondary.g}, ${this.props.colorHandlerSecondary.b}, ${this.props.colorHandlerSecondary.a})`
        

        const styles = reactCSS({
            'default': {
                colorPrimary: {
                    color: primaryColor
                },
                colorOpinion: {
                    color: opinionColor
                }
            },
        })

        return (
            
            <div className="outer-container col-md-10">
            
                <div className="preview-container-outer col-md-5">Pre-Vote
                    <div className="preview-container-inner">
                        <div className="heading" style={{marginBottom: "20px"}}>
                            <div className="question" style={styles.colorPrimary}>Sample Question?</div>
                        </div>

                        <div className="tool-container" >
                           
                            {/* Tooltip */}
                            <div className="tooltip-container">
                                <div className="tooltip-heading" style={styles.colorPrimary}>Tooltip heading!</div>
                                <div className="tooltip-subheading" style={styles.colorOpinion}>...and the tooltip subheading here</div>
                            </div>

                            <svg x="0px" y="0px" viewBox="0 0 650 400">
                                {/* Arch */}
                                <path id="archPath" fill="transparent" d="M 46 366 A 1 1, 0, 0, 1, 600 366" stroke={componentColor} strokeWidth="30"></path>
                                {/* Needle */}
                                <path fill={componentColor} d="M351.95,350.55c0-12.97-7.73-24.13-18.84-29.13l-5.69-233.28c-0.1-4.13-3.44-7.42-7.42-7.42 s-7.32,3.29-7.42,7.42l-5.69,233.28c-11.11,5-18.84,16.16-18.84,29.13c0,12.55,7.23,23.39,17.75,28.62v7.49 c0,7.13,5.83,12.97,12.97,12.97h2.46c7.14,0,12.97-5.84,12.97-12.97v-7.49C344.72,373.94,351.95,363.1,351.95,350.55z" />

                                {/* Handler */}
                                <svg x="0px" y="-160px" width="640px" height="480px" >
                                    <circle fill={handlerPrimaryColor}  cx="320" cy="240" r="29.5" />
                                    <path fill={handlerSecondaryColor} d="M294.5,240c0-14.08,11.42-25.5,25.5-25.5s25.5,11.42,25.5,25.5 s-11.42,25.5-25.5,25.5S294.5,254.08,294.5,240z" />
                                    <path fill={handlerPrimaryColor} d="M326.29,233.17c0,3,0.34,4.5-2.18,7.66v3.84 c1.68,1,4.36,2,6.2,2.33c2.85,0.67,3.69,1.17,3.69,3.33c0,1-0.5,3.17-2.18,3.17h-23.79c-2.35-1.17-2.01-2-2.01-3.17	c0-2.83,1.5-2.83,4.86-3.66c1.67-0.34,3.35-1.17,5.02-2v-4.17c-1.17-1.33-2.01-4-2.01-5.5v-4.83c1.51-3.67,3.52-3.67,6.03-3.67 C325.29,226.5,326.29,228.67,326.29,233.17z" />
                                </svg>
                            </svg>
                        </div>

                        <div className="answers">
                            <div className="answer-left" style={styles.colorOpinion}>Answer left</div>
                            <div className="answer-right" style={styles.colorOpinion}>Answer right</div>
                        </div>

                        <div className="votes" style={styles.colorPrimary}>41001 votes</div>
                    </div>
                </div>

                <div className="preview-container-outer col-md-5">Post-Vote
                    <div className="preview-container-inner">
                        <div className="heading">
                            <div className="question" style={styles.colorPrimary}>Sample Question?</div>
                            <div className="post-vote-sub-question" style={styles.colorPrimary}>The post-vote sub-question will go here!</div>
                        </div>

                        <div className="tool-container" >
                            <svg x="0px" y="0px" viewBox="0 0 650 400" >

                                {/* Arch */}
                                <path id="archPath" fill="transparent" d="M 46 366 A 1 1, 0, 0, 1, 600 366" stroke={componentColor} strokeWidth="30"></path>

                                {/* User dot */}
                                <svg className="user-dot" x="80px" y="70px" width="640px" height="480px">
                                    <path fill={primaryColor} d="M324.61,240.08 c-0.26,2.51-2.52,4.33-5.05,4.06c-2.52-0.26-4.36-2.51-4.09-5.02c0.26-2.51,2.52-4.33,5.05-4.06 C323.04,235.32,324.87,237.57,324.61,240.08z" />
                                </svg>

                                {/* Other user dots */}
                                <svg x="-114px" y="72px" width="640px" height="480px">
                                    <path fill={opinionColor} d="M324.61,240.08 c-0.26,2.51-2.52,4.33-5.05,4.06c-2.52-0.26-4.36-2.51-4.09-5.02c0.26-2.51,2.52-4.33,5.05-4.06 C323.04,235.32,324.87,237.57,324.61,240.08z"/>
                                </svg>
                                <svg x="-120px" y="90px" width="640px" height="480px">
                                    <path fill={opinionColor} d="M324.61,240.08 c-0.26,2.51-2.52,4.33-5.05,4.06c-2.52-0.26-4.36-2.51-4.09-5.02c0.26-2.51,2.52-4.33,5.05-4.06 C323.04,235.32,324.87,237.57,324.61,240.08z" />
                                </svg>
                                <svg x="-90px" y="80px" width="640px" height="480px">
                                    <path fill={opinionColor} d="M324.61,240.08 c-0.26,2.51-2.52,4.33-5.05,4.06c-2.52-0.26-4.36-2.51-4.09-5.02c0.26-2.51,2.52-4.33,5.05-4.06 C323.04,235.32,324.87,237.57,324.61,240.08z" />
                                </svg>

                                {/* Needle */}
                                <path className="post-vote-needle" fill={componentColor} d="M351.95 350.55c0-12.97-7.73-24.13-18.84-29.13l-5.69-233.28c-0.1-4.13-3.44-7.42-7.42-7.42 s-7.32,3.29-7.42,7.42l-5.69,233.28c-11.11,5-18.84,16.16-18.84,29.13c0,12.55,7.23,23.39,17.75,28.62v7.49 c0,7.13,5.83,12.97,12.97,12.97h2.46c7.14,0,12.97-5.84,12.97-12.97v-7.49C344.72,373.94,351.95,363.1,351.95,350.55z" />

                                {/* Handler */}
                                <svg x="160px" y="-100px" width="640px" height="480px">
                                    <circle fill={handlerPrimaryColor} cx="320" cy="240" r="29.5" />
                                    <path fill={handlerSecondaryColor} d="M294.5,240c0-14.08,11.42-25.5,25.5-25.5s25.5,11.42,25.5,25.5 s-11.42,25.5-25.5,25.5S294.5,254.08,294.5,240z" />
                                    <path fill={handlerPrimaryColor} d="M326.29,233.17c0,3,0.34,4.5-2.18,7.66v3.84 c1.68,1,4.36,2,6.2,2.33c2.85,0.67,3.69,1.17,3.69,3.33c0,1-0.5,3.17-2.18,3.17h-23.79c-2.35-1.17-2.01-2-2.01-3.17	c0-2.83,1.5-2.83,4.86-3.66c1.67-0.34,3.35-1.17,5.02-2v-4.17c-1.17-1.33-2.01-4-2.01-5.5v-4.83c1.51-3.67,3.52-3.67,6.03-3.67 C325.29,226.5,326.29,228.67,326.29,233.17z" />
                                </svg>
                            </svg>
                        </div>

                        <div className="answers">
                            <div className="answer-left" style={styles.colorOpinion}>Answer left</div>
                            <div className="answer-right" style={styles.colorOpinion}>Answer right</div>
                        </div>

                        <div className="votes" style={styles.colorPrimary}>41002 votes</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Preview