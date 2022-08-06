import React, { useState } from 'react';
import { View, TouchableOpacity, Text , Dimensions, Image, TextInput, Alert, KeyboardAvoidingView} from 'react-native';
import { COLORS, SIZES, assets } from '../../constants';

const OTPScreen = ({ navigation }) => {
    const [otp, setOtp] = useState('');
    const onNavigateToLoginScreen = () => {
        if (otp.trim().length === 0) {
            Alert.alert('incorrect phone no');
        }
        else if (otp.trim().length <= 9) {
            Alert.alert('phone no must be longer than 9 numbers');
        }
        else {
            navigation.navigate("Login");
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
                <Text style={{ color: COLORS.black, fontSize: SIZES.extraLarge4, fontFamily:"Poppins-Bold" }}>
                    B+Harp
                </Text>
            </View>
          
            <Image
                source={assets.undraw_Access00}
                style={{
                    width: 190,
                    height: 250,
                    marginTop: SIZES.extraLarge2,
                    marginBottom: SIZES.large
                }}
            />
        

            <View style={{ flexDirection: "column", marginVertical: SIZES.base, marginTop: SIZES.extraLarge4 }}>
                <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium', color: COLORS.black, fontSize: SIZES.large }}>Enter Contact</Text>

                <KeyboardAvoidingView>
                <View style={{ marginTop: SIZES.font }}>
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
                            value={otp}
                            onChangeText={(value) => setOtp(value)}
                            placeholder='Enter contact number'
                            keyboardAppearance='default'
                            keyboardType='phone-pad'
                            textContentType='telephoneNumber'
                            style={{
                                fontFamily: 'Poppins-Medium', fontSize: SIZES.font,
                                textAlign: "center", color: COLORS.black
                            }} />
                    </View>
                </View>
                <TouchableOpacity
                    onPress={onNavigateToLoginScreen}
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
                    }}>Send OTP</Text>
                    </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>
        </View>
    );
}

export default OTPScreen;