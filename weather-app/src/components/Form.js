import React from "react";


const Form=props=>(
    <form onSubmit={props.getNews}>
  <div className="form-row">
    <div className="col">
      <input type="text" name="city" className="form-control" placeholder="City" />
    </div>
    <div className="col">
      <input type="text" name="country" className="form-control" placeholder="Country" />
    </div>
    <button className="btn btn-success" ></button>
  </div>
</form>
)
export default Form;