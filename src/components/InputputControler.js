import React, { memo } from "react";
import { FormGroup, Label, Input } from "reactstrap";

const InputputControler = ({
  type,
  textLable,
  placeholder,
  handelOnChange,
  ...props
}) => {
  return (
    <FormGroup>
      <Label>{textLable}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        onChange={handelOnChange}
        {...props}
      />
    </FormGroup>
  );
};

export default memo(InputputControler);
