/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Provider } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProviderUpdateFormInputValues = {
    name?: string;
    image?: string;
};
export declare type ProviderUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProviderUpdateFormOverridesProps = {
    ProviderUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    image?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProviderUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProviderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    provider?: Provider;
    onSubmit?: (fields: ProviderUpdateFormInputValues) => ProviderUpdateFormInputValues;
    onSuccess?: (fields: ProviderUpdateFormInputValues) => void;
    onError?: (fields: ProviderUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ProviderUpdateFormInputValues) => ProviderUpdateFormInputValues;
    onValidate?: ProviderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProviderUpdateForm(props: ProviderUpdateFormProps): React.ReactElement;
