import React, { Component } from 'react';
import { connect } from 'react-redux';


class Counter extends Component{

    render() {
        return (<div>
             {this.props.ctr}
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: ()=> dispatch({type: 'INCREMENT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
