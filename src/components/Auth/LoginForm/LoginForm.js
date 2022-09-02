import React, { useState } from 'react'
import { View } from 'react-native'
import { Text, Input, Button, Icon } from '@rneui/themed'
import { styles } from './LoginForm.styles'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './LoginForm.data'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { screen } from '../../../utils'
import Toast from 'react-native-toast-message'

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const navigation = useNavigation()

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validationOnChange: false,
        onSubmit: async (formValue) => {
            // console.log(formValue)
            try {
                const auth = getAuth()
                await signInWithEmailAndPassword(auth, formValue.email, formValue.password)

                navigation.navigate(screen.account.account)
                // navigation.goBack()
            } catch (error) {
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    text1: 'Usuario o contraseña incorrectos'
                })
                console.log(error)
            }
        }
    })

    const showHidenPassword = () => setShowPassword(prevState => !prevState)

    return (
        <View style={styles.content}>
        <Input
            placeholder='Correo electronico'
            containerStyle={styles.input}
            rightIcon={
                <Icon type='material-community' name='at' iconStyle={styles.icon} />
            }
            onChangeText={text => formik.setFieldValue('email', text)}
            errorMessage={formik.errors.email}
        />
        <Input
            placeholder='Contraseña'
            secureTextEntry={showPassword ? false : true}
            containerStyle={styles.input}
            rightIcon={
                <Icon
                    type='material-community'
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    iconStyle={styles.icon}
                    onPress={showHidenPassword}
                />
            }
            onChangeText={text => formik.setFieldValue('password', text)}
            errorMessage={formik.errors.password}
        />
        <Button
            title='Iniciar sesión'
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btn}
            onPress={formik.handleSubmit}
            loading={formik.isSubmitting}
        />
        </View>
    )
}