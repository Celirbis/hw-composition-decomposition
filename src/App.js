import './App.css';
import NewsContainer from './components/NewsContainer';
import SearchContainer from './components/SearchContainer';
import WidgetContainer from './components/WidgetContainer';

function App() {
  return (
    <div className="App">
      <NewsContainer />
      <SearchContainer />
      <WidgetContainer />
    </div>
  );
}

export default App;
