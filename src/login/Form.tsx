import React, { useState } from "react";

const Form = (props: any) => {
  function handleValueChange(e: any) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: any) {
    // Prevent reloading browser
    e.preventDefault();
    if (!onSubmit) return;

    const formValues = {
      user: value.name,
      pass: value.pass,
    };
    onSubmit(formValues);
    console.log(e.target.name);
    // Reset form
    setValue({ name: "", pass: "" });
  }

  const { onSubmit } = props;
  const [value, setValue] = useState({ name: "", pass: "" });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group has-feedback">
          <input type="text" value={value.name}  onChange={handleValueChange} name="name"  className="form-control" placeholder="User"/>
          <span className="glyphicon glyphicon-user form-control-feedback"></span>
        </div>
        <div className="form-group has-feedback">
          <input type="password" value={value.pass}  onChange={handleValueChange} name="pass"   className="form-control" placeholder="Password"/>
          <span className="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div className="row">
          <div className="col-xs-8">
            <div className = "checkbox">
            <div className="checkbox icheck">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              </div>
              </div>
          </div>

          <div className="col-xs-4">
            <button
              type="submit"
              className="btn btn-primary btn-block btn-flat"
            >
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;

