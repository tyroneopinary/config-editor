import React, { Component } from 'react'
import reactCSS from 'reactcss'
import { ChromePicker } from 'react-color'

class Form extends Component {

    render() {

        const styles = reactCSS({
            'default': {
                colorPrimary: {
                    width: '36px',
                    height: '14px',
                    borderRadius: '2px',
                    background: `rgba(${this.props.colorPrimary.r}, ${this.props.colorPrimary.g}, ${this.props.colorPrimary.b}, ${this.props.colorPrimary.a})`,
                },
                colorSecondary: {
                    width: '36px',
                    height: '14px',
                    borderRadius: '2px',
                    background: `rgba(${this.props.colorSecondary.r}, ${this.props.colorSecondary.g}, ${this.props.colorSecondary.b}, ${this.props.colorSecondary.a})`,
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
            openSecondary, 
            changePrimaryColor, 
            changeSecondaryColor,
            colorPrimary, 
            colorSecondary, 
            displayColorPicker1,
            displayColorPicker2
        } = this.props

        return (
            <div>
                <div>
                    Font: <input type="text"/>
                </div>

                <div>
                    Primary color:
                    <div style={styles.swatch} onClick={openPrimary}>
                        <div style={styles.colorPrimary} />
                    </div>
                    {displayColorPicker1 ? <div style={styles.popover}>
                        <div style={styles.cover} onClick={handleClose} />
                        <ChromePicker color={colorPrimary} onChange={changePrimaryColor} />
                    </div> : null}

                </div>

                <div>
                    Secondary color:
                    <div style={styles.swatch} onClick={openSecondary}>
                        <div style={styles.colorSecondary} />
                    </div>
                    {displayColorPicker2 ? <div style={styles.popover}>
                        <div style={styles.cover} onClick={handleClose} />
                        <ChromePicker color={colorSecondary} onChange={changeSecondaryColor} />
                    </div> : null}
                </div>
            
            </div>
        )
    }
}

export default Form