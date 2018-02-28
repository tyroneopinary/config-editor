import React, { Component } from 'react'
import ColorPicker from '../components/colorPicker'

class Form extends Component {

    render() {

        const { 
            colorPrimary,
            colorOpinion,
            colorHandlerPrimary,
            colorHandlerSecondary,
            colorComponent,

            changePrimaryColor,
            changeOpinionColor,
            changeHandlerPrimary,
            changeHandlerSecondary,
            changeComponent,
        } = this.props

        return (
            <form>
                <div className="form-group col-md-5">
                    <div className="column">
                        <ColorPicker
                            name={'primaryColor'}
                            label={'Primary color:'}
                            color={colorPrimary}
                            handleColorChange={changePrimaryColor}
                        />

                        <ColorPicker
                            name={'opinionColor'}
                            label={'Opinion color:'}
                            color={colorOpinion}
                            handleColorChange={changeOpinionColor}
                        />
                    </div>

                    <div className="column">
                        <ColorPicker
                            name={'handlerPrimaryColor'}
                            label={'Handler primary:'}
                            color={colorHandlerPrimary}
                            handleColorChange={changeHandlerPrimary}
                        />

                        <ColorPicker
                            name={'handlerSecondaryColor'}
                            label={'Handler secondary:'}
                            color={colorHandlerSecondary}
                            handleColorChange={changeHandlerSecondary}
                        />

                        <ColorPicker
                            name={'componentColor'}
                            label={'Arch & Needle:'}
                            color={colorComponent}
                            handleColorChange={changeComponent}
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default Form