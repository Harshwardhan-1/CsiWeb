import HomePage from './components/HomePage';
import {Routes,Route} from 'react-router-dom';
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
    </Routes>
    </>
  )
}

export default App
