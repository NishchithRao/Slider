import React from "react";
import Container, { ContainerProps } from "./Container";

export default {
  title: "components/Container",
  component: Container,
};

const Slide = (props: {
  color: string;
  children: React.HTMLAttributes<HTMLDivElement>["children"];
}) => (
  <div
    style={{
      height: "300px",
      aspectRatio: "1/1",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: props.color,
      marginInline: "2px",
      fontSize: "34px",
    }}
  >
    {props.children}
  </div>
);

export const basic = (args: ContainerProps) => (
  <Container {...args}>
    <Slide color="red">Slide 1</Slide>
    <Slide color="green">Slide 2</Slide>
    <Slide color="blue">Slide 3</Slide>
    <Slide color="black">Slide 4</Slide>
    <Slide color="brown">Slide 5</Slide>
  </Container>
);
basic.args = {} as ContainerProps;
