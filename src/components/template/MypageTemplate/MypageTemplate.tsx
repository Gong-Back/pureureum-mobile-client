import Link from 'next/link';

import * as styles from './MypageTemplate.style';

const MypageTemplate = () => (
  <styles.Wrapper>
    <h3>성동구 문화 시민, 이공백</h3>
    <Link href="/mypage/card">문화 시민증</Link>
    <Link href="/mypage/badge">뱃지 목록</Link>
    <Link href="/mypage/activity">활동 목록</Link>
    <Link href="/mypage/myinfo">내 정보 관리</Link>
  </styles.Wrapper>
);

export default MypageTemplate;
