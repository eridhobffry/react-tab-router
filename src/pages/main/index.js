import React, { useEffect, createRef, useRef } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { Ulinline } from "../../styled/tabs_style";

import * as Components from "../../components";
import { Tab } from "../../styled/styled_main";

const App = props => {
  const { path } = props.match;

  const linkFocus = useRef(null);

  useEffect(() => {
    linkFocus.current.focus();
  }, [linkFocus]);

  return (
    <div>
      <h1>Hey welcome to dashboard!</h1>
      <Ulinline>
        <li>
          <Link ref={linkFocus} id to={`${path}`}>
            Profile
          </Link>
        </li>
        <li>
          <Link to={`${path}/comments`}>Comments</Link>
        </li>
        <li>
          <Link to={`${path}/contact`}>Contact</Link>
        </li>
      </Ulinline>
      <Tab>
        <Switch>
          <Route path={`${path}`} exact component={Components.Profile} />
          <Route path={`${path}/comments`} component={Components.Comments} />
          <Route path={`${path}/contact`} component={Components.Contact} />
        </Switch>
      </Tab>
    </div>
  );
};

export default App;
