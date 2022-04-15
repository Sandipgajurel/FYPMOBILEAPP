import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

const FormContainer = ({children}) => {
  return (
      <View style={styles.container}>{children}</View>
  )
}
const styles = StyleSheet.create({
    container: {
     paddingHorizontal:20,
        width:Dimensions.get('window').width,
        paddingTop:0
      
    }
})

export default FormContainer