import React,{memo} from 'react';
import { TouchableOpacity , Image, View, Text} from 'react-native';
import { useSelector } from 'react-redux';
import { SIZES, COLORS, assets, SHADOWS } from '../../constants';
import { addDoctor } from '../redux/actions/Action';

export const CircleButton = ({handlePress}) => {
    return (
        <TouchableOpacity onPress={handlePress}
            style={{
                width: 48,
                height: 48,
                backgroundColor: COLORS.lightGray,
                borderRadius: SIZES.extraLarge,
                alignItems: "center",
                justifyContent: "center",
                ...SHADOWS.light,
            }}
        >
            <Image
                source={assets.arrow}
                style={{ width: 30, height: 30, tintColor:COLORS.primary }}
                resizeMode="contain"
            />
        </TouchableOpacity>
    );
}

export const BookAppointmentButton = () => {
    const { doctdatabase } = useSelector(state => state.bharpReducer);
    console.log(doctdatabase);
    return (
      addDoctor ? (<View style={{position:'absolute', bottom:17, width:'100%', zIndex:1, marginLeft:SIZES.base}}>
            <TouchableOpacity 
                style={{
                    width: 400, height:60,
                    borderRadius: SIZES.extraSmall,
                    backgroundColor: COLORS.primary,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection:"row"
                }}
                activeOpacity={.3}>
                <Text style={{ fontFamily: "Poppins-SemiBold", color: COLORS.white, fontSize: SIZES.font }}>Book Appointment</Text>
              </TouchableOpacity>
        </View>) : null
    );
}

const AddButton = ({ dispatchAddDoctor, }) => {
 return (
        <TouchableOpacity
            style={{ marginRight: 8 }}
            onPress={dispatchAddDoctor}
            activeOpacity={.3}
        >
            <Image source={assets.addIcon02} style={{ width: 35, height: 35 }} />
        </TouchableOpacity>
    );
}

export default memo(AddButton);


export const MinusButton = ({ dispatchRemoveDoctor }) => {
    return (
        <TouchableOpacity style={{marginLeft:8}} onPress={dispatchRemoveDoctor} activeOpacity={.3}>
            <Image source={assets.minusIcon02} style={{ width: 35, height: 35 }} />
        </TouchableOpacity>
    );
}