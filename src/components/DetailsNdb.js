import React from 'react';
import { View,Text ,TouchableOpacity} from 'react-native';
import { COLORS, SIZES , SHADOWS} from '../../constants';

const DetailsNdb = ({ db }) => {
    return (
        <TouchableOpacity style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View
                key={db.id}
                style={{
                    backgroundColor: COLORS.white,
                    borderRadius: SIZES.small,
                    width: 70,
                    height: 70,
                    marginTop: SIZES.small,
                    marginLeft: SIZES.extraSmall,
                    marginRight: SIZES.extraSmall,
                    marginBottom: SIZES.small,
                    ...SHADOWS.dark,
                    borderColor: COLORS.primary,
                    borderWidth: 1,
                    alignItems: 'center',
                    justifyContent: "center",
                    flexDirection: "column"
                }}>
            </View>
            <View>
                <Text style={{ fontFamily: "Poppins-Medium", fontSize: SIZES.base2, color: COLORS.black }}>{db.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default DetailsNdb;