import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Userform from "./views/Userform";
import Userlist from "./views/Userlist";

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Userlist">
                <Stack.Screen
                    name="Userform"
                    component={Userform}
                />
                <Stack.Screen 
                    name="Userlist" 
                    component={Userlist}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}