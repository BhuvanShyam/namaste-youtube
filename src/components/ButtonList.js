import React from "react";
import Button from "./Button";

const list = ["All","Live","Gaming","Songs","Live","Cricket","Soccer","Cooking","News"];

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Cricet" />
      <Button name="Soccer" />
      <Button name="Cooking" />
      <Button name="News" />
      <Button name="Soccer" />
      <Button name="Cooking" />
      <Button name="News" />
    </div>
  );
};

export default ButtonList;
