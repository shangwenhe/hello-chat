import React, { useState } from "react";

interface IBarBadgeStatus {
  wechat: React.ReactNode;
  contacts: React.ReactNode;
  discover: React.ReactNode;
  user: React.ReactNode;
}

export default () => {
  const [ badges, setBadges ] = useState<IBarBadgeStatus>({
    wechat: '',
    contacts: '',
    discover: '', // Badge.dot
    user: '',
  });

  return {
    badges,
    setBadges
  }
}
