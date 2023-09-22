import { userServices } from "store/services";
import { 
    setCurrentLocation, 
    setReference, 
    initLocationArray, 
    appendLocationToArray,
 } from "store/reducers/location"

export const userActions = {
    startTracking,
    stopTracking,
}

function startTracking() {
    return dispatch => {
        dispatch(initLocationArray())
        userServices.checkAuth((location) => {
            dispatch(setCurrentLocation(location));
            dispatch(appendLocationToArray(location));
        })
        .then((watchId) => {
            dispatch(setReference(watchId));
        }, (error) => {
            dispatch(setReference(null))
        })
    }
}

function stopTracking(watchId) {
    return dispatch => {
        if (watchId) {
            stopTracking(watchId)
            .then((watchId) => {
                dispatch(setReference(null));
            }, (error) => {
                
            })
        }
    }
}
