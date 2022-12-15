/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { PriceHistory } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function PriceHistoryUpdateForm(props) {
  const {
    id,
    priceHistory,
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
    Product: {},
    price: undefined,
    dateid: undefined,
    priceHistoryProductId: undefined,
  };
  const [Product, setProduct] = React.useState(initialValues.Product);
  const [price, setPrice] = React.useState(initialValues.price);
  const [dateid, setDateid] = React.useState(initialValues.dateid);
  const [priceHistoryProductId, setPriceHistoryProductId] = React.useState(
    initialValues.priceHistoryProductId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...priceHistoryRecord };
    setProduct(cleanValues.Product);
    setPrice(cleanValues.price);
    setDateid(cleanValues.dateid);
    setPriceHistoryProductId(cleanValues.priceHistoryProductId);
    setErrors({});
  };
  const [priceHistoryRecord, setPriceHistoryRecord] =
    React.useState(priceHistory);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id
        ? await DataStore.query(PriceHistory, id)
        : priceHistory;
      setPriceHistoryRecord(record);
    };
    queryData();
  }, [id, priceHistory]);
  React.useEffect(resetStateValues, [priceHistoryRecord]);
  const validations = {
    Product: [],
    price: [],
    dateid: [],
    priceHistoryProductId: [],
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
          Product,
          price,
          dateid,
          priceHistoryProductId,
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
          await DataStore.save(
            PriceHistory.copyOf(priceHistoryRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "PriceHistoryUpdateForm")}
    >
      <SelectField
        label="Product"
        placeholder="Please select an option"
        isDisabled={false}
        value={Product}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Product: value,
              price,
              dateid,
              priceHistoryProductId,
            };
            const result = onChange(modelFields);
            value = result?.Product ?? value;
          }
          if (errors.Product?.hasError) {
            runValidationTasks("Product", value);
          }
          setProduct(value);
        }}
        onBlur={() => runValidationTasks("Product", Product)}
        errorMessage={errors.Product?.errorMessage}
        hasError={errors.Product?.hasError}
        {...getOverrideProps(overrides, "Product")}
      ></SelectField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={price}
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
              Product,
              price: value,
              dateid,
              priceHistoryProductId,
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
      <TextField
        label="Dateid"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={dateid}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              dateid: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              Product,
              price,
              dateid: value,
              priceHistoryProductId,
            };
            const result = onChange(modelFields);
            value = result?.dateid ?? value;
          }
          if (errors.dateid?.hasError) {
            runValidationTasks("dateid", value);
          }
          setDateid(value);
        }}
        onBlur={() => runValidationTasks("dateid", dateid)}
        errorMessage={errors.dateid?.errorMessage}
        hasError={errors.dateid?.hasError}
        {...getOverrideProps(overrides, "dateid")}
      ></TextField>
      <TextField
        label="Price history product id"
        isRequired={false}
        isReadOnly={false}
        defaultValue={priceHistoryProductId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Product,
              price,
              dateid,
              priceHistoryProductId: value,
            };
            const result = onChange(modelFields);
            value = result?.priceHistoryProductId ?? value;
          }
          if (errors.priceHistoryProductId?.hasError) {
            runValidationTasks("priceHistoryProductId", value);
          }
          setPriceHistoryProductId(value);
        }}
        onBlur={() =>
          runValidationTasks("priceHistoryProductId", priceHistoryProductId)
        }
        errorMessage={errors.priceHistoryProductId?.errorMessage}
        hasError={errors.priceHistoryProductId?.hasError}
        {...getOverrideProps(overrides, "priceHistoryProductId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
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
