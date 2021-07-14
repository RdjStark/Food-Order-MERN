import React, { Component } from "react";
import axios from "axios";
import { Loader } from "../Loader";
import { OrderCard } from "./OrderCard";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      loading: false,
    };
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const response = await axios('http://localhost:5000/orders/');
      this.setState({ orders: response.data, loading: false });
    } catch (e) {
      console.error(e);
      this.setState({ loading: false });
    }
  }

  handleSubmit = () => {
    const { orders } = this.state;
    let grandTotal = 0;
    for (let index = 0; index < orders.length; index++) {
      grandTotal += orders[index].total_amount;
    }
    alert(`Your Total Bill is INR ${grandTotal + grandTotal*0.1} \n *Note: The total bill includes your 10% tip`)
  }

  render() {
    const { loading, orders } = this.state;

    if (orders.length === 0 && !loading)
      return <div className="center">No Orders Found.</div>;

    return (
      <div className="container" style={{ width: "100%" }}>
        <div className="row">
          <div className="landing-copy col s12 center-align">
            {loading ? (
              <Loader />
            ) : (
              <div className="row">
                {orders.map((rest, index) => (
                  <OrderCard
                    key={rest._id}
                    order={rest}
                  />
                ))}
                <button
                  className={`btn waves-effect waves-light`}
                  type="submit"
                  name="action"
                  onClick={this.handleSubmit}
                  style={{ backgroundColor: "#ee6e73" }}
                >
                  Calculate Total Bill
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Orders;
