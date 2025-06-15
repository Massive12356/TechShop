import React from "react";
import { SubHeaderCover, Text } from "./styles";

export default function SubHeader({ title }) {
  return (
    <SubHeaderCover>
      <Text>{title}</Text>
    </SubHeaderCover>
  );
}
