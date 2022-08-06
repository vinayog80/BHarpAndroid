import React, {useState, useEffect, useRef} from 'react';
import { View, Animated, Text, TouchableOpacity, TouchableWithoutFeedback, Modal, Image, Dimensions} from 'react-native';
import { assets, SIZES, COLORS } from '../../../constants';

const ServiceProviderOptionType = () => {

      const [isModalVisible, setIsModalVisible] = useState(false);
     const modifyModalVisibility = (boolean) => {
         setIsModalVisible(boolean);
    }
    const refvalue = useRef(new Animated.Value(0)).current;
    
     useEffect(() => {
        if (isModalVisible) {
            Animated.timing(refvalue, {
                toValue:1,
                duration: 500,
                useNativeDriver:false
            }).start()
        }
        else {
            Animated.timing(refvalue, {
                toValue:0,
                duration: 500,
                useNativeDriver: false
            }).start(() => setIsModalVisible(isModalVisible))
        }
        
    }, [isModalVisible]);
  
    const transltY = refvalue.interpolate({
        inputRange: [0, 1],
        outputRange: [Dimensions.get("screen").height, Dimensions.get('window').height - 300]
    });


       const [selectType, setSelectType] = useState("Health Care Provider Type");
    const setdata = (hospitalOptionType) => {
        setSelectType(hospitalOptionType);
    };

    const hospitalServiceDB = ["Hospital Dispensary", "Nursing Home", "Medical College", "Primary Health Centre", "Clinic"];
    const onSelectItem = (hospitalOptionType) => {
        modifyModalVisibility(false);
        setdata(hospitalOptionType);
    }
    const hospitalOptionType = hospitalServiceDB.map((item, index) => {
        return (
            <TouchableOpacity onPress={() => onSelectItem(item)} style={{ paddingHorizontal: SIZES.medium, alignItems: "flex-start", marginTop: SIZES.large1 }}>
                <Text style={{ fontFamily: "Poppins-Medium", color: COLORS.black, fontSize: SIZES.medium }}>{item}</Text>
            </TouchableOpacity>
        );
    });
    return (
        <View>
            <View style={{ flexDirection: "column", width: "100%" }}>
                <TouchableOpacity
                    onPress={() => modifyModalVisibility(true)}
                    activeOpacity={.3} style={{ width: 280, height: 50, borderRadius: SIZES.base, flexDirection: "row", borderWidth: 2, borderColor: COLORS.primary, alignItems: "center", justifyContent: 'center' }}>
                    <View>
                        <Text style={{ fontFamily: "Poppins-Medium", color: COLORS.black }}>
                            {selectType}
                        </Text>
                    </View>
                    <View>
                        <Image source={assets.chevrondown1} style={{ width: 35, height: 35, marginLeft: SIZES.extraLarge4 }} />
                    </View>
                </TouchableOpacity>

                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={() => modifyModalVisibility(false)}>
                    <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)", position: 'relative' }}>
                        <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
                            <View style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0
                            }} />
                        </TouchableWithoutFeedback>
                        <Animated.View style={{
                            width: "100%",
                            height: '100%',
                            borderTopLeftRadius: SIZES.medium,
                            borderTopRightRadius: SIZES.medium,
                            backgroundColor: COLORS.white,
                            position: "absolute",
                            top: transltY,
                            left: 0,
                            right: 0,
                            paddingVertical: SIZES.font,
                            paddingBottom: SIZES.extraLarge4
                        }}>
                            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 11 }}>
                                <TouchableOpacity onPress={() => modifyModalVisibility(false)}>
                                    <Image source={assets.closeIcon} style={{ width: 40, height: 40 }} />
                                </TouchableOpacity>
                            </View>
                            {hospitalOptionType}
                        </Animated.View>
                    </View>
                </Modal>
            </View>
        </View>
    );
}

export default ServiceProviderOptionType