#!/usr/bin/env node
import { bin } from '@abw/badger-filesystem'
import { cmdLineArg, cmdLineFlags, quit } from '@abw/badger'
import { range } from '@abw/badger-utils'

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

const n      = parseInt(await cmdLineArg('How many paragraphs?', args))
const text   = await file.read()
const paras  = text.split(/\n\n+/)
const slice  = flags.sequential ? pickQuotes(paras, n) : pickRandomQuotes(paras, n)
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

function pickRandomQuotes(paras, count) {
  return range(1, count).flatMap( () => pickQuotes(paras) )
}

function pickQuotes(paras, count=1) {
  const start = Math.floor(Math.random() * (paras.length + 1 - count))
  const end   = start + count
  return paras.slice(start, end)
}

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
