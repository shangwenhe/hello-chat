
import { Input, Button, Form, Grid, List } from 'antd-mobile'
import './index.less'
import styles from './index.less'
import { AudioOutline, PictureOutline, AddCircleOutline, SmileOutline,
  CameraOutline, SystemQRcodeOutline, SoundOutline,
  TravelOutline, PhoneFill, StarOutline, UserContactOutline  } from 'antd-mobile-icons'
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


  const [ showActions, setShowActions ] = useState<boolean>(true);

  return <List className={styles['im-input-warp']} style={{'--padding-left': "0px", '--padding-right': '0px'}}>
      <List.Item>
        <div className={styles['im-input']}>
        <AudioOutline className={styles['im-input-item']} fontSize={fontSize} />
        <Form.Item noStyle name="content">
          <Input { ...inputProps }/>
        </Form.Item>
        <SmileOutline className={styles['im-input-item']} fontSize={fontSize} />
        {(value.length > 0 ?
          <Button className={styles['im-input-item-send']} onClick={onSend} shape='default' size='mini' color='primary'>发送</Button>
          : <AddCircleOutline onClick={()=> setShowActions(!showActions) }  className={styles['im-input-item']} fontSize={fontSize} /> )}
          </div>
      </List.Item>
      { showActions &&
      <List.Item>
        <Grid className="wechat-grid" columns={4} gap={16}>
            <Grid.Item>
              <span className="wechat-grid-item">
                <PictureOutline />
              </span>
            </Grid.Item>
            <Grid.Item>
              <span className="wechat-grid-item">
                <CameraOutline />
              </span>
            </Grid.Item>
            <Grid.Item>
              <span className="wechat-grid-item">
                <SoundOutline />
              </span>
            </Grid.Item>
            <Grid.Item>
              <span className="wechat-grid-item" >
                <AudioOutline />
              </span>
            </Grid.Item>
            <Grid.Item>
              <span className="wechat-grid-item">
                <PhoneFill/>
              </span>
            </Grid.Item>
            <Grid.Item>
              <span className="wechat-grid-item">
                <TravelOutline/>
              </span>
            </Grid.Item>
            <Grid.Item>
              <span className="wechat-grid-item">
                <SystemQRcodeOutline/>
              </span>
            </Grid.Item>
            <Grid.Item>
              <span className="wechat-grid-item">
                <StarOutline />
              </span>
            </Grid.Item>
            <Grid.Item>
              <span className="wechat-grid-item">
                <UserContactOutline />
              </span>
            </Grid.Item>
          </Grid>
        </List.Item>
      }
    </List>
}
