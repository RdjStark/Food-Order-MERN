import * as PropTypes from "prop-types";
import React from "react";
import "./Meals.css";

export function MealCard(props) {
  const {
    onItemAdd,
    meal: { description, name, price, total },
    onItemRemove
  } = props;
  return (
    <div className="col s12 m12">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">
            {name} - INR{price}
          </span>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a className="waves-effect waves-light btn-small counterParent">
            <i onClick={onItemAdd} className="material-icons left counter">
              add
            </i>
            {total || 0}
            <i onClick={onItemRemove} className="material-icons right counter">
              remove
            </i>
          </a>
        </div>
      </div>
    </div>
  );
}

MealCard.propTypes = {
  meal: PropTypes.any,
  onItemAdd: PropTypes.func,
  onItemRemove: PropTypes.func
};
