import React from 'react';
import CursorSpotlight from '../src/components/CursorSpotlight';
// import { CursorSpotlight } from '../build/src';

export default {
  title: 'CursorSpotlight', // 스토리북에서 보여질 그룹과 경로를 명시
  component: CursorSpotlight // 어떤 컴포넌트를 문서화 할지 명시
};

export const basic = () => (
  <CursorSpotlight>
    <div style={{ background: '#efefef'}}>
      예시입니다. 예시입니다.<br />
      예시입니다. 예시입니다.<br />
      예시입니다. 예시입니다.<br />
      예시입니다. 예시입니다.<br />
      예시입니다. 예시입니다.
    </div>
  </CursorSpotlight>
);