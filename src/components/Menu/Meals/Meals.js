import React, { Component } from "react";
import get from "lodash/get";
import axios from "axios";

import { Loader } from "../../Loader";
import { MealCard } from "./MealCard";
import { OrderFooter } from "../OrderFooter/OrderFooter";

class Meals extends Component {

  constructor(props) {
    super(props);
    this.state = {
      meals: [],
      submitting: false,
      loading: false
    };
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const response = await axios('http://localhost:5000/menu/');
      this.setState({ meals: response.data, loading: false });
    } catch (e) {
      console.error(e);
      this.setState({ loading: false });
    }
  }

  onIncrement = index => {
    const { meals } = this.state;
    const { total } = meals[index];
    this.setState({
      meals: [
        ...meals.slice(0, index),
        { ...meals[index], total: (total || 0) + 1 },
        ...meals.slice(index + 1)
      ]
    });
  };

  onDecrement = index => {
    const { meals } = this.state;
    const { total } = meals[index];
    if (!total) return;
    this.setState({
      meals: [
        ...meals.slice(0, index),
        { ...meals[index], total: total - 1 },
        ...meals.slice(index + 1)
      ]
    });
  };

  handleSubmit = async () => {
    const payload = {
      total_amount: this.orderTotal,
    };

    this.setState({ submitting: true });
    try {
      await axios.post('http://localhost:5000/orders/add', payload)
        .then(res => console.log(res.data));
      const { push } = this.props.history;
      push("/orders");
    } catch (e) {
      this.setState({ submitting: false });
      console.error(e);
    }

  };

  get orderTotal() {
    return this.state.meals.reduce((total, meal) => {
      return total + meal.price * (meal.total || 0);
    }, 0);
  }

  render() {
    const { meals, submitting, loading } = this.state;
    if (meals.length === 0 && !loading)
      return <div className="center">No Meals Found.</div>;

    return (
      <div className="container">
        <div className="row">
          {loading ? (
              <center><Loader /></center>
            ) : (
              <footer className="page-footer">
                <div className="container">
                  <div className="row">
                    {(meals || []).map((meal, index) => (
                      <MealCard
                        key={get(meal, "name")}
                        meal={meal}
                        onItemAdd={() => this.onIncrement(index)}
                        onItemRemove={() => this.onDecrement(index)}
                      />
                    ))}
                  </div>
                  <OrderFooter
                    orderTotal={this.orderTotal}
                    disabled={submitting}
                    onSubmit={this.handleSubmit}
                  />
                </div>
              </footer>
            )}
        </div>
      </div>
    );
  }
}

export default Meals;
