import React from "react";

const Form = props => (
  <form className="text-center" onSubmit={props.getWeather}>
    <div className="form-row justify-content-md-center">
      <div className="col-6">
        <div className="form-group">
          <label>City</label>
          <input
            className="form-control"
            type="text"
            name="city"
            placeholder="City"
            autocomplete="off"
            required
          />
        </div>

        <div className="col-6" />
        <div className="form-group">
          <label>Country</label>
          <input
            className="form-control"
            type="text"
            name="country"
            placeholder="Country"
            required
          />
        </div>
      </div>
    </div>
    <button className="btn btn-secondary">Submit</button>
  </form>
);
export default Form;
