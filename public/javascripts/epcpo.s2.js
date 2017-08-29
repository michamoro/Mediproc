/** @jsx epcpo.s2 **/
ReactDOM.render(
  <form>
    <div className="row">
      <div className="form-group col-md-6">
        <label htmlFor="email">Email address:</label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="pwd">Password:</label>
        <input type="password" className="form-control" id="pwd" />
      </div>
    </div>
    <div className="checkbox row">
      <label><input className="form-group" type="checkbox" /> Remember me</label>
    </div>
    <div className="row">
      <button type="submit" className="btn btn-success form-group col-md-1">Submit</button>
    </div>
  </form>,
  document.getElementById('encuesta')
);
