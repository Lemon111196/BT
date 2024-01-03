// import React from 'react'

import { DialogContainer } from "./styled";
import IProps from "./interface";
import { Button } from "@mui/material";

export default function Dialog(props: IProps) {
    const { open, title, submitBtn, onClose, onSubmit, children } = props;
    return (
        <DialogContainer open={open}>
            <div className="dialog-container">
                <div className="header">{title}</div>
                <div className="modal-body">
                    {children}
                </div>
                <div className="group-btn">
                    <Button className="cancel" onClick={onClose} variant="outlined" color="error">Close</Button>
                    <Button className="confirm" onClick={onSubmit} variant="outlined" color="success">{submitBtn ?? "Yes"}</Button>
                </div>
            </div>
        </DialogContainer>
    )
}
