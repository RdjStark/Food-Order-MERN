import * as PropTypes from "prop-types";
import React from "react";

export function OrderCard(props) {
  const { total_amount } = props.order;

  return (
    <div className="col s4 m4">
      <div className="card blue-grey darken-1">
        <div className="card-panel teal lighten-2">
          <div style={{ fontWeight: 700 }}>Total amt: INR {total_amount}</div>
        </div>
      </div>
    </div>
  );
}

OrderCard.propTypes = { order: PropTypes.any };
