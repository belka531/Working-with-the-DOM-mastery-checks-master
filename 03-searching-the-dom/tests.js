// This script tests your code, it will run every time you press the button 'run the tests'
// It will call your functions and will change you person object a bit

const { expect } = chai

describe('Searching and Reading elements with the dom', () => {

  it('Create a variable `numberOfSpans` and assign it the value of the number of span-elements on the page', () => {
    expect(numberOfSpans).to.be.a('number')
    expect(numberOfSpans).to.equal(document.getElementsByTagName('span').length)
  })

  it('Create a variable `bestMovie` and assign it the value of the innerHTML of the element with the id `best-movie`', () => {
    expect(bestMovie).to.be.a('string')
    expect(bestMovie).to.equal(document.getElementById('best-movie').innerHTML)
  })

  it('Create a variable `secretAgent` and assign it the value of the alt tag of the element with the id `dog`', () => {
    expect(secretAgent).to.equal('bungee jumping')
  })

  it('Write a function called `findLongOnes` that returns all list items of the page where the innerHTML has a length bigger than 20', () => {
    const longOnes = findLongOnes()
    expect(findLongOnes).to.be.a('function')
    expect(longOnes, 'The `findLongOnes` function should return an array!').to.be.an('array')
    longOnes.map(title => {
      expect(title.length, 'Not all titles in your array are bigger than 20').to.be.gt(20)
    })
    expect(longOnes).to.have.lengthOf(10)

  })

  it('Write a function called `lyDetector`, that checks whether the innerHTML of all `invisible dots`  are indeed dots', () => {
    expect(lyDetector).to.be.a('function')
    expect(lyDetector(), 'Your lyDetector function does not return a boolean!').to.be.a('boolean')
    expect(lyDetector(), 'Did you really check all elements with an `invisible` class?').to.equal(false)
  })

})

describe('Manipulating Elements', () => {
  it('Reassign the value of the `innerHTML` property of the element with the id `title` to `movies`', () => {
    const title = document.getElementById('title')
    expect(title.innerHTML).to.not.equal('All')
  })

  it('Reassign the `draggable` property of the element with the id `i-am-special` to true', () => {
    const specialElement = document.getElementById('i-am-special')
    expect(specialElement.draggable).to.equal(true)
  })
  
  it('Remove the `src` attribute of the element with the id `flower`', () => {
    expect(document.getElementById('flower').src, 'There still is a src attribute').to.equal('')
  })

  describe('Creating Elements', () => {
    it('Create a new h1 element and store it in the variable `message`', () => {
      expect(message.tagName).to.equal('H1')
    })

    it('Reassign the `id` property to `message`', () => {
      expect(message.id).to.equal('message')
    })

    it('Reassign the `innerHTML` property to `Hello!`', () => {
      expect(message.innerHTML).to.equal('Hello!')
    })

    it('Append the new element to the `div` element with the id `main`', () => {
      expect(document.getElementById('message'), "I can't find an element with the ID `message` on this page!").to.exist
    })

    it('Append a `p` element with some innerHTML to the `div` with the id `main`', () => {
      expect(document.getElementsByTagName('p'), 'I cannot find an element with the tagName `p` inside an element with id `main`!').to.have.lengthOf(1)
      expect(document.getElementsByTagName('p')[0].innerHTML, 'The innerHTML is an empty string').to.not.equal('')
    })
  })
 
})
