import './App.css';
import '../src/styles/headerStyles.css';
import '../src/styles/tableStyles.css';
import '../src/styles/formStyles.css';
import { Layout } from './layouts/Layout';
import { PokemonContextProvider } from './contexts/pokemonContext';

function App() {
  return (
    <div className="App">
      <PokemonContextProvider>
        <Layout />
      </PokemonContextProvider>
    </div>
  );
}

export default App;
