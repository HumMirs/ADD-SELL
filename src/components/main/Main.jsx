import { connect } from "react-redux";
import { addComp, addPhone, sellComp, sellPhone } from "../redux/Action";
import "./style.css";
import React, { Component } from "react";

class Main extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="main-container">
        <h2>Phone & Computer Information</h2>
        <p>Phone price: {this.props.phone_price}$</p>
        <p>Computer price: {this.props.comp_price}$</p>
        <p>Phone count: {this.props.phone_count}</p>
        <p>Computer count: {this.props.comp_count}</p>
        <p>Total price: {this.props.total_income}$</p>
        <button onClick={this.props.addPhone}>ADD PHONE</button>
        <button onClick={this.props.sellPhone}>SELL PHONE</button>
        <button onClick={this.props.addComp}>ADD COMPUTER</button>
        <button onClick={this.props.sellComp}>SELL COMPUETR</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    phone_price: state.phone_price,
    comp_price: state.comp_price,
    phone_count: state.phone_count,
    comp_count: state.comp_count,
    total_income: state.total_income,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPhone: () => dispatch(addPhone()),
    addComp: () => dispatch(addComp()),
    sellPhone: () => dispatch(sellPhone()),
    sellComp: () => dispatch(sellComp()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
