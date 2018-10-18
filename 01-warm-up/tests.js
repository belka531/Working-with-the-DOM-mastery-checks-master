// This script tests your code, it will run every time you press the button 'run the tests'
// It will call your functions and will change you person object a bit

const { expect } = chai

describe('Assigning & Reassigning', () => {
  it('Declare a variable `message` and assign it a string with a message', () => {
    expect(sinon.match.defined.test(message)).to.equal(true)
    expect(message, 'Your person is no string').to.be.a('string')
  })

  it('Reassign the value of your message to the string `Are you ready???`', () => {
    expect(sinon.match.defined.test(message)).to.equal(true)
    expect(message).to.equal('Are you ready???')
  })

  it('Declare a variable `person` and assign it an empty object', () => {
    expect(sinon.match.defined.test(person)).to.equal(true)
    expect(person, 'Your person is not an object').to.be.an('object')
  })
})

describe('Objects, properties and values', () => {
  it('Your person object should have a `name` property that is a string', function () {
    expect(person.name).to.be.a('string')
  })

  it('Your person object should have a `coder` property that is a boolean', function () {
    expect(person.coder).to.be.a('boolean')
  })

  it('Your person object should have a `daysOfExperience` property that is a number', function () {
    expect(person.daysOfExperience).to.be.a('number')
  })

  it('Your person object should have a `projects` property that is an array, with three titles of coding projects you did or would like to do', function () {
    expect(person.projects).to.be.an('array')
    expect(person.projects.length).to.equal(3)
  })

  it('Your person object should have a `bestProject` property that is a an object', function () {
    expect(person.bestProject).to.be.an('object')
  })

  it('The bestProject object should have the properties `title`, `description` and `link`, which are all strings', function () {
    expect(person.bestProject.title).to.be.a('string')
    expect(person.bestProject.description).to.be.a('string')
    expect(person.bestProject.link).to.be.a('string')
  })

  it('Your person object should have a `present` property that is a a function which returns the string `I love coding!`', function () {
    expect(person.present).to.be.a('function')
    expect(person.present()).to.equal("I love coding!")
  })
})
