import { FC } from "react";
import type {
  Action,
} from 'antd-mobile/es/components/action-sheet'
import { ActionSheet, Toast } from 'antd-mobile';
import { history } from "@umijs/max";


interface MediaSheetProps {
  visible: boolean;
  onClose: any;
}
const MediaSheet:FC<MediaSheetProps> = ({visible, onClose}) => {

  const actions: Action[] = [
    { text: '音频通话', key: 'audio' },
    { text: '视频通话', key: 'video' },
  ]

  const onAction = (action: any) => {
    if (action.key === 'audio' || action.key === 'video') {
      // Toast.show(`点击了${action.text}`)
      history.push({pathname: `/wechat/call/1000`})
    }
  }

  return <>
      <ActionSheet
        cancelText='取消'
        visible={visible}
        actions={actions}
        onClose={onClose}
        onAction={onAction}
      />
  </>
}

export default MediaSheet;
