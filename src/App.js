import './App.css';
import Blog from './Component/Blog/Blog';
import Gymnasium from './Component/Gymnasium/Gymnasium';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Gymnasium></Gymnasium>
      <Blog></Blog>
    </div>
  );
}

export default App;
