import React, { Component } from 'react'
import Form from './Form'
import Preview from '../components/Preview'
import '../styles/App.css'

class App extends Component {

  state = {
    colorPrimary: {
      r: 16, g: 1, b: 1, a: 1
    },
    colorOpinion: {
      r: 255, g: 102, b: 35, a: 1
    },
    colorHandlerPrimary: {
      r: 245, g: 0, b: 12, a: 1
    },
    colorHandlerSecondary: {
      r: 255, g: 253, b: 187, a: 1
    },
    colorComponent: {
      r: 216, g: 216, b: 216, a: 1
    }
  }

  formToJSON = () => {
    const obj = {
      primary: this.state.colorPrimary,
      opinion: this.state.colorOpinion,
      handlerPrimary: this.state.colorHandlerPrimary,
      handlerSecondary: this.state.colorHandlerSecondary,
      component: this.state.colorComponent
    }

    console.log(JSON.stringify(obj))
  }

  render() {

    const { 
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
        />

        <Preview
          colorPrimary={colorPrimary}
          colorOpinion={colorOpinion}
          colorHandlerPrimary={colorHandlerPrimary}
          colorHandlerSecondary={colorHandlerSecondary}
          colorComponent={colorComponent}
        />

        <button onClick={this.formToJSON}>Save</button>

      </div>
    )
  }
}

export default App