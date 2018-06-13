import React from 'react';

import './style/info.scss';
import {Tabs} from 'antd';


class Info extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  };

  componentWillMount() {

  }

  componentDidMount() {
    var ue = UE.getEditor('editor');
    console.log(ue)
  }
  render() {

    return (
        <script id="editor" type="text/plain" style="width:1024px;height:500px;"></script>
    );
  };

}

export default Info;
