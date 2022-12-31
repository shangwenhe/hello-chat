import React from 'react'
import { IndexBar, List, Image } from 'antd-mobile'
import { history } from '@umijs/max'

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

const avatar = 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'

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
  return (
    <div style={{ height: window.innerHeight }}>
      <IndexBar>
        {groups.map(group => {
          const { title, items } = group
          return (
            <IndexBar.Panel
              index={title}
              title={`标题${title}`}
              key={`标题${title}`}
            >
              <List>
                {items.map((item, index) => (
                  <List.Item prefix={ <Image
                    src={avatar}
                    style={{ borderRadius: 20 }}
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
  )
}
