/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PriceHistoryCreateFormInputValues = {
    Product?: string;
    price?: number;
    dateid?: number;
    priceHistoryProductId?: string;
};
export declare type PriceHistoryCreateFormValidationValues = {
    Product?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    dateid?: ValidationFunction<number>;
    priceHistoryProductId?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PriceHistoryCreateFormOverridesProps = {
    PriceHistoryCreateFormGrid?: FormProps<GridProps>;
    Product?: FormProps<SelectFieldProps>;
    price?: FormProps<TextFieldProps>;
    dateid?: FormProps<TextFieldProps>;
    priceHistoryProductId?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PriceHistoryCreateFormProps = React.PropsWithChildren<{
    overrides?: PriceHistoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PriceHistoryCreateFormInputValues) => PriceHistoryCreateFormInputValues;
    onSuccess?: (fields: PriceHistoryCreateFormInputValues) => void;
    onError?: (fields: PriceHistoryCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PriceHistoryCreateFormInputValues) => PriceHistoryCreateFormInputValues;
    onValidate?: PriceHistoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function PriceHistoryCreateForm(props: PriceHistoryCreateFormProps): React.ReactElement;
