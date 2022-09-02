import React from 'react'
import {View, Text} from 'react-native'
import { Button } from '@rneui/themed'
import { screen } from '../../utils'
// import { useNavigation } from '@react-navigation/native'

export function RestaurantsScreen(props) {
    const { navigation } = props
    // otra opción para obtener el navigation
    // const navigation = useNavigation()
    // console.log(navigation)
    const goToAddRestaurant = () => {
        navigation.navigate(screen.restaurant.addRestaurant)
        // cargar a otros stack
        // navigation.navigate(screen.account.tab, { screen: screen.account.account})
    }

    return(
        <View>
            <Text>Estamos en la screen Restaurants</Text>
            <Button
                title="Crear Restaurante"
                onPress={goToAddRestaurant}
            />
        </View>
    )
}