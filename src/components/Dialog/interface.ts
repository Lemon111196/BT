import { ReactNode } from "react";

export default interface IProps {
    open: boolean;
    title?: string;
    onClose?: () => void;
    onSubmit?: () => void;
    children?: ReactNode;
    submitBtn?: string;
}