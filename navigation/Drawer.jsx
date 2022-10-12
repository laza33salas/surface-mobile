import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home'
import Products from '../screens/Products';
import Contest from '../screens/Contest';
import Contact from '../screens/Contact';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Cart from '../screens/Cart';

const DrawerNavigator = createDrawerNavigator();
const Drawer = () => {
  
    return (
   <DrawerNavigator.Navigator initialRouteName="Home">
      <DrawerNavigator.Screen name='Home' component={Home} />
      <DrawerNavigator.Screen name='Productos' component={Products} />
      <DrawerNavigator.Screen name='Concurso' component={Contest} />
      <DrawerNavigator.Screen name='Contacto' component={Contact} />
      
      <DrawerNavigator.Screen name='Carrito' component={Cart} />
      <DrawerNavigator.Screen name='Iniciar sesión' component={SignIn} />
      <DrawerNavigator.Screen name='Registrarse' component={SignUp} />
   </DrawerNavigator.Navigator>
  )

}

export default Drawer