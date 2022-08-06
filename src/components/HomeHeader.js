import React from 'react'
import { View, Text, Dimensions, } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { AvatarUser, SearchBar } from './SubInfo';

export const HomeHeaderContent = () => {
  return (
    <View style={{ marginTop: SIZES.large }}>
      <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
        <View style={{ flexDirection: 'column', paddingVertical: SIZES.base, marginLeft: SIZES.base }}>
          <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: SIZES.large2, color: COLORS.white }}>Hi, User 👋</Text>
          <Text style={{ fontFamily: 'Poppins-SemiBold', color: COLORS.lightGray }}>How you feeling today!</Text>
        </View>
        <View>
           <AvatarUser/>
        </View>
      </View>
    </View>
  );
}

const HomeHeader = () => {
  return (
    <View style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 645,
        backgroundColor: COLORS.primary,
        borderBottomLeftRadius: SIZES.large,
        borderBottomRightRadius: SIZES.large,
        paddingHorizontal: SIZES.medium,
        paddingVertical: SIZES.base,
        flexDirection: 'column'
    }}>
      <HomeHeaderContent/>
      <SearchBar />
    </View>
  );
}

export default HomeHeader;