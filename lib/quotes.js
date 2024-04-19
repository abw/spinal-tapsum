import { range } from '@abw/badger-utils'

export function quotes(text, n, options={}) {
  const paras  = searchQuotes(text.split(/\n\n+/), options.search)
  let   slice  = options.sequential
    ? pickQuotes(paras, n)
    : pickRandomQuotes(paras, n)

  if (options.lines)  {
    slice = slice.map( para => para.replaceAll(/\n/g, ' ') )
  }
  if (options.paras)  {
    slice = slice.map( para => pWrap(para, 'p') )
  }
  else if (options.divs)  {
    slice = slice.map( para => pWrap(para, 'div') )
  }
  else if (options.array)  {
    return slice
  }
  return slice.join('\n\n')
}

function searchQuotes(paras, search) {
  if (! search || ! search.length) {
    return paras
  }
  const lcsearch = search.toLowerCase()
  return paras.filter(
    para => para.toLowerCase().indexOf(lcsearch) >= 0
  )
}

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

export default quotes
