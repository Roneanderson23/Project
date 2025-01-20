import Hero from './components/Hero'
import List from './components/List'

import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Hero />
      <div className="container">
        <List />
      </div>
    </>
  )
}

export default App
