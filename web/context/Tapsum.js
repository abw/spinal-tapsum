import { useEffect, useState } from 'react'
import { Generator } from '@abw/react-context'
import quote from '@/lib/quotes.js'
import text  from '@/src/spinal-tap.txt?raw'

const Tapsum = ({
  initialParas=3,
  render
}) => {
  const [n, setN] = useState(initialParas)
  const [search, setSearch] = useState('')
  const [gen, setGen] = useState(0)
  const [sequential, setSequential] = useState(true)
  const [style, setStyle] = useState('text')
  const clearSearch = () => setSearch('')
  const oneQuieter = () => setN( n => Math.max(n - 1, 1) )
  const oneLouder  = () => setN( n => Math.min(n + 1, 11) )
  const regenerate = () => setGen( gen => gen + 1 )
  const [output, setOutput] = useState(
    quote(text, n, { sequential, [style]: true })
  )
  useEffect(
    () => {
      setOutput(
        quote(text, n, { sequential, search, [style]: true })
      )
    },
    [n, sequential, search, style, gen]
  )

  return render({
    n,
    setN,
    oneLouder,
    oneQuieter,
    sequential,
    setSequential,
    search,
    setSearch,
    clearSearch,
    style,
    setStyle,
    output,
    setOutput,
    regenerate
  })
}

export default Generator(Tapsum)
