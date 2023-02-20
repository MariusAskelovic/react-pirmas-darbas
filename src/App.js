import Products from './components/products/Products'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Products />
      <Footer name="Marius" year={2023} />
    </div>
  )
}

export default App

