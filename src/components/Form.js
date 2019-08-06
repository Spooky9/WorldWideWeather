import React from "react";

const Form = props => (
  <form className="text-center" onSubmit={props.getWeather}>
    <div className="container">
      <div className="row align-items-end">
        <div className="col">
          <label>City</label>
          <input
            className="form-control"
            type="text"
            name="city"
            placeholder="City"
            autoComplete="off"
            required
          />
        </div>
        <div className="col">
          <label>Country</label>
          <input
            className="form-control"
            type="text"
            name="country"
            placeholder="Country"
            required
          />
        </div>
        <div>
          <button type="submit" className="btn btn-warning">
            Submit
          </button>
        </div>
      </div>
    </div>
  </form>
);
export default Form;
