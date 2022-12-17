/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { SysInfo } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SysInfoUpdateFormInputValues = {
    name?: string;
    description?: string;
};
export declare type SysInfoUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SysInfoUpdateFormOverridesProps = {
    SysInfoUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SysInfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: SysInfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sysInfo?: SysInfo;
    onSubmit?: (fields: SysInfoUpdateFormInputValues) => SysInfoUpdateFormInputValues;
    onSuccess?: (fields: SysInfoUpdateFormInputValues) => void;
    onError?: (fields: SysInfoUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SysInfoUpdateFormInputValues) => SysInfoUpdateFormInputValues;
    onValidate?: SysInfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SysInfoUpdateForm(props: SysInfoUpdateFormProps): React.ReactElement;
