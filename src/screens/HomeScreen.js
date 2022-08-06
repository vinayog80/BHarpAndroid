import React, { useState } from 'react';
import { View, Dimensions, ScrollView, FlatList, Text } from 'react-native';
import { SIZES, COLORS } from '../../constants';
import { HomeHeader, BharpdbCard } from '../components/index';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const { bHarpDB } = useSelector((state) => state.bharpReducer);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        backgroundColor: COLORS.white
      }}>
        <HomeHeader />
        <View style={{ marginTop: SIZES.extraLarge, flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: SIZES.large1, color: COLORS.black }}>Our Services</Text>
          <FlatList
            data={bHarpDB}
            keyExtractor={(index) => index.toString()}
            renderItem={({ item }) => <BharpdbCard collection={item} />}
            showsVerticalScrollIndicator={false}
            numColumns={2}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;