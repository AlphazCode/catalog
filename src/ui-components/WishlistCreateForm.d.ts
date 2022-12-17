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
export declare type WishlistCreateFormInputValues = {
    user_id?: string;
    price?: number;
    Products?: string;
    wishlistProductsId?: string;
};
export declare type WishlistCreateFormValidationValues = {
    user_id?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    Products?: ValidationFunction<string>;
    wishlistProductsId?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WishlistCreateFormOverridesProps = {
    WishlistCreateFormGrid?: FormProps<GridProps>;
    user_id?: FormProps<TextFieldProps>;
    price?: FormProps<TextFieldProps>;
    Products?: FormProps<SelectFieldProps>;
    wishlistProductsId?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WishlistCreateFormProps = React.PropsWithChildren<{
    overrides?: WishlistCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WishlistCreateFormInputValues) => WishlistCreateFormInputValues;
    onSuccess?: (fields: WishlistCreateFormInputValues) => void;
    onError?: (fields: WishlistCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: WishlistCreateFormInputValues) => WishlistCreateFormInputValues;
    onValidate?: WishlistCreateFormValidationValues;
} & React.CSSProperties>;
export default function WishlistCreateForm(props: WishlistCreateFormProps): React.ReactElement;
