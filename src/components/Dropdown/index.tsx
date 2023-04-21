import React, { useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface DropDownProps {
  options: Option[];
}

const DropDown = ({ options }: DropDownProps) => {
  const [selected, setSelected] = useState();
  const handleOnChange = () => {};
};

export default DropDown;
