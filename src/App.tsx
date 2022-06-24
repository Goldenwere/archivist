import { ChangeEvent, EventHandler, useState } from 'react'
import logo from './logo.svg'
import './App.sass'
import DropdownSelect from './Shared/Input/DropdownSelect/DropdownSelect'
import TextEntry from './Shared/Input/TextEntry/TextEntry'
import Button from './Shared/Input/Button/Button'
import Toggle from './Shared/Input/Toggle/Toggle'

function App() {
  const [count, setCount] = useState(0)
  const [textValue, setTextValue] = useState('default')
  const [dropdownValue, setDropdownValue] = useState('Item 3')
  const [toggleValue, setToggleValue] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div
          className="testing"
        >
          <h2>Component Testing</h2>
          <DropdownSelect
            options={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']}
            label={'Test Dropdown Select'}
            value={dropdownValue}
            onChange={(val: string) => setDropdownValue(val)}
          />
          <TextEntry
            label={'Test Text Entry'}
            value={textValue}
            onChange={(val: string) => setTextValue(val)}
          />
          <Button
            onClick={() => setCount(count + 1)}
            label={`count is: ${count}`}
          />
          <Toggle
            onChange={(val: boolean) => setToggleValue(val)}
            label={'Toggle'}
            value={toggleValue}
          />
        </div>
        <p>
          <ul>
            <li>Dropdown is: {dropdownValue}</li>
            <li>Text is: {textValue}</li>
            <li>count is: {count}</li>
            <li>toggle is: {toggleValue ? 'checked' : 'unchecked'}</li>
          </ul>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
