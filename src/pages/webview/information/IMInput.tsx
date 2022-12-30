
import { Input, Button } from 'antd-mobile'
import './index.less'
import styles from './index.less'
import { AudioOutline, AddCircleOutline, SmileOutline  } from 'antd-mobile-icons'
import { useState } from 'react'

export default () => {

  const [ value, onChange ] = useState<string>('')
  const fontSize = 24;

  return <>
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
