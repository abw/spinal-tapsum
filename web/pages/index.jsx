import React from 'react'
import Controls from '../site/Controls.jsx'
import Output from '../site/Output.jsx'

const Index = () =>
  <div className="tablet block-center stack-tablet">
    <div className="desktop block-center flex gap-4">
      <div className="split-4">
        <Controls/>
      </div>
      <div className="split-3-4">
        <Output/>
      </div>
    </div>
  </div>

export default Index
