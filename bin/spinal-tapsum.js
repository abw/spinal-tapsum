#!/usr/bin/env node
import { bin } from '@abw/badger-filesystem'
import { cmdLineArg, cmdLineFlags, quit } from '@abw/badger'

const { flags, args } = cmdLineFlags(
  {
    options: 'paras divs lines',
    short: {
      p: 'paras',
      d: 'divs',
      l: 'lines',
      h: 'help',
      v: 'version',
    },
    on: {
      help,
      version,
    }
  },
)

const n      = parseInt(await cmdLineArg('How many paragraphs?', args))
const text   = await bin().up().file('spinal-tap.txt').read()
const paras  = text.split(/\n\n+/)
const start  = Math.floor(Math.random() * (paras.length - n))
const end    = start + n
const slice  = paras.slice(start, end)
const elem   = flags.paras ? 'p' : flags.divs ? 'div' : undefined
let   output = slice

if (flags.lines)  {
  output = output.map( para => para.replaceAll(/\n/g, ' ') )
}

if (elem)  {
  output = output.map( para => pWrap(para, elem) )
}

console.log(
  output.join('\n\n')
)

function pWrap(quote, elem='p') {
  const indented = quote.split('\n').map( line => '  ' + line ).join('\n')
  return `<${elem}>\n` + indented + `\n</${elem}>`
}

function help() {
  quit(`spinal-tapsum.js

Generate sample text in the style of Lorem Ipsum using Spinal Tap quotes.

Usage:
  spinal-tapsum.js [options] number-of-paragraphs

Options:
  -h / --help     This help
  -v / --version  Print version number
  -p / --paras    Wrap each paragraph in <p>...</p>
  -d / --divs     Wrap each paragraph in <div>...</div>
  -l / --lines    Output each paragraph as a single line
`
  )
}

function version() {
  quit('Version 0.0.1')
}
