import React from 'react'
import { DATE, VERSION } from './Config.js'

const Footer = () =>
  <footer>
    <div className="flex space">
      <div>
        Spinal Tapsum
      </div>
      <div>
        v{VERSION} {DATE}
      </div>
    </div>
  </footer>

export default Footer
