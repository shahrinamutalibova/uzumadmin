import {updateState} from '../reducers';



export const loginLoader = () => updateState({loginLoader: false});
export const coursesModalToggle = () => updateState({coursesModal: false});
