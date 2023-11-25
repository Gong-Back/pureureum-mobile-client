import { profileDummyData } from 'src/dummyData';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import useModal from '@/hooks/useModal';

import PersonalInfoList from '../PersonalInfoList';
import ProfileEditor from '../ProfileEditor';
import UpdatePasswordModal from '../UpdatePasswordModal';
import * as styles from './MyProfileSection.style';

const MyProfileSection = () => {
  const { openModal } = useModal();

  const { email, name, nickname, gender, birthday, profileUrl } =
    profileDummyData;

  return (
    <styles.Wrapper>
      <ProfileEditor profileUrl={profileUrl} nickname={nickname} />
      <styles.PersonalSection>
        <PersonalInfoList
          name={name}
          email={email}
          gender={gender}
          birthday={birthday}
        />
        <styles.Section>
          <Text
            className="info-label"
            color={COLORS.grayscale.gray700}
            fontStyleName="body2B"
          >
            비밀번호
          </Text>
          <Button
            onClick={() => openModal(<UpdatePasswordModal />)}
            themeColor={COLORS.primary.default}
            isRound
            sizeType="small"
            className="profile-button"
          >
            비밀번호 변경
          </Button>
        </styles.Section>
      </styles.PersonalSection>
    </styles.Wrapper>
  );
};

export default MyProfileSection;
