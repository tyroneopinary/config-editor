import React, { Component } from 'react'
import reactCSS from 'reactcss'
import { ChromePicker } from 'react-color'

class Form extends Component {

    formToJson = () => {
        console.log("yep")
    }

    render() {

        const styles = reactCSS({
            'default': {
                colorPrimary: {
                    width: '100%',
                    height: '14px',
                    borderRadius: '2px',
                    background: `rgba(${this.props.colorPrimary.r}, ${this.props.colorPrimary.g}, ${this.props.colorPrimary.b}, ${this.props.colorPrimary.a})`,
                },
                colorOpinion: {
                    width: '100%',
                    height: '14px',
                    borderRadius: '2px',
                    background: `rgba(${this.props.colorOpinion.r}, ${this.props.colorOpinion.g}, ${this.props.colorOpinion.b}, ${this.props.colorOpinion.a})`,
                },
                colorHandlerPrimary: {
                    width: '100%',
                    height: '14px',
                    borderRadius: '2px',
                    background: `rgba(${this.props.colorHandlerPrimary.r}, ${this.props.colorHandlerPrimary.g}, ${this.props.colorHandlerPrimary.b}, ${this.props.colorHandlerPrimary.a})`,
                },
                colorHandlerSecondary: {
                    width: '100%',
                    height: '14px',
                    borderRadius: '2px',
                    background: `rgba(${this.props.colorHandlerSecondary.r}, ${this.props.colorHandlerSecondary.g}, ${this.props.colorHandlerSecondary.b}, ${this.props.colorHandlerSecondary.a})`,
                },
                colorComponent: {
                    width: '100%',
                    height: '14px',
                    borderRadius: '2px',
                    background: `rgba(${this.props.colorComponent.r}, ${this.props.colorComponent.g}, ${this.props.colorComponent.b}, ${this.props.colorComponent.a})`,
                },
                swatch: {
                    padding: '5px',
                    background: '#fff',
                    borderRadius: '1px',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer',
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        })

        const {
            handleClose,

            openPrimary,
            openOpinion,
            openHandlerPrimary,
            openHandlerSecondary,
            openComponent,

            changePrimaryColor,
            changeOpinionColor,
            changeHandlerPrimary,
            changeHandlerSecondary,
            changeComponent,

            colorPrimary,
            colorOpinion,
            colorHandlerPrimary,
            colorHandlerSecondary,
            colorComponent,

            displayColorPicker1,
            displayColorPicker2,
            displayColorPicker3,
            displayColorPicker4,
            displayColorPicker5,
        } = this.props

        return (

            <form>

                <div className="form-group col-md-5">

                    <div className="column">
                        <div>
                            <label>Font:</label>
                            <input name='name' className="form-control" type="text" />
                        </div>

                        <div>
                            <label>Primary color:</label>
                            <div className="colorPicker1Button form-control" style={styles.swatch} onClick={openPrimary}>
                                <div className="colorPicker1Color" style={styles.colorPrimary} />
                            </div>
                            {displayColorPicker1 && <div className="colorPicker1" style={styles.popover}>
                                <div style={styles.cover} onClick={handleClose} />
                                <ChromePicker color={colorPrimary} onChange={changePrimaryColor} />
                            </div>}

                        </div>

                        <div>
                            <label>Opinion color:</label>
                            <div className="form-control" style={styles.swatch} onClick={openOpinion}>
                                <div style={styles.colorOpinion} />
                            </div>
                            {displayColorPicker2 && <div style={styles.popover}>
                                <div style={styles.cover} onClick={handleClose} />
                                <ChromePicker color={colorOpinion} onChange={changeOpinionColor} />
                            </div>}
                        </div>

                    </div>

                    <div className="column">

                        <div>
                            <label>Handler primary:</label>
                            <div className="form-control" style={styles.swatch} onClick={openHandlerPrimary}>
                                <div style={styles.colorHandlerPrimary} />
                            </div>
                            {displayColorPicker3 ? <div style={styles.popover}>
                                <div style={styles.cover} onClick={handleClose} />
                                <ChromePicker color={colorHandlerPrimary} onChange={changeHandlerPrimary} />
                            </div> : null}
                        </div>

                        <div>
                            <label>Handler secondary:</label>
                            <div className="form-control" style={styles.swatch} onClick={openHandlerSecondary}>
                                <div style={styles.colorHandlerSecondary} />
                            </div>
                            {displayColorPicker4 ? <div style={styles.popover}>
                                <div style={styles.cover} onClick={handleClose} />
                                <ChromePicker color={colorHandlerSecondary} onChange={changeHandlerSecondary} />
                            </div> : null}
                        </div>

                        <div>
                            <label> Arch and needle:</label>
                            <div className="form-control" style={styles.swatch} onClick={openComponent}>
                                <div style={styles.colorComponent} />
                            </div>
                            {displayColorPicker5 ? <div style={styles.popover}>
                                <div style={styles.cover} onClick={handleClose} />
                                <ChromePicker color={colorComponent} onChange={changeComponent} />
                            </div> : null}
                        </div>
                    </div>
                </div>

            </form>
        )
    }
}

export default Form