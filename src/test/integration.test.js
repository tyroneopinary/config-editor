import Nightmare from 'nightmare';

const nightmare = Nightmare()

describe('editor config', () => {
    it('should load the page/ application', (done) => {
        nightmare
            .goto('http://localhost:3000/')
            .wait('.App')
            .evaluate(() => {
                return document.getElementsByClassName('app-title')[0].innerText
            })
            .end()
            .then((appTitle) => {
                expect(pollTitle).toEqual("Editor Config")
                done()
            })
    })

    it('changing primary color picker changes questions color', (done) => {
        nightmare
            .goto('http://localhost:3000/')
            .wait('.App')
            .click('.colorPicker1Button')
            .wait('.colorPicker1')
            .click('.saturation-white')

            .evaluate(() => {
                return document.getElementsByClassName('colorPicker1Color').css()
            })

            .evaluate(() => {
                return document.getElementsByClassName('question').css()
            })

            .end()
            .then((colorPicker, question) => {
                expect(question).toEqual(colorPicker)
                done()
            })
    })

})