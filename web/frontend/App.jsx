import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./Routes";

import {
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
} from "./components";

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client"
import { NavigationMenu } from "@shopify/app-bridge-react";

import { onError } from "@apollo/client/link/error"
import ProductsDetails from "./components/productsDetails";

const errorLink = onError(({ graphqlErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert('graphql');
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: `https://${window.location.host}/admin/apps/shopify-graphiql-app` }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  // link: link,
})

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <ApolloProvider client={client}>
            <QueryProvider>
              <NavigationMenu
                navigationLinks={[
                  {
                    label: "frame",
                    destination: "/frame",
                  },
                  {
                    label: "try",
                    destination: "/try",
                  },
                  {
                    label: "New Page",
                    destination: "/new-page",
                  },
                ]}
              />
              <Routes pages={pages} />
            </QueryProvider>
          </ApolloProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
