import React from 'react';

import * as styles from './ToggleButton.style';

export interface ToggleButtonProps {
  isLeft: boolean;
  onClick?: () => void;
}

/**
 * 토글 버튼 컴포넌트
 */
const ToggleButton = ({ isLeft = true, onClick }: ToggleButtonProps) => (
  <styles.Container onClick={onClick}>
    <styles.Button isLeft={isLeft} />
  </styles.Container>
);

export default ToggleButton;
