import React, { Component } from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  add,
  subtract,
  storeResult,
  deleteResult
} from "../../store/actions/";

class Counter extends Component {
  render() {
    return (
      <div className="container">
        <div>{this.props.ctr}</div>
        <div>
          <button
            onClick={this.props.onIncrementCounter}
            className="btn btn-primary"
          >
            Increment
          </button>
          <button
            onClick={this.props.onDecrementCounter}
            className="btn btn-danger"
          >
            Decrement
          </button>
          <button onClick={this.props.onAddCounter} className="btn btn-primary">
            Add 10
          </button>
          <button
            onClick={this.props.onSubtractCounter}
            className="btn btn-danger"
          >
            Subtract 8
          </button>
          <hr />
          <button
            onClick={() => this.props.onStoreResult(this.props.ctr)}
            className="btn btn-success btn-block"
          >
            {" "}
            Store Result
          </button>
          <ul>
            {this.props.storedResults.map(strResult => (
              <li
                key={strResult.id}
                onClick={() => this.props.onDeleteResult(strResult.id)}
              >
                {strResult.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: () => dispatch(add(10)),
    onSubtractCounter: () => dispatch(subtract(8)),
    onStoreResult: result => dispatch(storeResult(result)),
    onDeleteResult: id => dispatch(deleteResult(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
