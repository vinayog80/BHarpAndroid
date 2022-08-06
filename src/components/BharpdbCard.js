import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { SIZES, COLORS, SHADOWS } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { AddHospital } from './SubInfo';

const BharpdbCard = ({ collection }) => {
    const navigation = useNavigation();
  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.small,
      width: 130,
      height: 111,
      margin: SIZES.small,
      ...SHADOWS.dark,
      borderColor: COLORS.primary,
      borderWidth: 1,
      marginHorizontal: SIZES.small,
      marginVertical: SIZES.small,
      flexDirection: "column",
      position:"relative"
    }}>
      <TouchableOpacity onPress={() => navigation.navigate('Details', { collection })}>
        <View style={{ flexDirection: "column", justifyContent:"center" }}>
          <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: SIZES.font, color: COLORS.black, textAlign:"center" }}>{collection.serviceTitl}</Text>
        </View>

        <AddHospital/>
        
      </TouchableOpacity>
    </View>
  );
}

export default BharpdbCard;