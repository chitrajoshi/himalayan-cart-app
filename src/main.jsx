import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, HttpLink, InMemoryCache, gql} from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import './index.css'
import App from './App.jsx'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://flyby-router-demo.herokuapp.com/',
  }),
  cache: new InMemoryCache(),
});

// const client = ...
// client
//   .query({
//     query: gql`
//       query GetLocations {
//         locations {
//           id
//           name
//           description
//           photo
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
