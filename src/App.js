import './App.css';
import ListTask from './components/ListTask'
import AddTAsk from './components/AddTask'
import Filter from './components/Filter'

function App() {
  return (
    <div className="App">
      < AddTAsk />    
      <ListTask />
      <Filter />
    </div>
  );
}

export default App;
