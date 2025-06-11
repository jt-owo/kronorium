import type { FC, ReactNode } from "react";

import styles from './Button.module.scss';

type ButtonProps = {
    children: ReactNode;
    onClick?: (event: React.MouseEvent) => void;
    disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick, disabled = false }) => {
    return <button className={styles['button']} onClick={onClick} disabled={disabled}>{children}</button>;
}

export default Button;