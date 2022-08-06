import React, { useCallback } from 'react';
import { View, Text, Image } from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { AddButton } from '..';
import { MinusButton } from '..';
import { addDoctor, removeDoctor } from '../../redux/actions/Action';

const DoctorDBCard = ({ collectionDB, index }) => {
    const dispatch = useDispatch();
    const { noOfBookings } = useSelector(state => state.bharpReducer);

    const onHandleAddDoctor = useCallback(() => {
        dispatch(addDoctor());
    }, [dispatch]);

    const onHandleRemoveDoctor = useCallback(() => {
        dispatch(removeDoctor());
    }, [dispatch]);
    return (
        <View
            key={index}
            style={{
                width: 380,
                height:200,
                backgroundColor: COLORS.white,
                ...SHADOWS.dark,
                borderRadius: SIZES.base,
                paddingHorizontal: SIZES.base,
                paddingVertical: SIZES.medium,
                marginVertical: SIZES.medium,
                position:"relative"
            }}>
            <View>
                <View style={{ flexDirection: "row", paddingTop:SIZES.small }}>
                    <View style={{ flexDirection: "column", justifyContent:"flex-start",paddingLeft:SIZES.font }}>
                        <Text style={{ fontFamily: "Poppins-Medium", color: COLORS.black, fontSize: SIZES.large, }}>{collectionDB.doctorName}</Text>
                        <Text style={{ fontFamily: "Poppins-Medium", color: COLORS.gray2, fontSize: SIZES.medium }}>{collectionDB.designation}</Text>
                    </View>
                    <View style={{position:"absolute", top:0, right:10}}>
                        <Image source={collectionDB.imgUrl}
                            style={{ width: 40, height: 40 }}
                            resizeMode="contain"
                        />
                    </View>
                </View>
                <View style={{marginTop:SIZES.font, paddingLeft:SIZES.base2,position:'absolute', right:10, top:60}}>
                    <Text style={{fontFamily: "Poppins-Medium", color: COLORS.black}}> {`Experience ${collectionDB.experience} year`}</Text>
                </View>
                <View style={{ marginTop: SIZES.extraLarge4, flexDirection:"row",paddingLeft:SIZES.base2 }}>
                    <AddButton dispatchAddDoctor={onHandleAddDoctor} />
                    <Text style={{fontFamily: "Poppins-Medium", fontSize:SIZES.medium, color:COLORS.black}}>{noOfBookings}</Text>
                    <MinusButton dispatchRemoveDoctor={onHandleRemoveDoctor} />
                </View>
            </View>
        </View>
    );
}

export default DoctorDBCard; 