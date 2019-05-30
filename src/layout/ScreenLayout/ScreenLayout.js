/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import BodyLayout from '../BodyLayout/BodyLayout';
import styles from './style.module.css';

const ScreenLayout = ({ BodyComponent, HeaderComponent }) => (
  <TransitionGroup>
    <CSSTransition
      classNames={{
        appear: styles['fade-appear'],
        appearActive: styles['fade-appear-active']
      }}
      appear={true}
      timeout={300}
    >
      <div>
        {HeaderComponent}
        <BodyLayout BodyComponent={BodyComponent} />
      </div>
    </CSSTransition>
  </TransitionGroup>
);

export default ScreenLayout;
