import React, { Component } from 'react'
import { ChromePicker } from 'react-color'
import reactCSS from 'reactcss'


class ColorPicker extends Component {
  
  state = {
    visible: false
  }

  handlerVisible  = () => this.setState({visible: !this.state.visible})

  render() {

    const visible = this.state.visible

    const { label, name, color, handleColorChange } = this.props

    const styles = reactCSS({
      'default': {
        color: {
          width: '100%',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${this.props.color.r}, ${this.props.color.g}, ${this.props.color.b}, ${this.props.color.a})`,
        },
        button: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        pickerOuter: {
          position: 'absolute',
          zIndex: '2',
        },
        pickerInner: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    })

    return (
      <div>
        <label>{label}</label>
        <div className="colorPickerButton form-control" style={styles.button} onClick={this.handlerVisible}>
          <div className="colorPickerColor" style={styles.color} id={name}/>
        </div>

        {visible && <div className="colorPicker" style={styles.pickerOuter}>
          <div style={styles.pickerInner} onClick={this.handlerVisible} />
            <ChromePicker color={color} onChange={handleColorChange} />
        </div>}
      </div>
    )
  }
}


export default ColorPicker