import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./navigation/Drawer";

import { Provider } from 'react-redux';
import store from './features/store'

// persited




export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>

        <Drawer />

      </NavigationContainer>
    </Provider>
  );
}
