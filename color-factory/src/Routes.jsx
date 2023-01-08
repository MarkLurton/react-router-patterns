import React, { useState } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Colors from "./Colors";
import ColorForm from "./ColorForm";
import Color from "./Color";

const Routes = () => {
  const initialColors = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
  };
  const [colors, updateColors] = useState(initialColors);

  function handleAdd(newColorObj) {
    updateColors((prevColors) => ({ ...prevColors, ...newColorObj }));
  }

  function renderCurrentColor(props) {
    const { color } = props.match.params;
    const hex = colors[color];
    return <Color {...props} hex={hex} color={color} />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <Colors colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <ColorForm addColor={handleAdd} />
        </Route>
        <Route path="/colors/:color" render={renderCurrentColor} />
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
