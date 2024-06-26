import React from 'react'
import Tapsum from '../context/Tapsum.js'
// import Icon from '../ui/Icon.jsx'
import { Icon } from '@abw/badger-icon'

/*
const styles = {
  text:  'Text',
  paras: 'Paragraphs',
  divs:  'Divs'
}
*/

const Controls = ({
  n,
  setN,
  oneQuieter,
  oneLouder,
  sequential,
  setSequential,
  search,
  setSearch,
  clearSearch,
  regenerate,
  // style,
  // setStyle
}) =>
  <div>
    <div className="field">
      <label>Paragraphs</label>
      <div className="flex gap-2">
        <button
          onClick={oneQuieter} className="brand"
          disabled={n === 1}
        >
          -1
        </button>
        <input
          type="number" className="paras-slider"
          value={n} min="1" max="11"
          onChange={e => setN(e.target.value)}
        />
        <button
          onClick={oneLouder} className="brand"
          disabled={n === 11}
        >
          +1
        </button>
      </div>
    </div>
    <div className="field mar-t-4">
      <div className="inputs">
        <div className="prefix">
          <Icon name="search"/>
        </div>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)}/>
        <div className="suffix">
          <Icon name="cross" onClick={clearSearch}/>
        </div>
      </div>
    </div>
    <label className="border">
      <input
        type="checkbox" value={sequential}
        onChange={e => setSequential(e.target.checked)}
      />
      Sequential
    </label>
    {/*
    { Object.entries(styles).map(
      ([value, text]) =>
        <label key={value}>
          <input
            type="radio" name="style" value={value}
            checked={style === value} onChange={() => setStyle(value)}
          />
          {text}
        </label>
    )}
    */}
    <button onClick={regenerate} className="brand wide mar-t-4">
      Regenerate
      <Icon name="rotate" className="on-right"/>
    </button>
  </div>

export default Tapsum.Consumer(Controls)
