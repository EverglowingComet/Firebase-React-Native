import { configureStore } from '@reduxjs/toolkit'
import userReducer from 'store/reducers/user';
import commonReducer from 'store/reducers/common';
import locationReducer from 'store/reducers/location';

export default configureStore({
  reducer: {
    auth: userReducer,
    common: commonReducer,
    location: locationReducer,
  },
})