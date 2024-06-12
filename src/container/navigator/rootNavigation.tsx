import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './Stack/mainStack';


const RootNavigation = () => {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )
}
export default RootNavigation;