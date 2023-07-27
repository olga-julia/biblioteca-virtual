import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';
import { AppLayout } from './AppLayout';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8080/',
  cache: new InMemoryCache(),
})

function App() {
  
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <AppLayout />
      </ApolloProvider>      
    </div>
  );
}

export default App;
