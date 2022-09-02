import { View, ScrollView } from 'react-native'
import { Text, Image, Button } from '@rneui/themed'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { screen } from '../../../utils'
import { styles } from './LoginScreen.styles'
import { LoginForm } from '../../../components/Auth/LoginForm'

export function LoginScreen() {
  const navigation = useNavigation()
  const goToRegister = () => {
    navigation.navigate(screen.account.register)
  }
  return (
    <ScrollView>
      <Image
        source={require('../../../../assets/img/5-tenedores-letras-icono-logo.png')}
        style={styles.image}
      />
      <View style={styles.content}>
        <LoginForm />

        <Text style={styles.textRegister}>
          ¿Aún no tienes cuenta?
          <Text onPress={goToRegister} style={styles.btnRegister}> Regístrarse</Text>
        </Text>
      </View>
    </ScrollView>
  )
}