import React from 'react';
import './style.css';

import UserInfo from '../components/steps/UserInfo/';

function InitialPage() {
  return (
    <div className={'box'}>
      <div className={'header'}>
        <div className={'nav'}>
          <img alt={'back'} src={'./assets/left_arrow.png'} />
          Geri
        </div>
        <div className={'logo'}>
          <img alt={"logo"} src={'./assets/logo_2.png'} />
        </div>
      </div>
      <div className={'content'}>
        <UserInfo />
      </div>
    </div>
  );
}

export default InitialPage;