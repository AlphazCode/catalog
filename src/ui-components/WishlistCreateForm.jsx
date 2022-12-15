/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Wishlist } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function WishlistCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    user_id: undefined,
    price: undefined,
    Products: {},
    wishlistProductsId: undefined,
  };
  const [user_id, setUser_id] = React.useState(initialValues.user_id);
  const [price, setPrice] = React.useState(initialValues.price);
  const [Products, setProducts] = React.useState(initialValues.Products);
  const [wishlistProductsId, setWishlistProductsId] = React.useState(
    initialValues.wishlistProductsId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUser_id(initialValues.user_id);
    setPrice(initialValues.price);
    setProducts(initialValues.Products);
    setWishlistProductsId(initialValues.wishlistProductsId);
    setErrors({});
  };
  const validations = {
    user_id: [],
    price: [],
    Products: [],
    wishlistProductsId: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          user_id,
          price,
          Products,
          wishlistProductsId,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Wishlist(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "WishlistCreateForm")}
    >
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_id: value,
              price,
              Products,
              wishlistProductsId,
            };
            const result = onChange(modelFields);
            value = result?.user_id ?? value;
          }
          if (errors.user_id?.hasError) {
            runValidationTasks("user_id", value);
          }
          setUser_id(value);
        }}
        onBlur={() => runValidationTasks("user_id", user_id)}
        errorMessage={errors.user_id?.errorMessage}
        hasError={errors.user_id?.hasError}
        {...getOverrideProps(overrides, "user_id")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              price: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              user_id,
              price: value,
              Products,
              wishlistProductsId,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <SelectField
        label="Products"
        placeholder="Please select an option"
        isDisabled={false}
        value={Products}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_id,
              price,
              Products: value,
              wishlistProductsId,
            };
            const result = onChange(modelFields);
            value = result?.Products ?? value;
          }
          if (errors.Products?.hasError) {
            runValidationTasks("Products", value);
          }
          setProducts(value);
        }}
        onBlur={() => runValidationTasks("Products", Products)}
        errorMessage={errors.Products?.errorMessage}
        hasError={errors.Products?.hasError}
        {...getOverrideProps(overrides, "Products")}
      ></SelectField>
      <TextField
        label="Wishlist products id"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_id,
              price,
              Products,
              wishlistProductsId: value,
            };
            const result = onChange(modelFields);
            value = result?.wishlistProductsId ?? value;
          }
          if (errors.wishlistProductsId?.hasError) {
            runValidationTasks("wishlistProductsId", value);
          }
          setWishlistProductsId(value);
        }}
        onBlur={() =>
          runValidationTasks("wishlistProductsId", wishlistProductsId)
        }
        errorMessage={errors.wishlistProductsId?.errorMessage}
        hasError={errors.wishlistProductsId?.hasError}
        {...getOverrideProps(overrides, "wishlistProductsId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
