import React, { useState } from 'react'
import { View,TouchableOpacity, Text , Dimensions, Image, TextInput, Alert, Keyboard, KeyboardAvoidingView } from 'react-native';
import { COLORS, SIZES, assets } from '../../constants';

const LoginScreen = ({ navigation }) => {
    const [inputError, setInputError] = useState(null);
    const [loginState, setLoginState] = useState({
        userName: '',
        password: ''
    });
  
    const onChangeUserCredentials = (val, input) => {
      setLoginState((prevLoginState) => ({ ...prevLoginState, [input]: val }));
    }
  
    const onNavigateToHomeScreen = () => {
     
      if (loginState.userName.trim().length === 0){
        Alert.alert("warning!", "Email must be filled");
      }
      if (loginState.password.trim().length === 0) {
        Alert.alert("warning!", "Password must be filled");
      }
      else { 
        navigation.navigate("Home");
      }
    };
    
  return (
    <View style={{
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height,
      flexDirection: "column",
      backgroundColor: '#fff',
      alignItems: "center",
    }}>
      
      <View style={{ marginTop: SIZES.extraLarge4 }}>
        <Text style={{ fontFamily: 'Poppins-Bold', color: COLORS.black, fontSize: SIZES.extraLarge4 }}>
          Login
        </Text>
      </View>
          
      <Image
        source={assets.undraw_Password}
        style={{
          width: 160,
          height: 210,
          marginTop: SIZES.extraLarge3,
          marginBottom: SIZES.extraLarge3
        }}
      />
        
      <View style={{ flexDirection: "column", marginVertical: SIZES.base, marginTop: SIZES.extraSmall }}>
        <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium', color: COLORS.black, fontSize: SIZES.large }}>Enter UserName</Text>

        <KeyboardAvoidingView>
          <View style={{ marginTop: SIZES.large }}>
            <View
              style={{
                width: 350,
                height: 55,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.lightGray,
                justifyContent: "center",
                marginVertical: SIZES.extraSmall,
                paddingHorizontal: SIZES.large
              }}>
              <TextInput
                onChangeText={(text) => onChangeUserCredentials(text, "userName")}
                placeholder='Email'
                keyboardAppearance='default'
                keyboardType='default'
                textContentType='emailAddress'
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: SIZES.font,
                  textAlign: "left",
                  color: COLORS.black
                }} />
            </View>


            <View
              style={{
                width: 350,
                height: 55,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.lightGray,
                justifyContent: "center",
                marginVertical: SIZES.large,
                paddingHorizontal: SIZES.large
              }}>
              <TextInput
                onChangeText={(text) => onChangeUserCredentials(text, "password")}
                placeholder='Password'
                keyboardAppearance='default'
                secureTextEntry={true}
                keyboardType='default'
                textContentType='password'
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: SIZES.font,
                  textAlign: "left",
                  color: COLORS.black
                }} />
            </View>

          </View>

          <TouchableOpacity
            onPress={onNavigateToHomeScreen}
            style={{
              width: 260, height: 55,
              borderRadius: SIZES.base,
              backgroundColor: COLORS.primary,
              justifyContent: "center",
              marginLeft: SIZES.extraLarge3,
              marginTop: SIZES.large
            }}>
            <Text style={{
              letterSpacing: .3,
              fontFamily: 'Poppins-SemiBold', textAlign: 'center',
              color: COLORS.white, fontSize: SIZES.large1
            }}>Login</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
       
      </View>
    </View>
  );
}

export default LoginScreen