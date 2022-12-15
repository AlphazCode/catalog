/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { PriceHistory } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PriceHistoryUpdateFormInputValues = {
    Product?: string;
    price?: number;
    dateid?: number;
    priceHistoryProductId?: string;
};
export declare type PriceHistoryUpdateFormValidationValues = {
    Product?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    dateid?: ValidationFunction<number>;
    priceHistoryProductId?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PriceHistoryUpdateFormOverridesProps = {
    PriceHistoryUpdateFormGrid?: FormProps<GridProps>;
    Product?: FormProps<SelectFieldProps>;
    price?: FormProps<TextFieldProps>;
    dateid?: FormProps<TextFieldProps>;
    priceHistoryProductId?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PriceHistoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: PriceHistoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    priceHistory?: PriceHistory;
    onSubmit?: (fields: PriceHistoryUpdateFormInputValues) => PriceHistoryUpdateFormInputValues;
    onSuccess?: (fields: PriceHistoryUpdateFormInputValues) => void;
    onError?: (fields: PriceHistoryUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PriceHistoryUpdateFormInputValues) => PriceHistoryUpdateFormInputValues;
    onValidate?: PriceHistoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PriceHistoryUpdateForm(props: PriceHistoryUpdateFormProps): React.ReactElement;
