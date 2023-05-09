import { configureStore } from '@reduxjs/toolkit';
import sampleReducer from './reducers/sampleReducer';

export default configureStore({
  reducer: {
    sample: sampleReducer,
  },
});
