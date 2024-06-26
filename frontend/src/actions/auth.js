import { AUTH } from './types';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });
        router.push('/');

    } 
    catch (error) 
    {
        console.log(error);
        alert("Invalid user Credentials...");
    }
};

export const signup = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data });
        router.push('/');
    } catch (error) {
        console.log(error);
        alert("Invalid Credentials...");
    }
};
