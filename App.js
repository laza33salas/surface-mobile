import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./navigation/Drawer";

import { Provider } from 'react-redux';
import store from './features/store'

// persited
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store)

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PersistGate loading={null} persistor={persistor}>
          <Drawer />
        </PersistGate>
      </NavigationContainer>
    </Provider>
  );
}
