import React from "react";
import { connect } from "react-redux";
import { getData } from "./store/action.js";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getList();
    }
  }
  render() {
    return (
      <div>
        <div>您好，{this.props.name}！</div>
        <ul>
          {this.props.list.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

Home.loadData = (store) => {
  return store.dispatch(getData());
};

const mapStateToProps = (state) => ({
  name: state.home.name,
  list: state.home.list,
});

const mapDispatchToProps = (dispatch) => ({
  getList() {
    //调用dispatch时会自动执行getData里return的方法
    dispatch(getData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
