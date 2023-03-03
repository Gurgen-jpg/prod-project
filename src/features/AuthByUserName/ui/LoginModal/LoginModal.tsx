import { classNames } from 'shared/lib/classNames';
import { Modal } from "shared/ui/Modal";
import { LoginForm } from "features/AuthByUserName/ui/LoginForm/LoginForm";

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
            <LoginForm />
        </Modal>
    );
};
