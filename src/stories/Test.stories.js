import React from 'react';
import Test from 'components/Test/Test';

export default {
  title: 'components|basic/Test', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Test // 어떤 컴포넌트를 문서화 할지 명시
};

export const standard = () => <Test name="Storybook" />;
export const big = () => <Test name="Storybook" big />;
