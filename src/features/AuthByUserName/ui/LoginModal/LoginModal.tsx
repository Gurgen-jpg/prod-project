import { classNames } from 'shared/lib/classNames';
import { Modal } from "shared/ui/Modal";
import { LoginForm } from "features/AuthByUserName/ui/LoginForm/LoginForm";
import style from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}
export const LoginModal = (props:LoginModalProps) => {
    const { className, onClose, isOpen } = props;
    return (
        <Modal
            className={classNames(style.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};
