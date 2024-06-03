import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import CartPage from './src/pages/CartPage';
import Profile from './src/pages/Profile';
import Header from './src/components/Header';

const Stack = createStackNavigator();

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const firstImage = item.images[0];
    const newItem = {
      ...item,
      image: firstImage
    };
    console.log("Item added to cart:", newItem);
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        header: (props) => <Header {...props} title="Cloth Store" cartItems={cartItems} />,
      }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          options={{
            header: (props) => <Header {...props} title="Cloth Store" cartItems={cartItems} />,
          }}
        >
          {(props) => <Home {...props} addToCart={addToCart} />}
        </Stack.Screen>
        <Stack.Screen
          name="CartPage"
          options={{
            header: (props) => <Header {...props} title="Cloth Store" cartItems={cartItems} />,
          }}
        >
          {(props) => <CartPage {...props} cartItems={cartItems} />}
        </Stack.Screen>
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
