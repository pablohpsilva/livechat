import {
  ShellString,
  test,
  mkdir,
  cd,
  exit,
  exec
} from 'shelljs'
import { join } from 'path'

function getVueComponent (name) {
  return `import React from 'react'

class ${name} extends React.PureComponent {
  render () {
    const compClass = ['${name}', this.props.className || ''].join(' ').trim()
    return (
      <div
        className={compClass}>
        { this.props.children }
      </div>
    )
  }
}

export default ${name}

`.trim()
}

function getTestFile (name) {

  return `import React from 'react';
import { shallow } from 'enzyme';
import ${name} from '../${name}'

test('should render the ${name} component', async () => {
  const wrapper = shallow(
    <${name} />
  )

  expect(wrapper.first().hasClass('${name}')).toMatchSnapshot()
  expect(wrapper).toMatchSnapshot()
})
`.trim()
}

const writeToFile = (contents, file) => {
  new ShellString(contents).to(file)
}

const [name] = process.argv.slice(2)

if (!name) {
  exit('Please provide the file name. Example: npm new-component \'NewComponent\'')
}

const rootDir = join(__dirname, '..')
const componentsPath = 'src/components/' + name

if (!test('-e', componentsPath)) {
  mkdir('-p', componentsPath)
  cd(componentsPath)
  writeToFile(getVueComponent(name), 'index.js')
  writeToFile(getTestFile(name), name + '.test.js')

  cd(rootDir)
} else {
  exit(`echo 'This component already exists'`)
}

exec('yarn lint --fix')
