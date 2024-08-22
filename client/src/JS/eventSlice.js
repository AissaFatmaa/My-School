import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getevent = createAsyncThunk("event/get", async (req, res) => {
  try {
    let result = axios.get("http://localhost:5000/event/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const addevent = createAsyncThunk("event/add", async (newevent) => {
  try {
    let result = axios.post("http://localhost:5000/event/add", newevent);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const deleteevent = createAsyncThunk("event/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/event/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editevent = createAsyncThunk(
  "event/edit",
  async ({ id, edit }) => {
    try {
      let result = axios.put(`http://localhost:5000/event/${id}`, edit);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  eventList: null,
  status: null,
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers: {
    [getevent.pending]: (state) => {
      state.status = "pending";
    },
    [getevent.fulfilled]: (state, action) => {
      state.status = "success";
      state.eventList = action.payload.data.events;
    },
    [getevent.rejected]: (state) => {
      state.status = "fail";
    },
    [addevent.pending]: (state) => {
      state.status = "pending";
    },
    [addevent.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addevent.rejected]: (state) => {
      state.status = "fail";
    },
    [deleteevent.pending]: (state) => {
      state.status = "pending";
    },
    [deleteevent.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deleteevent.rejected]: (state) => {
      state.status = "fail";
    },
    [editevent.pending]: (state) => {
      state.status = "pending";
    },
    [editevent.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [editevent.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default eventSlice.reducer;
