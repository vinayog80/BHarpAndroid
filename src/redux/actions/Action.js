import * as ActionTypes from "../constant/ActionTypes";
import axios from "axios";


export const fetchingServiceRequest = (bHarpDB) => {
    return {
        type: ActionTypes.FETCHING_SERVICE_REQUEST,
        payload: bHarpDB,
    };
};

export const fetchingServiceResponse = (responseJ) => {
    return {
        type: ActionTypes.FETCHING_SERVICE_RESPONSE,
        payload: responseJ,
    };
};

export const fetchSelectedType = (hospitalTypeOption) => {
    return {
        type: ActionTypes.FETCH_SELECTED_TYPES,
        payload: hospitalTypeOption
    }
};

export const fetchHealthCareProviderType = (HealthCareProviderType) => {
    return {
        type: ActionTypes.FETCH_HEALTH_CARE_PROVIDER_TYPES,
        payload:HealthCareProviderType
    }
}

export const fetchDoctor = (doctdatabase) => {
    return {
        type: ActionTypes.FETCH_DOCTORS,
        payload: doctdatabase
    };
}

export const noOfIndex = (noOfBookings) => {
    return {
        type: ActionTypes.INDEX,
        payload: noOfBookings
    };
}

export const addDoctor = (addDoct) => {
    return {
        type: ActionTypes.ADD_DOCTOR,
        payload: addDoct
    };
}

export const removeDoctor = (removeDoct) => {
    return {
        type: ActionTypes.REMOVE_DOCTOR,
        payload: removeDoct
    };
}