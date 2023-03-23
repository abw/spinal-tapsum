#!/usr/bin/env node
import { bin } from '@abw/badger-filesystem'
import { cmdLineArg, cmdLineFlags, quit } from '@abw/badger'
import quotes from '../lib/quotes.js'

const root = bin().up()
const pkg  = await root.file('package.json', { codec: 'json' }).read()
const file = root.dir('src').file('spinal-tap.txt')

const { flags, args } = cmdLineFlags(
  {
    options: 'paras divs lines sequential',
    short: {
      p: 'paras',
      d: 'divs',
      l: 'lines',
      s: 'sequential',
      h: 'help',
      v: 'version',
    },
    on: {
      help,
      version
    }
  },
)

const n    = parseInt(await cmdLineArg('How many paragraphs?', args))
const text = await file.read()
console.log(
  quotes(text, n, flags)
)

function help() {
  quit(`spinal-tapsum.js

Generate sample text in the style of Lorem Ipsum using Spinal Tap quotes.

Usage:
  spinal-tapsum.js [options] number-of-paragraphs

Options:
  -h / --help         This help
  -v / --version      Print version number
  -s / --sequential   Select sequential quotes
  -p / --paras        Wrap each paragraph in <p>...</p>
  -d / --divs         Wrap each paragraph in <div>...</div>
  -l / --lines        Output each paragraph as a single line
`
  )
}

function version() {
  quit(`Version ${pkg.version}`)
}
