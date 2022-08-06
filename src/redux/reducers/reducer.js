import * as ActionTypes from "../constant/ActionTypes"; 

const initialState = {
    bHarpDB: [
        {
            id: 0,
            serviceTitl: "Hospital",
            Ndb: [
                {
                    id: 0,
                    name: "Bed Booking"
                }, {
                    id: 1,
                    name: "OPD"
                }, {
                    id: 2,
                    name: "Surgial"
                }, {
                    id: 3,
                    name: "Emergency"
                }, {
                    id: 4,
                    name: "Doctors"
                }, {
                    id: 5,
                    name: "Labour Room"
                }, {
                    id: 6,
                    name: "Nursing"
                }, {
                    id: 7,
                    name: "Physiotherapy"
                }, {
                    id: 8,
                    name: "Rehabilitation"
                }, {
                    id: 9,
                    name: "ICU"
                }, {
                    id: 10,
                    name: "Dignosis"
                }, {
                    id: 11,
                    name: "Scanning"
                }, {
                    id: 12,
                    name: "Cardiology"
                }, {
                    id: 13,
                    name: "ENT"
                }, {
                    id: 14,
                    name: "Gastroenterology"
                }, {
                    id: 15,
                    name: "Gynecology"
                }, {
                    id: 16,
                    name: "Hematology"
                }, {
                    id: 17,
                    name: "Neonatal"
                }, {
                    id: 18,
                    name: "Neurology"
                }, {
                    id: 19,
                    name: "Obstetrics"
                },
            ]
        }, {
            id: 1,
            serviceTitl: "Ambulance"
        }, {
            id: 2,
            serviceTitl: "Pathalogy"
        }, {
            id: 3,
            serviceTitl: "Radiology"
        }, {
            id: 4,
            serviceTitl: "Blood Bank"
        }, {
            id: 5,
            serviceTitl: "Support"
        }
    ],
    
    healthCareProviderType: [{
        title: "Select Type",
        subCategoryProviderType: [{
            id: 0,
            providerTypeTitle: "Hospital Dispensary"
        }, {
            id: 1,
            providerTypeTitle: "Nursing Home"
        }, {
            id: 2,
            providerTypeTitle: "Medical College"
        }, {
            id: 3,
            providerTypeTitle: "Primary Health Centre"
        }, {
            id: 4,
            providerTypeTitle: "Clinic"
        }]
    },],
    doctdatabase: [{
        id: 0,
        doctorName: "Dr.Jonas Perkins",
        designation: "Pediatrician",
        imgUrl: require('../../../assets/images/doctor1.png'),
        experience: 3,
        priceCurr:120.99
    },
        {
        id: 1,
        doctorName: "Dr.Charlie Black",
        designation: "Cardiologist",
        imgUrl:require('../../../assets/images/doctor2.png'),
        experience:1,
        priceCurr:230.50
    },{
        id: 2,
        doctorName: "Dr.Chris Frazier",
        designation: "Therapist",
        imgUrl:require('../../../assets/images/doctor3.png'),
        experience:9,
        priceCurr:90.99
    },],
    hospitalServiceDB: [
        {
            hospitalServiceTypeTitle: "Select Type",
            subCategoryServiceType: [
                {
                    id: 0,
                    subCategoryOptionType:"Government Center"
                }, {
                    id: 1,
                    subCategoryOptionType:"Semi-Government"
                }, {
                    id: 2,
                    subCategoryOptionType:"Private Center"
                }, {
                    id: 3,
                    subCategoryOptionType: "Other",
                    isSelected:false
                }
            ]
        }
    ],
    listOfUploaddocs: [{
        id: 0,
        uploadDocTitle: "Upload Hospital Certificate"
    }, {
        id: 1,
        uploadDocTitle: "Upload Hospital License"
    }, {
        id: 3,
        uploadDocTitle: "Upload Hospital Pictures"
    }, {
        id: 4,
        uploadDocTitle: "Upload Hospital GST Certificate"
    }],
    noOfBookings:0
};

const ServiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.INDEX:
            return { ...state, noOfBookings: action.payload };
        case ActionTypes.FETCH_DOCTORS:
            return { ...state, doctdatabase: action.payload };
        case ActionTypes.ADD_DOCTOR:
            return { ...state, noOfBookings: state.noOfBookings + 1 };
        case ActionTypes.REMOVE_DOCTOR:
            return { ...state, noOfBookings: state.noOfBookings - 1 };
        case ActionTypes.FETCHING_SERVICE_REQUEST:
            return { ...state, bHarpDB: action.payload };
        case ActionTypes.FETCH_SELECTED_TYPES:
            return { ...state, hospitalTypeOption: action.payload };
        case ActionTypes.FETCH_HEALTH_CARE_PROVIDER_TYPES:
            return { ...state, HealthCareProviderType: action.payload };
        default:
            return state;
    };
};
export default ServiceReducer;
