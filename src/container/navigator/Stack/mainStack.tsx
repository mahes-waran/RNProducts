import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import Products from '../../screens/Product/Products';
import { Colors } from '../../../assets/styles/colors/colors';
import ProductDetails from '../../screens/ProductDetails/ProductDetails';



const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <>
            <StatusBar
                translucent
                backgroundColor={Colors.primaryColor}
                barStyle={'light-content'}
            />
            <Stack.Navigator
                initialRouteName={'Product'}
                screenOptions={{ headerShown: true }}
            >
                <Stack.Screen
                    name={'Product'}
                    component={Products}
                    options={{ title: 'Product', headerShown: true }}
                />
                <Stack.Screen
                    name={'ProductDetails'}
                    component={ProductDetails}
                    options={{ title: '', headerShown: true }}
                />
            </Stack.Navigator>
        </>
    )
}
export default MainStack;