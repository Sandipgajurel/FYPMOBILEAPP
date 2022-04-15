import React from 'react'
import {Text, TextInput,StyleSheet } from 'react-native';

const FormInput = ({placeholder, title}) => {
  return (
   <>
   <Text style={{fontWeight:'bold'}}>{title}</Text>
        <TextInput style={styles.input} placeholder={placeholder} ></TextInput>
   </>
  )
}
const styles = StyleSheet.create({
    input: {
        borderWidth:1,
        borderColor:'#1b1b33',
        height:35,
        borderRadius: 8,
        fontSize:16,
        paddingLeft:10,
        marginBottom:20,
    }});
export default FormInput