import { ScrollView } from 'react-native'
import React from 'react'
import { Text, Button, Image } from '@rneui/themed'
import { styles } from './UserGuestScreen.styles'
import { useNavigation } from '@react-navigation/native'
import { screen } from '../../../utils'

export function UserGuestScreen() {
  const navigation = useNavigation()

  const goToLogin = () => {
    navigation.navigate(screen.account.login)
  }

  return (
    <ScrollView
      centerContent={true}
      style={styles.content}
    >
      <Image 
        source={require('../../../../assets/img/user-guest.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Consulta su perfil de 5 Tenedores</Text>
      <Text style={styles.description}>¿Cómo describirías tu mejor restaurante? Busca y visualiza los mejores restaurantes de una forma sencilla, vota cual te ha gustado más y comenta cómo ha sido tu experiencia.</Text>

      
      <Button
        title='Ver tu perfil'
        onPress={goToLogin}
        buttonStyle={styles.btnStyle}
      />
    </ScrollView>
  )
}