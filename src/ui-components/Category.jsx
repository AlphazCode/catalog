/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Category(props) {
  const { category, overrides, ...rest } = props;
  const someOnClick = useNavigateAction({
    type: "url",
    url: `${"/Catalog/"}${category?.id}`,
  });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="235px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="30px 95px 30px 95px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Category")}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="20px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={category?.name}
        onClick={() => {
          someOnClick();
        }}
        {...getOverrideProps(overrides, "Some")}
      ></Text>
    </Flex>
  );
}
