import React from "react";

const Form = props => (
  <form className="text-center" onSubmit={props.getWeather}>
    <div class="container">
      <div className="row align-items-end">
        <div class="col">
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
        <div class="col">
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
