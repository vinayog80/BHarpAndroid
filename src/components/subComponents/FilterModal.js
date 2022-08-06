import React, { useState, useRef, useEffect } from 'react';
import { View, Modal, Animated, Text, TouchableOpacity, Image, Dimensions, TouchableWithoutFeedback, FlatList, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { assets, COLORS, SIZES } from '../../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { launchImageLibrary } from 'react-native-image-picker';
import { BookDoctorComponent } from '../SubInfo';
import { BookAppointmentButton } from '../Button';
import SelectOptionPicker from './SelectOptionPicker';
import ServiceProviderOptionType from './ServiceProviderOptionType';

const FilterModal = ({ visible, onCloseModal }) => {
    const [selectedHospital, setSelectedHospital] = useState(null);
    const [addHospital, setAddHospital] = useState([]);
    const [openModal, setOpenModal] = useState(visible);
    const [hospitalForm, setHospitalForm] = useState({
        RegistrationNoLicenseNo: "",
        State: "",
        City: "",
        Village: "",
        District: "",
        Block: "",
        Address: "",
        Pincode: "",
        Email: "",
        Contact: "",
        WebsiteLink: "",
        EstablishmentYear: "",
        ContactPersonName: "",
        ContactPersonDesignation: "",
        ContactPersonEmail: "",
        ContactPersonContact: "",
    });

    const onHandleChangeForm = (text, inputForm) => {
        setHospitalForm((prevHsFormState) => ({ ...prevHsFormState, [inputForm]: text }));
    };

    const animatedRefValue = useRef(new Animated.Value(0)).current;
    
    const { healthCareProviderType } = useSelector((state) => state.bharpReducer);
    const { hospitalServiceDB } = useSelector((state) => state.bharpReducer);
    const index = useSelector(state => state.bharpReducer);
    const { listOfUploaddocs } = useSelector(state => state.bharpReducer);
    const dispatch = useDispatch();

    const options = {
        title: 'Select Image',
        type: 'library',
        options: {
            maxHeight: 200,
            maxWidth: 200,
            selectionLimit: 0,
            mediaType: 'photo',
            includeBase64: false,
        },
    };
    const openGallary = async () => {
        const result = await launchImageLibrary(options);
        console.log(result.assets[0]);
        const formdb = new FormData();
        formdb.append('file', {
            uri: result.assets[0].uri,
            type: result.assets[0].type,
            name: result.assets[0].fileName,
        })
        let res = await fetch(
            'http://localhost//webservice/user/uploadImage',
            {
                method: 'post',
                body: formdb,
                headers: {
                    'Content-Type': 'multipart/form-data;',
                },
            }
        );
        let responseJson = await res.json();
        console.log(responseJson);
    };
     
    useEffect(() => {
        if (openModal) {
            Animated.timing(animatedRefValue, {
                toValue:1,
                duration: 700,
                useNativeDriver:false
            }).start()
        }
        else {
            Animated.timing(animatedRefValue, {
                toValue:0,
                duration: 500,
                useNativeDriver: false
            }).start(() => onCloseModal())
        }
        
    }, [openModal]);

    const filterTranslateY = animatedRefValue.interpolate({
        inputRange: [0, 1],
        outputRange: [Dimensions.get("screen").height, Dimensions.get('window').height - 860]
    });

    const UploadDocCardComponent = ({uploadIt, indx}) => {
        return (
            <View>
                <TouchableOpacity
                    key={indx}
                    style={{ marginBottom: SIZES.font, flexDirection: "row" }}
                    onPress={openGallary}
                >
                    <Text style={{ color: COLORS.black, fontFamily: "Poppins-Medium", fontSize: SIZES.medium, marginRight: SIZES.font }}>{uploadIt.uploadDocTitle}</Text>
                    <Image source={assets.chevronR} style={{ width: 23, height: 23, marginLeft: SIZES.font }} />
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View>
            <Modal
                animationType='slide'
                visible={visible}
                transparent={true}
            >
                <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)", position: 'relative' }}>
                    <TouchableWithoutFeedback onPress={() => setOpenModal(false)}>
                        <View style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        }} />
                    </TouchableWithoutFeedback>
                    {/* filter modal components */}
                    <Animated.View style={{
                        width: "100%",
                        height: '100%',
                        borderTopLeftRadius: SIZES.medium,
                        borderTopRightRadius: SIZES.medium,
                        backgroundColor: COLORS.white,
                        position: "absolute",
                        top: filterTranslateY,
                        left: 0,
                        right: 0,
                        paddingVertical: SIZES.font,
                        paddingBottom: SIZES.extraLarge4
                    }}>
                        <BookAppointmentButton/>
                        <ScrollView showsVerticalScrollIndicator={false}>
                        

                            {/*
                close Filter Modal
                */}
                        
                            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 11 }}>
                                <TouchableOpacity onPress={onCloseModal}>
                                    <Image source={assets.closeIcon} style={{ width: 50, height: 50 }} />
                                </TouchableOpacity>
                            </View>

                            {/* addHospital Information content */}
              
                            <View style={{ width: '100%', height: '100%', paddingHorizontal: SIZES.font, flexDirection: 'column', paddingTop: SIZES.base }}>
                                <Text style={{ fontFamily: "Poppins-Medium", color: COLORS.black, fontSize: SIZES.large }}>Hospital Name</Text>
                              
                                <View style={{ paddingTop: SIZES.extraLarge2 }}>
                                    {/* 1) dropdown menu hospital type */}
                                   <SelectOptionPicker/>

                                    {/* 2) dropdown health care provider types */}
                                    <View style={{ flexDirection: "column", width: "100%", marginTop: SIZES.extraLarge }}>
                                       <ServiceProviderOptionType/>
                                    </View>

                                </View>
                            
                                {/* hospital form */}
                            
                            
                                <KeyboardAvoidingView>
                                    <View style={{ flexDirection: 'column', marginVertical: SIZES.font }}>
                                  
                                        <TextInput
                                            onChangeText={(text) => onHandleChangeForm(text, "RegistrationNoLicenseNo")}
                                            placeholder='Registration No / License No'
                                            keyboardAppearance='default'
                                            keyboardType='default'
                                        
                                            style={{ fontFamily: "Poppins-Medium", width: 350, borderBottomWidth: 1, borderBottomColor: COLORS.black, marginVertical: SIZES.large }}
                                        />
                           
                                    
                                        <TextInput
                                            onChangeText={(text) => onHandleChangeForm(text, "State")}
                                            placeholder='State'
                                            keyboardAppearance='default'
                                            keyboardType='default'
                                            textContentType='addressState'
                                            style={{ fontFamily: "Poppins-Medium", width: 350, borderBottomWidth: 1, borderBottomColor: COLORS.black, marginVertical: SIZES.large }}
                                        />
                                     
                                        <TextInput
                                            onChangeText={(text) => onHandleChangeForm(text, "City")}
                                            placeholder='City'
                                            keyboardAppearance='default'
                                            keyboardType='default'
                                            textContentType='addressCity'
                                            style={{ fontFamily: "Poppins-Medium", width: 350, borderBottomWidth: 1, borderBottomColor: COLORS.black, marginVertical: SIZES.large }}
                                        />
                                        <TextInput
                                            onChangeText={(text) => onHandleChangeForm(text, "Block")}
                                            placeholder='Block'
                                            keyboardAppearance='default'
                                            keyboardType='default'
                                            textContentType='streetAddressLine1'
                                            style={{ fontFamily: "Poppins-Medium", width: 350, borderBottomWidth: 1, borderBottomColor: COLORS.black, marginVertical: SIZES.large }}
                                        />
                            
                                        <TextInput
                                            onChangeText={(text) => onHandleChangeForm(text, "Village")}
                                            placeholder='Village'
                                            keyboardAppearance='default'
                                            keyboardType='default'
                                            textContentType='sublocality'
                                            style={{ fontFamily: "Poppins-Medium", width: 350, borderBottomWidth: 1, borderBottomColor: COLORS.black, marginVertical: SIZES.large }}
                                        />
                              
                                        <TextInput
                                            onChangeText={(text) => onHandleChangeForm(text, "District")}
                                            placeholder='District'
                                            keyboardAppearance='default'
                                            keyboardType='default'
                                            textContentType='sublocality'
                                            style={{ fontFamily: "Poppins-Medium", width: 350, borderBottomWidth: 1, borderBottomColor: COLORS.black, marginVertical: SIZES.large }}
                                        />
                                        <TextInput
                                            onChangeText={(text) => onHandleChangeForm(text, "Address")}
                                            placeholder='Address'
                                            keyboardAppearance='default'
                                            keyboardType='default'
                                            textContentType='addressCityAndState'
                                            style={{ fontFamily: "Poppins-Medium", width: 350, borderBottomWidth: 1, borderBottomColor: COLORS.black, marginVertical: SIZES.large }}
                                        />
                                        <TextInput
                                            onChangeText={(text) => onHandleChangeForm(text, "Pincode")}
                                            placeholder='Pincode'
                                            keyboardAppearance='default'
                                            keyboardType='phone-pad'
                                            textContentType='postalCode'
                                            style={{ fontFamily: "Poppins-Medium", width: 350, borderBottomWidth: 1, borderBottomColor: COLORS.black, marginVertical: SIZES.large }}
                                        />
                           
                                        <TextInput
                                            onChangeText={(text) => onHandleChangeForm(text, "Email")}
                                            placeholder='Email'
                                            keyboardAppearance='default'
                                            keyboardType='default'
                                            textContentType='emailAddress'
                                            style={{ fontFamily: "Poppins-Medium", width: 350, borderBottomWidth: 1, borderBottomColor: COLORS.black, marginVertical: SIZES.large }}
                                        />
                                        <TextInput
                                            onChangeText={(text) => onHandleChangeForm(text, "Contact")}
                                            placeholder='Contact'
                                            keyboardAppearance='default'
                                            keyboardType='phone-pad'
                                            style={{ fontFamily: "Poppins-Medium", width: 350, borderBottomWidth: 1, borderBottomColor: COLORS.black, marginVertical: SIZES.large }}
                                        />
                                        <TextInput
                                            onChangeText={(text) => onHandleChangeForm(text, "EstablishmentYear")}
                                            placeholder='Establishment Year'
                                            keyboardAppearance='default'
                                            keyboardType='default'
                                            style={{ fontFamily: "Poppins-Medium", width: 350, borderBottomWidth: 1, borderBottomColor: COLORS.black, marginVertical: SIZES.large }}
                                        />
                                        <TextInput
                                            onChangeText={(text) => onHandleChangeForm(text, "ContactPersonName")}
                                            placeholder='Contact Person Name'
                                            keyboardAppearance='default'
                                            keyboardType='default'
                                            textContentType='name'
                                            style={{ fontFamily: "Poppins-Medium", width: 350, borderBottomWidth: 1, borderBottomColor: COLORS.black, marginVertical: SIZES.large }}
                                        />
                                        <TextInput
                                            onChangeText={(text) => onHandleChangeForm(text, "ContactPersonDesignation")}
                                            placeholder='Contact Person Designation'
                                            keyboardAppearance='default'
                                            keyboardType='default'
                                            textContentType='jobTitle'
                                            style={{ fontFamily: "Poppins-Medium", width: 350, borderBottomWidth: 1, borderBottomColor: COLORS.black, marginVertical: SIZES.large }}
                                        />
                                        <TextInput
                                            onChangeText={(text) => onHandleChangeForm(text, "ContactPersonEmail")}
                                            placeholder='Contact Person Email'
                                            keyboardAppearance='default'
                                            keyboardType='default'
                                            textContentType='emailAddress'
                                            style={{ fontFamily: "Poppins-Medium", width: 350, borderBottomWidth: 1, borderBottomColor: COLORS.black, marginVertical: SIZES.large }}
                                        />
                                        <TextInput
                                            onChangeText={(text) => onHandleChangeForm(text, "ContactPersonContact")}
                                            placeholder='Contact Person Contact'
                                            keyboardAppearance='default'
                                            keyboardType='phone-pad'
                                            style={{ fontFamily: "Poppins-Medium", width: 350, borderBottomWidth: 1, borderBottomColor: COLORS.black, marginVertical: SIZES.large }}
                                        />
                                    </View>
                                    
                                    {/* Upload Images Container */}
                                    <View>
                                        {
                                            listOfUploaddocs.map((uploadItem, index) =>
                                                <UploadDocCardComponent
                                                    uploadIt={uploadItem}
                                                    indx={index}
                                                />
                                            )
                                        }
                                    </View>

                                    {/* Featured Doctors and book Appointment */}

                                    <View style={{marginTop:SIZES.extraLarge}}>
                                        
                <Text style={{ fontFamily: "Poppins-SemiBold", fontSize:SIZES.large1, color:COLORS.black}}>Popular Doctors</Text>
                                        <BookDoctorComponent />
                                    </View>
                        
                                </KeyboardAvoidingView>          
                            </View>
                        </ScrollView>
                    </Animated.View>
                </View>
            </Modal>
        </View>
    );
}

export default FilterModal;