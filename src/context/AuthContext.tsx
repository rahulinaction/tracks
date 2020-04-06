import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-community/async-storage';
import {navigate} from '../navigationRef';
const authReducer = (state: any, action: any) => {
    switch(action.type){
        case "add_error":
            return {...state,errorMessage: action.payload}
        break;

        case "signup":
            return { errorMessage: "", token: action.payload}
        break;

        default:
            return state;
    }
};


const signup = (dispatch: any) =>  { 
    return async ({email, password})=> {
    //make api request to sign up with email and password

    //if we sign up modify our state and say that we are authenticated
    try{
        console.log("Came before signup");
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
const signin =(dispatch: any) => {
    return({email, password})=> {
        //make api request to sign up with email and password

        //if we sign up modify our state and say that we are authenticated

        //if signing up fails, we probably need to reflect an error message somewhere
    };

};
const signout =(dispatch: any) => {

};
export const {Provider, Context} = createDataContext(
    authReducer,
    {signup, signin, signout},
    {token: null, errorMessage:""}
)
