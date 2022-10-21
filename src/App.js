import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Userform from "./views/Userform";
import Userlist from "./views/Userlist";
import { Button, Icon } from "react-native-elements";

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Userlist"
                screenOptions={screenOptions}>
                <Stack.Screen
                    name="Userlist"
                    component={Userlist}
                    options={() => {
                        return {
                            title: "Lista de Usuários",
                            headerRight: () => (
                                <Button
                                    type="clear"
                                    icon={<Icon name="add" size={25} color='white' />}
                                />


                            )
                        }
                    }}
                />
                <Stack.Screen
                    name="Userform"
                    component={Userform}
                    options={{
                        title: "Formulario de Usuários"
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>

    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    hearerTitleStyle: {
        fontWeight: 'bold'
    }

}