
import { Grid, AutoCenter, Input, Button, List, Avatar, Popover } from 'antd-mobile'
import './index.less'
import styles from './index.less'
import { AudioOutline, AddCircleOutline, SmileOutline  } from 'antd-mobile-icons'
import { useEffect, useRef, useState } from 'react'
import ChatPopover from './ChatPopover'

const avatar = 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ';

export default () => {

  const [ value, onChange ] = useState<string>('')
  const list = useRef(null);

  const content = 'infoi nfoin fo';
  const fontSize = 24;

  return <>
      <List style={{'--border-inner': 'none','--border-bottom': 'none', '--border-top': 'none', '--align-items':'flex-start' }} >
        <List.Item className='infomation'
          prefix={<Avatar className={styles.avatar}  src={avatar} />}
        >
          <ChatPopover content={content}></ChatPopover>
        </List.Item>
        <List.Item className='infomation'
          extra={<Avatar className={styles.avatar} src={avatar} />}
        >
          <ChatPopover content={content} placement='right' ></ChatPopover>
        </List.Item>

        <List.Item className='infomation'
          prefix={<Avatar style={{'--border-radius': '32px', marginTop: '24px'}} src={avatar} />}
        >
          <ChatPopover content={content}></ChatPopover>
        </List.Item>
      </List>

      {/* 输入窗口 */}
      <div className={styles['im-input']}>
        <AudioOutline className={styles['im-input-item']} fontSize={fontSize} />
        <Input
          className={styles.input}
          style={{'--font-size': '14px'}}
          placeholder='请输入内容'
          value={value}
          onChange={onChange}
        />
        <SmileOutline className={styles['im-input-item']} fontSize={fontSize} />
        {(value.length > 0 ?
          <Button className={styles['im-input-item-send']} shape='default' size='mini' color='primary'>发送</Button>
          : <AddCircleOutline className={styles['im-input-item']} fontSize={fontSize} /> )}
      </div>
    </>
}
