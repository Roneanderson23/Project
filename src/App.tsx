import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero from './components/Hero'
import { GlobalCss } from './styles'
import ProductList from './components/ProductList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <div className="container">
          <ProductList />
        </div>
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Hero />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
