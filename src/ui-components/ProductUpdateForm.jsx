/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Product } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ProductUpdateForm(props) {
  const {
    id,
    product,
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
    name: undefined,
    min_price: undefined,
    max_price: undefined,
    Category: {},
    image: undefined,
    description: undefined,
    productCategoryId: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [min_price, setMin_price] = React.useState(initialValues.min_price);
  const [max_price, setMax_price] = React.useState(initialValues.max_price);
  const [Category, setCategory] = React.useState(initialValues.Category);
  const [image, setImage] = React.useState(initialValues.image);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [productCategoryId, setProductCategoryId] = React.useState(
    initialValues.productCategoryId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...productRecord };
    setName(cleanValues.name);
    setMin_price(cleanValues.min_price);
    setMax_price(cleanValues.max_price);
    setCategory(cleanValues.Category);
    setImage(cleanValues.image);
    setDescription(cleanValues.description);
    setProductCategoryId(cleanValues.productCategoryId);
    setErrors({});
  };
  const [productRecord, setProductRecord] = React.useState(product);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Product, id) : product;
      setProductRecord(record);
    };
    queryData();
  }, [id, product]);
  React.useEffect(resetStateValues, [productRecord]);
  const validations = {
    name: [],
    min_price: [],
    max_price: [],
    Category: [],
    image: [{ type: "URL" }],
    description: [],
    productCategoryId: [],
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
          name,
          min_price,
          max_price,
          Category,
          image: image || undefined,
          description,
          productCategoryId,
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
            Product.copyOf(productRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ProductUpdateForm")}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              min_price,
              max_price,
              Category,
              image,
              description,
              productCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Min price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={min_price}
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              min_price: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              name,
              min_price: value,
              max_price,
              Category,
              image,
              description,
              productCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.min_price ?? value;
          }
          if (errors.min_price?.hasError) {
            runValidationTasks("min_price", value);
          }
          setMin_price(value);
        }}
        onBlur={() => runValidationTasks("min_price", min_price)}
        errorMessage={errors.min_price?.errorMessage}
        hasError={errors.min_price?.hasError}
        {...getOverrideProps(overrides, "min_price")}
      ></TextField>
      <TextField
        label="Max price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={max_price}
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              max_price: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              name,
              min_price,
              max_price: value,
              Category,
              image,
              description,
              productCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.max_price ?? value;
          }
          if (errors.max_price?.hasError) {
            runValidationTasks("max_price", value);
          }
          setMax_price(value);
        }}
        onBlur={() => runValidationTasks("max_price", max_price)}
        errorMessage={errors.max_price?.errorMessage}
        hasError={errors.max_price?.hasError}
        {...getOverrideProps(overrides, "max_price")}
      ></TextField>
      <SelectField
        label="Category"
        placeholder="Please select an option"
        isDisabled={false}
        value={Category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              min_price,
              max_price,
              Category: value,
              image,
              description,
              productCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.Category ?? value;
          }
          if (errors.Category?.hasError) {
            runValidationTasks("Category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("Category", Category)}
        errorMessage={errors.Category?.errorMessage}
        hasError={errors.Category?.hasError}
        {...getOverrideProps(overrides, "Category")}
      ></SelectField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        defaultValue={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              min_price,
              max_price,
              Category,
              image: value,
              description,
              productCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        defaultValue={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              min_price,
              max_price,
              Category,
              image,
              description: value,
              productCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Product category id"
        isRequired={false}
        isReadOnly={false}
        defaultValue={productCategoryId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              min_price,
              max_price,
              Category,
              image,
              description,
              productCategoryId: value,
            };
            const result = onChange(modelFields);
            value = result?.productCategoryId ?? value;
          }
          if (errors.productCategoryId?.hasError) {
            runValidationTasks("productCategoryId", value);
          }
          setProductCategoryId(value);
        }}
        onBlur={() =>
          runValidationTasks("productCategoryId", productCategoryId)
        }
        errorMessage={errors.productCategoryId?.errorMessage}
        hasError={errors.productCategoryId?.hasError}
        {...getOverrideProps(overrides, "productCategoryId")}
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
