import React from "react";
import "./Title.css";

const Title = props => <div class="jumbotron">
  <h1 class="display-4">Simpsons Clicky Game!</h1>
  <p class="lead">Click on an image to earn points but don't click on an image more than once!</p>
</div>
// <h1 className="title">{props.children}</h1>;

export default Title;
