/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Product, Wishlist } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type WishlistItemProps = React.PropsWithChildren<Partial<FlexProps> & {
    product?: Product;
    wishlist?: Wishlist;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function WishlistItem(props: WishlistItemProps): React.ReactElement;
