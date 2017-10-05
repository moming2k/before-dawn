'use strict';
import React from 'react';

export default class SaverList extends React.Component {
  constructor(props) {
    super(props);
    self = this;
    this.state = {
      value: this.props.current
    };
  }

  onChanged(e) {
    self.setState({
      key: e.currentTarget.value
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    var self = this;
    var nodes = this.props.data.map(function(s, i) {
      var is_checked = (s.key === self.state.value);
      var authorClass = "external author";
      var aboutUrlClass = "external aboutUrl";
      var buttonWrapClass = "hide";
      
      if ( typeof(s.author) === "undefined" || s.author === "" ) {
        authorClass = authorClass + " hide";
      }
      if ( typeof(s.aboutUrl) === "undefined" || s.aboutUrl === "" ) {
        aboutUrlClass = aboutUrlClass + " hide";
      }

      if ( s.editable === true ) {
        buttonWrapClass = "buttons";
      }
      
      return (
        <li className={"list-group-item flex-column entry"} key={i}>
          <div className={"d-flex w-100 justify-content-between"}>
          <label>
            <div className={"body"}>
              <input type="radio" name="screensaver" value={s.key} onChange={self.onChanged} defaultChecked={is_checked} />
              <b>{s.name}</b>
            </div>
          </label>
          
          <div className={buttonWrapClass}>
            <a className={"watcher btn btn-outline-secondary btn-sm"} href="#" role="button" data-key={s.key}>edit</a>
            <a className={"delete btn btn-outline-secondary btn-sm"} href="#" role="button "data-key={s.key}>delete</a>
          </div>
          </div>
        </li>
      );
    });

    return(<ul className={"list-group"}>{nodes}</ul>);
  }
}

