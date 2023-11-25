import { COLORS } from '@/constants/styles';

import Text from '../Text';
import * as style from './Tag.style';

export interface TagProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const Tag = ({ label, onClick, className }: TagProps) => (
  <style.Wrapper onClick={onClick} className={className}>
    <Text
      fontStyleName="caption"
      color={COLORS.primary.default}
      className="label"
    >
      {label}
    </Text>
  </style.Wrapper>
);

export default Tag;
