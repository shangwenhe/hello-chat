import React from 'react'
import { IndexBar, List, Image } from 'antd-mobile'
import { history } from '@umijs/max'
import NavBarMenu from '@/components/NavBarMenu'
import FixedTopBar from '@/components/FixedTopBar'

const getRandomList = (min: number, max: number): string[] => {
  return new Array(Math.floor(Math.random() * (max - min) + min)).fill('')
}

const words: string[] = [
  "Zhang San",
  "Li Si",
  "Wang Wu",
  "Zhao Liu",
  "Hua Bei",
  "Beijing",
  "Tian Jin"
]

const avatar = [ 'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1548532928-b34e3be62fc6.jpeg',
'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1493666438817-866a91353ca9.jpeg',
'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1542624937-8d1e9f53c1b9.jpeg',
'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat/avatar/photo-1546967191-fdfb13ed6b1e.jpeg']

const charCodeOfA = 'A'.charCodeAt(0)
const groups = Array(26)
  .fill('')
  .map((_, i) => ({
    title: String.fromCharCode(charCodeOfA + i),
    items: getRandomList(3, 10).map(() =>  words[Math.floor(Math.random() * words.length)]),
  }))

export default () => {
  const openDetail = (info: any) => {
    console.log(info)
    const id: string = '123';
    history.push(`/contacts/${id}`);
  }
  return (<>
    <FixedTopBar>
      <NavBarMenu title='通讯录'></NavBarMenu>
    </FixedTopBar>
    <div className='layout-scroll-content' style={{ height: "calc(100vh - var(--top-fixed-height) - var(--status-bar-height) - var(--bottom-fixed-bar))" }}>
      <IndexBar>
        {groups.map(group => {
          const { title, items } = group
          return (
            <IndexBar.Panel
              index={title}
              title={`${title}`}
              key={`A-${title}`}
            >
              <List>
                {items.map((item, index) => (
                  <List.Item prefix={ <Image
                    src={avatar[index%4]}
                    style={{ borderRadius: 'var(--adm-radius-s)' }}
                    fit='cover'
                    width={40}
                    height={40}
                  /> }
                  key={index}
                  onClick={()=>{openDetail(item)}}
                  arrow={false}
                  >
                  {item}
                  </List.Item>
                ))}
              </List>
            </IndexBar.Panel>
          )
        })}
      </IndexBar>
    </div>
    </>
  )
}
