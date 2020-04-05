import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
const authReducer = (state: any, action: any) => {
    switch(action.type){
        default:
            return state;
    }
};

const signup = (dispatch: any) => {
    return async ({email, password})=> {
        //make api request to sign up with email and password

        //if we sign up modify our state and say that we are authenticated
        try{
            const response = await trackerApi.post("/signup",{email, password})
            console.log("data",response.data);
        }catch(err){
            console.log(err.message)
        }

        //if signing up fails, we probably need to reflect an error message somewhere
    };
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
    {isSigned: false}
)
