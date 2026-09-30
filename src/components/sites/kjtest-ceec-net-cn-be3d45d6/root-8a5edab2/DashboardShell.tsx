'use client'

import { useState } from 'react'

import styles from './DashboardShell.module.css'

type NavigationItem = {
  label: string
  children?: string[]
}

const navigation: NavigationItem[] = [
  { label: '用户管理' },
  { label: '研发平台', children: ['平台建设', '平台信息维护'] },
  { label: '科技项目', children: ['项目申报', '项目实施', '项目验收'] },
  { label: '科技成果', children: ['成果登记', '成果转化'] },
  { label: '科技奖励', children: ['奖励申报', '奖励统计'] },
  { label: '技术标准', children: ['标准立项', '标准管理'] },
  { label: '重大工程技术方案评审', children: ['方案申报', '评审管理'] },
  { label: '考核管理', children: ['考核计划', '考核结果'] },
  { label: '科技统计', children: ['统计报表', '数据填报'] },
  { label: '协同创新', children: ['协同项目', '合作单位'] },
  { label: '知识管理', children: ['知识库', '资料下载'] },
  { label: '个人信息' },
  { label: '系统管理', children: ['角色管理', '权限管理'] },
]

const years = [
  ['2011', 37], ['2012', 43], ['2013', 48], ['2014', 56], ['2015', 52], ['2016', 68],
  ['2017', 74], ['2018', 69], ['2019', 84], ['2020', 78], ['2021', 94],
] as const

export function DashboardShell() {
  const [active, setActive] = useState('首页')
  const [openMenus, setOpenMenus] = useState<string[]>(['科技项目'])

  function toggleMenu(label: string) {
    setOpenMenus((current) => current.includes(label)
      ? current.filter((item) => item !== label)
      : [...current, label])
    setActive(label)
  }

  return (
    <main className={styles.shell}>
      <header className={styles.header}>
        <h1>科技创新管理系统</h1>
        <div className={styles.userArea}><span>集团公司 赵耀华 (00A0181)</span><button aria-label="退出登录" className={styles.powerButton} type="button">⏻</button></div>
      </header>
      <aside className={styles.sidebar} aria-label="主导航">
        <nav>
          {navigation.map((item) => {
            const expandable = Boolean(item.children)
            const expanded = openMenus.includes(item.label)
            return <div className={styles.navGroup} key={item.label}>
              <button className={`${styles.navItem} ${active === item.label ? styles.active : ''}`} onClick={() => expandable ? toggleMenu(item.label) : setActive(item.label)} type="button">
                <span>{item.label}</span>{expandable && <span className={styles.chevron}>{expanded ? '⌃' : '⌄'}</span>}
              </button>
              {expandable && expanded && <div className={styles.subnav}>
                {item.children?.map((child) => <button className={`${styles.subnavItem} ${active === child ? styles.activeSubnav : ''}`} key={child} onClick={() => setActive(child)} type="button">{child}</button>)}
              </div>}
            </div>
          })}
        </nav>
      </aside>
      <section className={styles.workspace}>
        <div className={styles.tabs}><button className={styles.homeTab} onClick={() => setActive('首页')} type="button">首页</button><span className={styles.currentTab}>{active}</span></div>
        <div className={styles.cards}>
          <section className={styles.card}>
            <CardTitle title="待办" extra="99+" />
            <ul className={styles.taskList}>
              <li><span>科技项目</span><p>2021年度科技项目中期检查通知</p><time>2022-01-18</time></li>
              <li><span>成果管理</span><p>请及时完成科技成果登记填报工作</p><time>2022-01-16</time></li>
              <li><span>科技奖励</span><p>集团公司科学技术奖申报待审核</p><time>2022-01-12</time></li>
            </ul>
          </section>
          <section className={styles.card}>
            <CardTitle title="通知公告" />
            <ul className={styles.noticeList}>
              <li><p>关于开展2022年度科技创新统计工作的通知</p><button type="button">查看详情</button></li>
              <li><p>集团公司科技创新管理系统上线通知</p><button type="button">查看详情</button></li>
              <li><p>关于征集重点研发计划项目建议的通知</p><button type="button">查看详情</button></li>
            </ul>
          </section>
          <section className={styles.card}>
            <CardTitle title="研发投入（万元）" />
            <div className={styles.chart} aria-label="2011年至2021年研发投入柱状图">
              {years.map(([year, height]) => <div className={styles.barGroup} key={year}><i className={styles.bar} style={{ height: `${height}%` }} /><span>{year}</span></div>)}
            </div>
          </section>
          <section className={styles.card}>
            <CardTitle title="科技奖励" />
            <div className={styles.awards}><div className={styles.donut}><strong>68</strong><span>项</span></div><ul><li><i className={styles.blue} />国家级奖励 <b>6</b></li><li><i className={styles.cyan} />省部级奖励 <b>24</b></li><li><i className={styles.orange} />集团级奖励 <b>38</b></li></ul></div>
          </section>
          <section className={`${styles.card} ${styles.resultCard}`}>
            <CardTitle title="科技成果" />
            <div className={styles.resultStats}><div><strong>326</strong><span>累计成果</span></div><div><strong>47</strong><span>本年新增</span></div><div><strong>82%</strong><span>转化率</span></div></div>
          </section>
        </div>
      </section>
    </main>
  )
}

function CardTitle({ title, extra }: { title: string; extra?: string }) {
  return <header className={styles.cardHeader}><h2>{title}</h2>{extra && <span>{extra}</span>}</header>
}
