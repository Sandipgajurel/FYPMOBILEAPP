import React from 'react'
import { FlatList, StyleSheet, Text, Image, TextInput, View, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import FormContainer from './FormContainer';
import {Button, Card } from 'react-native-paper';
const Form = () => {
  const [products, setProducts] = useState([]);
//console.log(products);
function NoPress(){
  alert('This Function Will be available soon')
}
  const getproduct = async  (req, res, next) => {
    let result = await fetch('http://192.168.1.66:3001/getproduct',
      { method: 'GET' }
    )
    const data = await result.json();
    setProducts(data);
    // .then((result) => {
      
    //   setProducts(res.data)
    // })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }
  useEffect(() => {
    getproduct();
  }, [])
  return (
    <ScrollView vertical showsVerticalScrollIndicator={true} >
          <FormContainer>
    
    {
    products.map((item, productId) => {
      return (
        <Card title='New Products' key={item.productId} style={{ flexDirection: 'column', marginTop:40, paddingTop:40, marginBottom:20, alignItems: 'center', backgroundColor:'#9d9fa1'}}>
        <View style={{alignContent:'center',alignItems:'center', textAlign:'center'}}>
          {/* <Image
            resizeMode="cover"
            source={`http://192.168.1.66:3001/${item.image}`}
          /> */}
          <Text key={item.name} style={{fontSize:20, fontWeight:'bold'}} >{item.name}</Text>
          <Text key={item.price} style={{fontSize:15, fontWeight:'bold'}} >{item.price}</Text>
          <Text key={item.description} style={{fontSize:13 }} >{item.description}</Text>
          <Button style={{marginBottom:5, marginTop:5}} mode="contained" color='#c4c4af' onPress={NoPress}>
   Add To Cart
  </Button>
        </View>
        </Card>
      );
    })
  }
   
    </FormContainer>
    </ScrollView>

  );
}
const styles = StyleSheet.create({

})
export default Form