
import './App.css'
import Counter from './components/Counter'
import VirtulizedList from './components/VirtulizedList'
import ErrorBoundries from './ErrorBoundries'

function App() {


  return (
    <>
     <h1>Error Boundries</h1>
     <ErrorBoundries>
     <Counter/>
     </ErrorBoundries>
     <h1>Infinite-List</h1>
     <VirtulizedList />
     <p>using virtualiztion list</p>
    </>
  )
}

export default App
