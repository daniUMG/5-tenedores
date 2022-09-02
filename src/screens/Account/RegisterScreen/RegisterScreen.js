import React from 'react'
import { View } from 'react-native'
import { Image } from '@rneui/themed'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { style } from './RegisterScreen.styles'
import { RegisterForm } from '../../../components/Auth'

export function RegisterScreen() {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require('../../../../assets/img/5-tenedores-letras-icono-logo.png')}
        style={style.image}
      />

      <View style={style.content}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  )
}