import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text, FlatList, ActivityIndicator} from 'react-native';
import { SIZES, COLORS, SHADOWS, assets } from '../../constants';
import { DoctorDBCard, FilterModal } from './subComponents';
import { useSelector } from 'react-redux';

export const SearchBar = ({ onSearch }) => {
    return (
        <View style={{
            marginTop: SIZES.large2, marginBottom: SIZES.large2
        }}>
            <View
                style={{
                    width: "100%",
                    borderRadius: SIZES.font,
                    backgroundColor: COLORS.white,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: SIZES.font,
                    paddingVertical: SIZES.base,
                    ...SHADOWS.medium
                }}
            >
                <TextInput
                    placeholder="Search Services"
                    style={{ flex: 1 }}
                    onChangeText={onSearch}
                />
                <Image
                    source={assets.search}
                    style={{ width: 20, height: 20, marginRight: SIZES.base }}
                />
            </View>
        </View>
    );
}

export const AddHospital = () => {
     const [selectedHospital, setSelectedHospital] = useState(null);
     const [addHospital, setAddHospital] = useState([]);
     const [openModal, setOpenModal] = useState(false);
          
    const onOpenFilterModal = () => {
        setOpenModal(!openModal);
    }
    return (
        <View>
            <TouchableOpacity
                onPress={onOpenFilterModal}
                activeOpacity={.3}
                style={{
                    backgroundColor: COLORS.primary,
                    position: "absolute",
                    bottom: -85,
                    right: 0,
                    paddingHorizontal: SIZES.font,
                    paddingVertical: SIZES.base,
                    borderRadius: SIZES.base
                }}>
                <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: SIZES.font, color: COLORS.white }}>Add Hospital</Text>
            </TouchableOpacity>

            {
                openModal && (
                    <FilterModal
                        visible={openModal}
                        onCloseModal={() => setOpenModal(false)}
                    />
                )
            }
        </View>
    );
}

export const BookDoctorComponent = () => {
    const { doctdatabase } = useSelector((state) => state.bharpReducer);
    console.log(doctdatabase);

    const [isLoading, setIsLoading] = useState(true);
    const loader = () => {
        return (
            isLoading && (<ActivityIndicator color={COLORS.black} />)
        );
    }
    return (
        <View>
            {
                doctdatabase.map((item, index) =>
                    <DoctorDBCard collectionDB={item} index={index}
                    />
                )
            }
        </View>
    );
}

export const AvatarUser = () => {
    return (
        <TouchableOpacity activeOpacity={.3}>
            <Image source={assets.avatarMan2}
                resizeMode="contain"
                style={{ width: 57, height: 57, marginRight: SIZES.base, marginTop: SIZES.base }}
            />
        </TouchableOpacity>
    );
}