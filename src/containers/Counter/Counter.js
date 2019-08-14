import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

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
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 10 }),
    onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, value: 8 }),
    onStoreResult: result =>
      dispatch({ type: actionTypes.STORE_RESULT, result: result }),
    onDeleteResult: id =>
      dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
