/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProviderCreateFormInputValues = {
    name?: string;
    image?: string;
};
export declare type ProviderCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProviderCreateFormOverridesProps = {
    ProviderCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    image?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProviderCreateFormProps = React.PropsWithChildren<{
    overrides?: ProviderCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProviderCreateFormInputValues) => ProviderCreateFormInputValues;
    onSuccess?: (fields: ProviderCreateFormInputValues) => void;
    onError?: (fields: ProviderCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ProviderCreateFormInputValues) => ProviderCreateFormInputValues;
    onValidate?: ProviderCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProviderCreateForm(props: ProviderCreateFormProps): React.ReactElement;
