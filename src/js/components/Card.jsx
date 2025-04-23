import React from "react";

export default function Card({ title, text, buttonText }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src="https://picsum.photos/id/237/200/200" className="card-img-top" alt="placeholder" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-primary">{buttonText}</a>
        </div>
      </div>
    </div>
  );
}
