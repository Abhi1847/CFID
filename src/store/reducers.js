import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import CryptoJS from "crypto-js";

const API_URL = process.env.REACT_APP_API_URL;

const initialState = {
    todos: [],
    isLoading: false,
    showModel: false,
    isSuccess: false,
    companiesopen: false,
    isAuth: localStorage.getItem("isAuth") === "true",
    step: 0,
    accessToken: localStorage.getItem("accessToken") || null,
};

export const register = createAsyncThunk('register', async (param, thunkAPI) => {
    localStorage.setItem('USERNAME_TO_CONFIRM', param.email)
    localStorage.setItem('PASSWORD_TO_CONFIRM', param.password)
    param.password = CryptoJS.SHA256(param.password).toString();

    try {
        const res = await axios.post(API_URL + "/signup", param);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
});

export const login = createAsyncThunk('login', async (payload, thunkAPI) => {
    payload.password = CryptoJS.SHA256(payload.password).toString();

    try {
        const res = await axios.post(API_URL + "/signin", payload);
        if (res.data) {
            localStorage.setItem("isAuth", "true");
            localStorage.setItem("accessToken", res?.data?.access_token);
        }
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
});

export const forgotPassword = createAsyncThunk('forgotpassword', async (email, thunkAPI) => {
    try {
        const res = await axios.post(API_URL + "/reset-password", { email });
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }

});

export const resetPassword = createAsyncThunk('resetPassword', async (values, thunkAPI) => {
    values.password = CryptoJS.SHA256(values.password).toString();

    try {
        const res = await axios.post(API_URL + "/reset-password/verify-code", values);
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }

});

export const verifyemail = createAsyncThunk('verifyemail', async (paylod, thunkAPI) => {
    try {
        const res = await axios.post(API_URL + "/signup/verify-code", paylod);
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
});

export const reSendVerificationCode = createAsyncThunk('resendverificationcode', async (email, thunkAPI) => {
    try {
        const res = await axios.post(API_URL + "/resend-verification-code", { email });
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
});

export const dropDowns = createAsyncThunk('dropDowns', async (_, thunkAPI) => {
    const accessToken = localStorage.getItem("accessToken");

    try {
        const res = await axios.get(API_URL + "/dropdowns", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
});

const handleAsyncActions = (builder, asyncThunk, stateKey) => {
    builder
        .addCase(asyncThunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(asyncThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state[stateKey] = action.payload;
        })
        .addCase(asyncThunk.rejected, (state) => {
            state.isLoading = false;
            state[stateKey] = [];
            localStorage.setItem("isAuth", "false");
        });
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuth = false;
            localStorage.removeItem("isAuth");
            localStorage.removeItem("accessToken");
        },
        showSuccessModel: (state) => {
            state.isSuccess = true;
        },
        closeSuccessModel: (state) => {
            state.isSuccess = false;
        },
        showcompanies: (state) => {
            state.companiesopen = true
        },
        nextstep: (state) => {
            state.step = state.step + 1
        },
        previousstep: (state) => {
            state.step = state.step - 1
        }

    },
    extraReducers: (builder) => {
        handleAsyncActions(builder, register, 'register');
        handleAsyncActions(builder, login, 'login');
        handleAsyncActions(builder, forgotPassword, 'forgotpassword');
        handleAsyncActions(builder, resetPassword, 'resetPassword');
        handleAsyncActions(builder, verifyemail, 'verifyemail');
        handleAsyncActions(builder, reSendVerificationCode, 'resendverificationcode');
        handleAsyncActions(builder, dropDowns, 'dropDowns');

    },
});

export const { logout, showSuccessModel, closeSuccessModel, showcompanies, nextstep, previousstep } = counterSlice.actions


export default counterSlice.reducer;
