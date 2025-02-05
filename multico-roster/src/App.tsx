import './App.css'
import Component1 from './pages/Component1/Component1'
function App() {

  const TopBottomBorder = () => {
    return(
      <svg className='TopBottomBorder'/>
    )
  }

  return (<>
      <div className='AppFoundation'>
        <TopBottomBorder />
        <Component1 />
        <TopBottomBorder /> 
      </div>
  </>)
}

export default App
