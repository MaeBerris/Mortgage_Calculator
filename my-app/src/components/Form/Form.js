import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <FormWrapper>
      <FormHeader>Payment Plan</FormHeader>
    </FormWrapper>
  );
};

export default Form;

const FormWrapper = styled.form`
  border: 2px solid blue;
  border-radius: 5px;
  width: 30%;
`;

const FormHeader = styled.h3`
  color: white;
  background: darkblue;
  display: block;
  border-bottom: 1px solid blue;
  margin: 0px;
`;
