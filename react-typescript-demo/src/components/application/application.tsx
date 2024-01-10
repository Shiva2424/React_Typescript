import React from "react";

function Application() {
  return (
    <form>
      <div>Job Application</div>
      <div>All Fields are mandatory</div>
      <div data-testid='customelement' >Custom HTML Element</div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name"
          required
          value="Subramanyam"
          onChange={() => {}}
        />
      </div>
      <div>
        <select id="job-location">
          <option value="US">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="IN">India</option>
          <option value="AU">Australia</option>
        </select>
      </div>
      <div>
        <input type="checkbox" /> I agree to terms and conditions
      </div>
      <div>
        <button>Submit</button>
      </div>
      <h1>Hi . I am Heading</h1>
    </form>
  );
}

export default Application;
