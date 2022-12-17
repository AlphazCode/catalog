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
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function ProductCard(props) {
  const { product, overrides, ...rest } = props;
  const productCardOnClick = useNavigateAction({
    type: "url",
    url: `${"/Product/"}${product?.id}`,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="320px"
      height="512px"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      onClick={() => {
        productCardOnClick();
      }}
      {...rest}
      {...getOverrideProps(overrides, "ProductCard")}
    >
      <Flex
        gap="-7px"
        direction="column"
        width="320px"
        height="391px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 5px 0px 5px"
        {...getOverrideProps(overrides, "Frame 423")}
      >
        <Image
          width="100%"
          height="100%"
          display="inline-block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="absolute"
          padding="10px"
          objectFit="contain"
          src={product?.image}
          margin="auto"
          top="0px"
          bottom="0px"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="288px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Main Text")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
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
            children={product?.name}
            {...getOverrideProps(overrides, "Classic Long Sleeve T-Shirt")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="30px"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 3px 0px 3px"
          {...getOverrideProps(overrides, "Price")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="25px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${product?.min_price}${"\u0433\u0440\u043D - "}${
              product?.max_price
            }${"\u0433\u0440\u043D"}`}
            {...getOverrideProps(overrides, "$99 USD")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
