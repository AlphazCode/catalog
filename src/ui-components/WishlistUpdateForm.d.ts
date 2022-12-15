/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Wishlist } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WishlistUpdateFormInputValues = {
    user_id?: string;
    price?: number;
    Products?: string;
    wishlistProductsId?: string;
};
export declare type WishlistUpdateFormValidationValues = {
    user_id?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    Products?: ValidationFunction<string>;
    wishlistProductsId?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WishlistUpdateFormOverridesProps = {
    WishlistUpdateFormGrid?: FormProps<GridProps>;
    user_id?: FormProps<TextFieldProps>;
    price?: FormProps<TextFieldProps>;
    Products?: FormProps<SelectFieldProps>;
    wishlistProductsId?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WishlistUpdateFormProps = React.PropsWithChildren<{
    overrides?: WishlistUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    wishlist?: Wishlist;
    onSubmit?: (fields: WishlistUpdateFormInputValues) => WishlistUpdateFormInputValues;
    onSuccess?: (fields: WishlistUpdateFormInputValues) => void;
    onError?: (fields: WishlistUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: WishlistUpdateFormInputValues) => WishlistUpdateFormInputValues;
    onValidate?: WishlistUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WishlistUpdateForm(props: WishlistUpdateFormProps): React.ReactElement;
