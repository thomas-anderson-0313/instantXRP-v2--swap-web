import React from "react";
import { useSelector } from "react-redux";
import { notification } from "antd";
import { FormContainer, BlanceBlock, BuyBlock } from "./Form.styled";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  //@ts-ignore
  const buyEth = useSelector((state) => state.home.buyEth);

  const handleBuy = () => {
    if (!window.sessionStorage.getItem("addr")) {
      notification["warning"]({
        message: "Warning",
        description: "connect metamask error...",
      });
    } else {
      /**        here is the buy function    */
    }
  };
  return (
    <FormContainer>
      <BlanceBlock>
        InstantXrp balance<div>0 INSTANTXRP</div>
        Amount in InstantXrp<div>{buyEth / 2} INSTANTXRP</div>
      </BlanceBlock>
      <BuyBlock>
        <span>buy instantxrp v2</span>
        <Input />
        <Button
          width={139}
          height={45}
          content="buy now"
          fSize={17}
          handleClick={handleBuy}
        />
      </BuyBlock>
    </FormContainer>
  );
};

export default Form;