
import { Input, Button, Form } from 'antd-mobile'
import '@/pages/wechat/information/index.less'
import styles from '@/pages/wechat/information/index.less'
import { AudioOutline, AddCircleOutline, SmileOutline  } from 'antd-mobile-icons'
import { useEffect, useState } from 'react'
import { FormInstance } from 'antd-mobile/es/components/form'

interface IIMInputProps {
  form: FormInstance;
}

export default ({ form }: IIMInputProps) => {

  const [ value, onChange ] = useState<string>('')
  const fontSize = 24;

  const onSend = () => {
    form.submit();
    onChange("")
  }

  const inputProps = {
    className: styles.input,
    style: {'--font-size': '14px'},
    placeholder: '请输入内容',
    value,
    onChange,
  }

  useEffect(()=>{
    console.log("value", value);
  }, [value])

  return <>
      <div className={styles['im-input']}>
        <AudioOutline className={styles['im-input-item']} fontSize={fontSize} />
        <Form.Item noStyle name="content">
          <Input { ...inputProps }/>
        </Form.Item>
        <SmileOutline className={styles['im-input-item']} fontSize={fontSize} />
        {(value.length > 0 ?
          <Button className={styles['im-input-item-send']} onClick={onSend} shape='default' size='mini' color='primary'>发送</Button>
          : <AddCircleOutline className={styles['im-input-item']} fontSize={fontSize} /> )}
      </div>
    </>
}
