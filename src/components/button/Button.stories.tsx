import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

// args : 컴포넌트에 전달되는 인수(argument)의 기본값을 설정할 수 있습니다.

// argTypes : 인수(argument)의 속성을 제어하고 제한할 수 있습니다.
// 예를 들어, 특정 인수를 컨트롤 가능한 컴포넌트로 렌더링할 수 있습니다.

// decorators : 모든 스토리에 적용되는 데코레이터 함수를 지정할 수 있습니다.
// 대개 렌더링된 컴포넌트에 추가적인 UI를 제공하는 데 사용됩니다.

// parameters : 다양한 Storybook 환경에서 사용할 수 있는 설정 값들을 정의할 수 있습니다. 예를 들어, 스토리가 동작하는 데 필요한 데이터를 제공할 수 있습니다.
// 더 많은 정보는 Storybook 공식 문서를 참고하세요: https://storybook.js.org/docs/react/api/args-stories

export const Default = (): JSX.Element => (
  <Button
    label="Whereas disregard and contempt for human rights have resulted
  "
    onClick={action('clicked')}
  />
);
