import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import useModal from '@/hooks/useModal';
import { useGetUserBadges } from '@/query-hooks/user';

import BadgeInfoModal from '../BadgeInfoModal';
import * as styles from './BadgeSection.style';

interface BadgeSectionProps {
  count: number; // 가지고 있는 뱃지 개수
}

export const BadgeInfo = [
  {
    id: 1,
    name: '웰컴',
    description:
      '푸르름에 오신 것을 환영해요! 다양한 활동을 통해 진정한 성동구 문화 시민이 되어보세요.',
  },
  {
    id: 2,
    name: '아이디어 도전자',
    description:
      '처음으로 문화 콘텐츠 아이디어를 제안한 경우 뱃지를 획득할 수 있어요.',
  },
  {
    id: 3,
    name: '진정한 문화 시민',
    description:
      '성동구 문화 이벤트에 1번 이상 참여한 경우 뱃지를 획득할 수 있어요.',
  },
  {
    id: 4,
    name: '아이디어 고수',
    description:
      '컨텐츠 아이디어를 5회 이상 제안한 경우 뱃지를 획득할 수 있어요.',
  },
  {
    id: 5,
    name: '아이디어 마스터',
    description:
      '제안한 아이디어에 투표율이 높을 경우 뱃지를 획득할 수 있어요.',
  },
  {
    id: 6,
    name: '이벤트 전문가',
    description:
      '10개 이상의 성동구 문화 이벤트에 참여한 경우 뱃지를 획득할 수 있어요.',
  },
  {
    id: 7,
    name: '창의적인 시민',
    description:
      '최고의 컨텐츠 아이디어로 선정된 경우 뱃지를 획득할 수 있어요.',
  },
  {
    id: 8,
    name: '성동구 기여자',
    description:
      '아이디어에 참여하여 얻은 투표가 30개 이상인 경우 뱃지를 획득할 수 있어요.',
  },
  {
    id: 9,
    name: '열정적 시민',
    description:
      '성동구 이벤트에 대한 참여와 투표를 합쳐 20회 이상인 경우 뱃지를 획득할 수 있어요.',
  },
  {
    id: 10,
    name: '참여의 달인',
    description:
      '매주 성동구 이벤트에 참여하거나 아이디어를 제안한 경우 뱃지를 획득할 수 있어요.',
  },
  {
    id: 11,
    name: '투표의 달인',
    description: '주당 15회 이상의 투표를 진행한 경우 뱃지를 획득할 수 있어요.',
  },
  {
    id: 12,
    name: '이제는 리더',
    description:
      '푸르름 서비스에 새로운 멤버를 초대하여 참여시킨 경우 뱃지를 획득할 수 있어요.',
  },
];

const BadgeSection = ({ count }: BadgeSectionProps) => {
  const { openModal } = useModal();

  const { data } = useGetUserBadges();
  console.log(data);

  return (
    <styles.Wrapper>
      <Text fontStyleName="body2R" className="title">
        현재 총 <span>{count}</span>개의 뱃지를 획득하셨어요. <br />
        뱃지를 클릭하면 획득 방법을 확인할 수 있어요!
      </Text>
      <styles.BadgeListCard>
        {BadgeInfo.map((badge) => (
          <styles.Badge
            key={badge.id}
            onClick={() => openModal(<BadgeInfoModal id={badge.id} />)}
          >
            {/* bage icon */}
            <Text fontStyleName="body3" color={COLORS.grayscale.dark}>
              {badge.name}
            </Text>
          </styles.Badge>
        ))}
      </styles.BadgeListCard>
    </styles.Wrapper>
  );
};

export default BadgeSection;
