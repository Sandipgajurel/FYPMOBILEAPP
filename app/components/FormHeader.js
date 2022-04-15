import React from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';

const FormHeader = ({
  leftHeading,
  rightHeading,
  leftHeaderTranslateX = 10,
  rightHeaderTranslateY = 10,
  rightHeaderOpacity = 10,
}) => {
  return (
    <>
      <View style={styles.container}>
        <Animated.Text
          style={[
            styles.heading,
            ]}
        >
          {leftHeading}
        </Animated.Text>
        {/* <Animated.Text
          style={[
            styles.heading,
          ]}
        >
          {rightHeading}
        </Animated.Text> */}
      </View>
       </>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {fontSize:30, fontWeight:'bold',color:'#1b1b33'}
  });

export default FormHeader;