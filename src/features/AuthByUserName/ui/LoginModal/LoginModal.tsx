import { classNames } from 'shared/lib/classNames';
import { Modal } from "shared/ui/Modal";
import { Suspense } from 'react';
import { LoginFormAsync } from "../LoginForm/LoginForm.async";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}
export const LoginModal = (props:LoginModalProps) => {
    const { className, onClose, isOpen } = props;
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<div>Loading...</div>}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};
