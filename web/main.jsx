import React    from 'react'
import ReactDOM from 'react-dom/client'
import Router   from '@/site/Router.jsx'
import Tapsum   from './context/Tapsum.js'
import { RouterProvider, } from 'react-router-dom'
import { ThemeProvider } from '@abw/react-night-and-day'
import './styles/spinal-tapsum.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider storageKey="theme">
      <Tapsum.Provider>
        <RouterProvider router={Router} />
      </Tapsum.Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
