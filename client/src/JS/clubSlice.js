import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getclub = createAsyncThunk("club/get", async (req, res) => {
  try {
    let result = axios.get("http://localhost:5000/club/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const addclub = createAsyncThunk("club/add", async (newclub) => {
  try {
    let result = axios.post("http://localhost:5000/club/add", newclub);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const deleteclub = createAsyncThunk("club/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/club/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editclub = createAsyncThunk("club/edit", async ({ id, edit }) => {
  try {
    let result = axios.put(`http://localhost:5000/club/${id}`, edit);
    return result;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  clubList: null,
  status: null,
};

export const clubSlice = createSlice({
  name: "club",
  initialState,
  reducers: {},
  extraReducers: {
    [getclub.pending]: (state) => {
      state.status = "pending";
    },
    [getclub.fulfilled]: (state, action) => {
      state.status = "success";
      state.clubList = action.payload.data.clubs;
    },
    [getclub.rejected]: (state) => {
      state.status = "fail";
    },
    [addclub.pending]: (state) => {
      state.status = "pending";
    },
    [addclub.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addclub.rejected]: (state) => {
      state.status = "fail";
    },
    [deleteclub.pending]: (state) => {
      state.status = "pending";
    },
    [deleteclub.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deleteclub.rejected]: (state) => {
      state.status = "fail";
    },
    [editclub.pending]: (state) => {
      state.status = "pending";
    },
    [editclub.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [editclub.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default clubSlice.reducer;
