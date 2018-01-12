import React, { Component } from 'react'
import '../styles/App.css'
import Form from '../components/Form'
import Preview from '../components/Preview'

class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      colorPrimary: {
        r: '251',
        g: '212',
        b: '219',
        a: '1',
      }, 
      colorSecondary: {
        r: '151',
        g: '132',
        b: '19',
        a: '1',
      }, 
      displayColorPicker1: false,
      displayColorPicker2: false,
    }

    this.openPrimary = this.openPrimary.bind(this);
    this.openSecondary = this.openSecondary.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  openPrimary(event){
    this.setState({ 
      displayColorPicker1: !this.state.displayColorPicker1
    })
  }

  openSecondary(event) {
    this.setState({
      displayColorPicker2: !this.state.displayColorPicker2
    })
  }

  handleClose = () => {
    this.setState({
      displayColorPicker1: false,
      displayColorPicker2: false
    })
  }


  render() {
    return (
      <div className="App">

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Form openPrimary={this.openPrimary}
              openSecondary={this.openSecondary}
              handleClose={this.handleClose}
              displayColorPicker1={this.state.displayColorPicker1}
              displayColorPicker2={this.state.displayColorPicker2}
              colorPrimary={this.state.colorPrimary}
              colorSecondary={this.state.colorSecondary}
              changePrimaryColor={(color) => this.setState({ colorPrimary: color.rgb })}
              changeSecondaryColor={(color) => this.setState({ colorSecondary: color.rgb })}
          />
        
        <Preview colorPrimary={this.state.colorPrimary}
                 colorSecondary={this.state.colorSecondary}/>

      </div>
    )
  }
}

export default App;
