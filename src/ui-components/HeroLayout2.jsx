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
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function HeroLayout2(props) {
  const { sysInfo, overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "/Catalog" });
  return (
    <Flex
      gap="0"
      direction="row"
      width="1494px"
      height="657px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(126,127,140,1)"
      {...rest}
      {...getOverrideProps(overrides, "HeroLayout2")}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Type Lock Up")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={sysInfo?.name}
          {...getOverrideProps(overrides, "name")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="30px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={sysInfo?.description}
          {...getOverrideProps(overrides, "description")}
        ></Text>
        <Button
          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Каталог"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
