import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero from './components/Hero'
import { GlobalCss } from './styles'

import ProductList from './components/ProductList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Hero />
        <div className="container">
          <ProductList background="#FFFFFF" />
        </div>
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />

      <RouterProvider router={rotas} />
    </>
  )
}

export default App
