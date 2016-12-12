import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import '../styles/bootstrap.css';
import '../styles/AdminLTE.css';
import '../styles/skins/skin-blue.css';
import MainSidebar from '../components/MainSidebar';
import ContentWrapper from '../components/ContentWrapper';
class AppComponent extends React.Component {
 
  render() {
    return (
       <div className="skin-blue">
        <Header />
        <MainSidebar />
        <div className="content-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};
//被connect的组件，AppComponent 只关心this.props.dispatch就行了。
export default connect()(AppComponent);
