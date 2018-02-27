import React, { Component } from 'react'
import '../styles/App.css'
import Form from '../components/Form'
import Preview from '../components/Preview'

class App extends Component {

  state ={
    colorPrimary: {
      r: '16',
      g: '1',
      b: '1',
      a: '1',
    },
    colorOpinion: {
      r: '255',
      g: '102',
      b: '35',
      a: '1',
    },
    colorHandlerPrimary: {
      r: '245',
      g: '0',
      b: '12',
      a: '1',
    },
    colorHandlerSecondary: {
      r: '255',
      g: '253',
      b: '187',
      a: '1',
    },
    colorComponent: {
      r: '216',
      g: '216',
      b: '216',
      a: '1',
    },
    displayColorPicker1: false,
    displayColorPicker2: false,
    displayColorPicker3: false,
    displayColorPicker4: false,
    displayColorPicker5: false,
  }

  openPrimary = (event) => {
    const name = event.target.name
    this.setState({
      displayColorPicker1: !this.state[name]
    })
  }


  handleClose = () => {
    this.setState({
      displayColorPicker1: false,
      displayColorPicker2: false,
      displayColorPicker3: false,
      displayColorPicker4: false,
      displayColorPicker5: false
    })
  }


  render() {

    const { 
      displayColorPicker1, 
      displayColorPicker2, 
      displayColorPicker3, 
      displayColorPicker4, 
      displayColorPicker5, 
      colorPrimary, 
      colorOpinion, 
      colorHandlerPrimary, 
      colorHandlerSecondary, 
      colorComponent 
    } = this.state

    return (
      <div className="App">
        <div className="app-title">Editor Config</div>

        <Form
          openPrimary={this.openPrimary}
          openOpinion={this.openOpinion}
          openHandlerPrimary={this.openHandlerPrimary}
          openHandlerSecondary={this.openHandlerSecondary}
          openComponent={this.openComponent}

          displayColorPicker1={displayColorPicker1}
          displayColorPicker2={displayColorPicker2}
          displayColorPicker3={displayColorPicker3}
          displayColorPicker4={displayColorPicker4}
          displayColorPicker5={displayColorPicker5}

          colorPrimary={colorPrimary}
          colorOpinion={colorOpinion}
          colorHandlerPrimary={colorHandlerPrimary}
          colorHandlerSecondary={colorHandlerSecondary}
          colorComponent={colorComponent}

          changePrimaryColor={(color) => this.setState({ colorPrimary: color.rgb })}
          changeOpinionColor={(color) => this.setState({ colorOpinion: color.rgb })}
          changeHandlerPrimary={(color) => this.setState({ colorHandlerPrimary: color.rgb })}
          changeHandlerSecondary={(color) => this.setState({ colorHandlerSecondary: color.rgb })}
          changeComponent={(color) => this.setState({ colorComponent: color.rgb })}

          handleClose={this.handleClose}
        />

        <Preview
          colorPrimary={colorPrimary}
          colorOpinion={colorOpinion}
          colorHandlerPrimary={colorHandlerPrimary}
          colorHandlerSecondary={colorHandlerSecondary}
          colorComponent={colorComponent}
        />

      </div>
    )
  }
}

export default App