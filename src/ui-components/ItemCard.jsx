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
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function ItemCard(props) {
  const { offers, provider, overrides, ...rest } = props;
  const itemCardOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: offers?.url,
  });
  return (
    <Flex
      gap="16px"
      direction="row"
      width="1120px"
      height="100px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="2px 0px 0px 16px"
      backgroundColor="rgba(255,255,255,1)"
      onClick={() => {
        itemCardOnClick();
      }}
      {...rest}
      {...getOverrideProps(overrides, "ItemCard")}
    >
      <Flex
        gap="10px"
        direction="row"
        width="1094px"
        height="98px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="26px"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "ItemFrame")}
      >
        <View
          width="60px"
          height="60px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 425")}
        >
          <Image
            width="60px"
            height="60px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="21px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={provider?.image}
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </View>
        <Flex
          gap="-400px"
          direction="row"
          width="794px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 10px"
          {...getOverrideProps(overrides, "Frame 426")}
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
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={provider?.name}
            {...getOverrideProps(overrides, "T-Shirt")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
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
            children={offers?.name}
            {...getOverrideProps(overrides, "Classic Long Sleeve")}
          ></Text>
        </Flex>
        <Flex
          gap="50px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 70px 0px 70px"
          {...getOverrideProps(overrides, "Frame 427")}
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
            width="33px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={offers?.price}
            {...getOverrideProps(overrides, "$99")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
