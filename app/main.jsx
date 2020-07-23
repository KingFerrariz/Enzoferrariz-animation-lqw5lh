import React from 'react';
import ReactDOM from 'react-dom';

import { Animation, Expand, Fade, Push, Slide, Zoom, Reveal } from '@progress/kendo-react-animation'
import { Window } from "@progress/kendo-react-dialogs";

class App extends React.Component {
  window;

  constructor(props) {
    super(props);

    this.state = { show: true, open: true };
  }

  onClick = () => {
    this.setState({
      show: !this.state.show
    });
  }
  componentDidMount() {
    if (this.state.show) {
      this.window.windowElement.classList.add('shown');
    }
  }

  componentDidUpdate() {
    if (this.window && this.window.windowElement) {
      this.window.windowElement.classList[this.state.show ? 'add' : 'remove']('shown');
    }
  }

  render() {
    const { show } = this.state;

    const children = show ? (<Window title="Test"></Window>) : null;

    return (
      <div>
        <dl>
          <dt>
           WelCome:
          </dt>
          <dd>
            <button className="k-button" onClick={this.onClick}>Animate</button>
          </dd>
        </dl>
        <Window
          title="test"
          ref={(window) => this.window = window}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('my-app')
);

