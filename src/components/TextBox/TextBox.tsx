import type { FC } from 'react';

import styles from './TextBox.module.scss';

type TextBoxProps = {
	value?: string | number | readonly string[];
	name?: string;
	disabled?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextBox: FC<TextBoxProps> = ({ value, name, disabled, onChange }) => {
	return (
		<div className={styles['container']}>
			<input
				type="text"
				name={name}
				value={value}
				onChange={onChange}
				disabled={disabled}
			/>
		</div>
	);
};

export default TextBox;
