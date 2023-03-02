import React, { useReducer, useState } from "react";
import "../App.css";
import { formReducer } from "../reducers/formReducer";

export default function ReducerForm() {
  const initialFormState = {
    name: "",
    email: "",
    consent: false,
  };

  const [formState, dispatchFormState] = useReducer(
    formReducer,
    initialFormState
  );

  console.log("formState", formState);

  return (
    <div className="App">
      <h2>useReducer Form</h2>
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formState?.name}
          onChange={(e) => {
            dispatchFormState({
              type: "HANDLE_TEXT_CHANGE",
              field: e.target.name,
              payload: e.target.value,
            });
          }}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formState?.email}
          onChange={(e) => {
            dispatchFormState({
              type: "HANDLE_TEXT_CHANGE",
              field: e.target.name,
              payload: e.target.value,
            });
          }}
        />

        <label>I agree</label>
        <input
          type="checkbox"
          checked={formState?.consent}
          onChange={(e) => {
            dispatchFormState({
              type: "HANDLE_CONSENT_CHANGE",
            });
          }}
        />
      </form>
    </div>
  );
}
