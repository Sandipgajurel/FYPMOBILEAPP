import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView, Dimensions } from 'react-native';
import FormHeader from './app/components/FormHeader';
import FormSelectorBtn from './app/components/FormSelectorBtn';
import Form from './app/components/ProductForm';
import SignupForm from './app/components/SignupForm';
import { Appbar } from 'react-native-paper';

const { width } = Dimensions.get('window');
export default function App() {
  const scrollView = useRef()
  return(
  <><View style={{ flex: 1, paddingTop: 0, backgroundColor:'black' }}>
      <View style={{ height: 95 }}>
     
        
        <Appbar.Header style={{backgroundColor:'black'}}>
      <Appbar.Content title="Online Bag Shop" />
      <Appbar.Action icon="magnify"  />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>


      </View>
      <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginBottom:20 }}>
        <FormSelectorBtn onPress={() => scrollView.current.scrollTo({ x : 0})} style={styles.borderLeft} backgroundColor='rgba(27,27,51,1)' title='Products' />
        <FormSelectorBtn onPress={() => scrollView.current.scrollTo({ x : width})}  style={styles.borderRight} backgroundColor='rgba(27,27,51,0.4)' title='Signup' />
      </View>
    
    <ScrollView 
    ref={scrollView}
    horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
      <Form />
      <SignupForm />
      </ScrollView></View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9fa2a6',
    alignItems: 'center',
    justifyContent: 'center',
  },borderLeft : {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius :10
  },borderRight : {
    borderTopRightRadius: 10,
    borderBottomRightRadius :10
  }
});
