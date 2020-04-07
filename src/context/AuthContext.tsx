import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-community/async-storage';
import {navigate} from '../navigationRef';

const authReducer = (state: any, action: any) => {
    switch(action.type){
        case "add_error":
            return {...state,errorMessage: action.payload};
        break;

        case "signup":
            return { errorMessage: "", token: action.payload};
        break;

        case "clear_error_message":
            return {...state,errorMessage: ""};
        break;

        case "signin":
            return { errorMessage: "", token: action.payload};
        break;

        case "signout":
            return {token: null, errorMessage: ""};
        break;
        
        default:
            return state;
    }
};

const clearErrorMessage = (dispatch: any) =>() =>  { 
    dispatch({"type": "clear_error_message"});
};    


const signup = (dispatch: any) =>  { 
    return async ({email, password})=> {
    //make api request to sign up with email and password

    //if we sign up modify our state and say that we are authenticated
    try{
        const response = await trackerApi.post("/signup",{email, password})
        await AsyncStorage.setItem("token", response.data.token);
        dispatch({"type": "signup","payload": response.data.token});
        navigate("TrackList",{});
    }catch(err){
        dispatch({ type: "add_error",payload:"Something went wrong with sign up"});
        // console.log(err.message)
    }

    };
        //if signing up fails, we probably need to reflect an error message somewhere
}

const tryLocalSignin = (dispatch: any) => async() =>{
    const token = await AsyncStorage.getItem("token");
    if(token) {
        dispatch({"type": "signup","payload": token});
        navigate("TrackList",{});
    }else {
        navigate("Signup",{});
    }
};

const signin =(dispatch: any) => {
    return async ({email, password})=> {
        try{
            const response = await trackerApi.post("/signin",{email, password})
            await AsyncStorage.setItem("token", response.data.token);
            dispatch({"type": "signin","payload": response.data.token});
            navigate("TrackList",{});
        }catch(err){
            dispatch({ type: "add_error",payload:"Something went wrong with sign up"});
            // console.log(err.message)
        }
    };

};
const signout =(dispatch: any) => {
    return async() => {
        await AsyncStorage.removeItem("token");
        dispatch({"type":"signout"})
        navigate("loginFlow",{});
    };
};
export const {Provider, Context} = createDataContext(
    authReducer,
    {signup, signin, signout, clearErrorMessage, tryLocalSignin},
    {token: null, errorMessage:""}
)
