import React, { useState } from 'react'
import { View, Dimensions, FlatList } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { CircleButton } from '../components/Button';
import { SearchBar } from '../components/SubInfo';
import { DetailsNdb } from '../components';

const DetailsHeader = ({ navigation }) => {
  return (
    <View style={{
      width: "100%",
      height: 100,
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: COLORS.white,
      paddingHorizontal: SIZES.small
    }}>
      <CircleButton handlePress={() => navigation.goBack()} />
    </View>
  );
}

const DetailsScreen = ({ route, navigation }) => {
  const { collection } = route.params;

  const [bHarpDb, setbHarpdb] = useState(collection);

  const handleSearch = (value) => {
    if (value.trim().length === 0)
      return setbHarpdb(bHarpDb);
  }
  return (
      <View style={{
        width: Dimensions.get('screen').width,
        height: Dimensions.get("screen").height,
      }}>
        <DetailsHeader navigation={navigation} />
        <View style={{ paddingHorizontal: SIZES.small, paddingVertical: SIZES.small }}>
          <View style={{ paddingTop: SIZES.extraSmall }}>
            <FlatList
              data={bHarpDb.Ndb}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <DetailsNdb db={item} />}
              showsVerticalScrollIndicator={false}
              numColumns={4}
              ListHeaderComponent={<SearchBar onSearch={handleSearch} />}
            />
          </View>
        </View>
      </View>
      
  );
}

export default DetailsScreen