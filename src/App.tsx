import './App.css'
import Header from '../src/components/header/Header'
import Article from './components/article/Article'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import data from "./data/currencies"

function App() {
  

  return (
    <>

      <Main/>
      <Header />
      <Article dataList={data}/>
      <Footer />
      
    
    </>
  )
}

export default App
