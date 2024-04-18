import Body from './components/Body'
import NavBar from './components/NavBar'


function App() {


  return (
    <>
      <div id='drip'>
        <NavBar/>
         </div>
      <div id='drive'>
        <Body bodyImage="../src/assets/ANTLZ.jpg" bodyName="reactJs" bodyType="dobale" />
        <Body bodyImage="../src/assets/ANTLZ.jpg" bodyName="reactJs" bodyType="dobale" />
        <Body bodyImage="../src/assets/ANTLZ.jpg" bodyName="reactJs" bodyType="dobale" />
      </div>
    </>
  )
}

export default App
