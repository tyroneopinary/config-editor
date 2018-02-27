import React, { Component } from 'react'
import { ChromePicker } from 'react-color'


class ColorPicker extends Component {

  handlerColorChange = (e) => {
    console.log(e)
  }

  render() {

    const { label, name, color, } = this.props

    

    return (
      <div>
        <span> {label} </span>
        <ChromePicker name={name} color={color} onChange={this.handlerColorChange} />
      </div>
    )
  }
}


export default ColorPicker