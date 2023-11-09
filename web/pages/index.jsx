import React from 'react'
import Controls from '../site/Controls.jsx'
import Output from '../site/Output.jsx'
import Stonehenge from '../svg/stonehenge.svg?react'

const Index = () =>
  <div className="tablet block-center">
    <div className="desktop block-center stack-tablet flex gap-4">
      <div className="split-4 mar-b-8">
        <Controls/>
      </div>
      <div className="split-3-4">
        <Output/>
        <div className="text-center">
          <Stonehenge className="max-width-4rem mar-t-8"/>
        </div>
      </div>
    </div>
  </div>

export default Index
