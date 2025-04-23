import React from "react";

export default function Jumbotron() {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid bg-light py-5">
        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
        <p className="col-md-8 fs-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.
        </p>
        <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
      </div>
    </div>
  );
}
