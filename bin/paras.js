#!/usr/bin/env node
import { bin } from '@abw/badger-filesystem'
import { cmdLineArg } from '@abw/badger'

const root  = bin().up()
const text  = await root.file('spinal-tap.txt').read()
const paras = text.split(/\n\n+/)
const n     = parseInt(await cmdLineArg('How many paragraphs?'))
const start = Math.floor(Math.random() * (paras.length - n))
const end   = start + n
const slice = paras.slice(start, end)

console.log(slice.join('\n\n'))

