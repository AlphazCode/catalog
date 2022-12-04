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
export declare type SysInfoCreateFormInputValues = {
    name?: string;
    description?: string;
};
export declare type SysInfoCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SysInfoCreateFormOverridesProps = {
    SysInfoCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SysInfoCreateFormProps = React.PropsWithChildren<{
    overrides?: SysInfoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SysInfoCreateFormInputValues) => SysInfoCreateFormInputValues;
    onSuccess?: (fields: SysInfoCreateFormInputValues) => void;
    onError?: (fields: SysInfoCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SysInfoCreateFormInputValues) => SysInfoCreateFormInputValues;
    onValidate?: SysInfoCreateFormValidationValues;
} & React.CSSProperties>;
export default function SysInfoCreateForm(props: SysInfoCreateFormProps): React.ReactElement;
