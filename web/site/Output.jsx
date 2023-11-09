import React, { useState } from 'react'
import Tapsum from '../context/Tapsum.js'
import Icon from '../ui/Icon.jsx'
import { sleep } from '@abw/badger-utils'

const Output = ({
  output,
}) => {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    console.log(`copying to clipboard...`)
    navigator.clipboard.writeText(output)
    setCopied(true)
    sleep(2000).then(() => setCopied(false))
  }
  return (
    <div>
      <div
        className="pad-4 border surface-5"
        // dangerouslySetInnerHTML={{ __html: output.replaceAll(/\n\n/g, '<br/><br/>') }}
      >
        {/* {output.split(/\n/).map( (t, n) => <>{t}<br/></> )} */}
        {output.split(/\n\n/).map( (t, n) => <p key={n}>{t}</p>)}
      </div>
      <div className="text-right mar-t-2">
        <button
          className={copied ? 'green' : 'brand'}
          onClick={copy}
        >
          { copied ? 'Copied' : 'Copy' }
          <Icon className="on-right" name={copied ? 'check' : 'clipboard'}/>
        </button>
      </div>
    </div>
  )
}

/*
const Format = ({text, style}) => {
  if (style === 'text') {
    return text.map( (t, n) => <p key={n}>{t}</p> )
  }
  else if (style === 'paras')
}
*/


export default Tapsum.Consumer(Output)
