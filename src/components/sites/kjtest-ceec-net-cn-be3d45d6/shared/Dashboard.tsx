"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { AuthenticatedPage } from "./AuthenticatedPage";
import { SIDEBAR } from "./pageConfigs";
import styles from "./Dashboard.module.css";

type Todo = { id: number; title: string; category: string; dueDate: string; priority: "high" | "normal" | "low" };
type Project = { id: number; name: string; status: string; role: string; endDate: string; progress: number };
type Notice = { id: number; title: string; publisher: string; date: string; read: boolean };

const TODOS: Todo[] = [
  { id: 1, title: "【形式审查-工法申请】【超高空屋顶大跨度空冷岛钢结构支撑塔架施工工法】", category: "工法申请", dueDate: "2026-10-12", priority: "high" },
  { id: 2, title: "【专家网评-科技奖】超导电动机、直流断路器和核磁共振装备研发", category: "科技奖励", dueDate: "2026-10-18", priority: "high" },
  { id: 3, title: "【立项审核】煤矸石制备无机纤维关键技术和装备研究", category: "立项审核", dueDate: "2026-10-20", priority: "normal" },
  { id: 4, title: "【中期检查】绿色燃料和新型电解槽研发", category: "中期检查", dueDate: "2026-10-25", priority: "normal" },
  { id: 5, title: "【年度考核】2026 年度科技考核报送", category: "考核", dueDate: "2026-10-30", priority: "low" },
];

const MY_PROJECTS: Project[] = [
  { id: 1, name: "玄武岩连续纤维与复合材料制备关键技术和装备研究", status: "在研", role: "项目负责人", endDate: "2027-12", progress: 18 },
  { id: 2, name: "煤矸石制备无机纤维关键技术和装备研究", status: "在研", role: "技术骨干", endDate: "2026-12", progress: 64 },
  { id: 3, name: "中能建氢能产业链协同创新示范", status: "验收", role: "参与人", endDate: "2026-06", progress: 92 },
  { id: 4, name: "数字化管理部技术标准体系研究", status: "在研", role: "参与人", endDate: "2027-06", progress: 35 },
];

const NOTICES: Notice[] = [
  { id: 1, title: "【工法通知】关于开展 2026 年公司工法申报工作的通知", publisher: "集团科技部", date: "2026-08-04", read: false },
  { id: 2, title: "中国能建科学技术奖网评用户手册", publisher: "集团科技委", date: "2024-04-09", read: true },
  { id: 3, title: "科技创新管理系统操作手册及管理员名单", publisher: "数字化管理部", date: "2023-11-13", read: true },
];

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<"todo" | "project" | "notice">("todo");
  const [userName] = useState("赵耀华");
  const [greeting] = useState(() => {
    const h = new Date().getHours();
    if (h < 6) return "夜深了";
    if (h < 12) return "上午好";
    if (h < 14) return "中午好";
    if (h < 18) return "下午好";
    return "晚上好";
  });
  const today = new Date().toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric", weekday: "long" });

  const stats = useMemo(() => [
    { label: "待办事项", value: TODOS.length, icon: "📋", tone: "blue" },
    { label: "我的项目", value: MY_PROJECTS.length, icon: "🔬", tone: "green" },
    { label: "未读通知", value: NOTICES.filter((n) => !n.read).length, icon: "🔔", tone: "orange" },
    { label: "本月登录", value: 128, icon: "🔐", tone: "purple" },
  ], []);

  return (
    <AuthenticatedPage
      sidebar={SIDEBAR}
      breadcrumb={["首页"]}
      columns={[]}
      rows={[]}
      rowKey={() => "0"}
    >
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroLeft}>
            <h2 className={styles.greeting}>{greeting}，{userName}</h2>
            <p className={styles.subtitle}>{today} · 数字化管理部 · 系统管理员</p>
            <p className={styles.weather}>📍 北京 晴 23°C  · 适宜户外活动</p>
          </div>
          <div className={styles.heroStats}>
            {stats.map((s) => (
              <div key={s.label} className={`${styles.statCard} ${styles[`stat_${s.tone}`]}`}>
                <span className={styles.statIcon}>{s.icon}</span>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.row}>
          <div className={styles.colMain}>
            <div className={styles.tabs}>
              <button type="button" className={activeTab === "todo" ? styles.tabActive : styles.tab} onClick={() => setActiveTab("todo")}>
                📋 待办 <span className={styles.tabCount}>{TODOS.length}</span>
              </button>
              <button type="button" className={activeTab === "project" ? styles.tabActive : styles.tab} onClick={() => setActiveTab("project")}>
                🔬 我的项目 <span className={styles.tabCount}>{MY_PROJECTS.length}</span>
              </button>
              <button type="button" className={activeTab === "notice" ? styles.tabActive : styles.tab} onClick={() => setActiveTab("notice")}>
                🔔 通知公告 <span className={styles.tabCount}>{NOTICES.length}</span>
              </button>
            </div>

            <div className={styles.tabContent}>
              {activeTab === "todo" && (
                <ul className={styles.todoList}>
                  {TODOS.map((t) => (
                    <li key={t.id} className={styles.todoItem}>
                      <span className={`${styles.priorityDot} ${styles[`prio_${t.priority}`]}`} />
                      <div className={styles.todoBody}>
                        <div className={styles.todoTitle}>{t.title}</div>
                        <div className={styles.todoMeta}>
                          <span className={styles.catPill}>{t.category}</span>
                          <span className={styles.due}>截止：{t.dueDate}</span>
                        </div>
                      </div>
                      <button type="button" className={styles.todoBtn} onClick={() => window.alert(`演示模式：处理待办\n${t.title}`)}>处理</button>
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "project" && (
                <div className={styles.projectList}>
                  {MY_PROJECTS.map((p) => (
                    <article key={p.id} className={styles.projectItem}>
                      <header className={styles.projectHeader}>
                        <h4 className={styles.projectTitle}>{p.name}</h4>
                        <span className={`${styles.projectStatus} ${p.status === "在研" ? styles.statusGreen : styles.statusBlue}`}>{p.status}</span>
                      </header>
                      <div className={styles.projectMeta}>
                        <span>角色：{p.role}</span>
                        <span>截止：{p.endDate}</span>
                      </div>
                      <div className={styles.progressWrap}>
                        <div className={styles.progressBar}>
                          <div className={styles.progressFill} style={{ width: `${p.progress}%` }} />
                        </div>
                        <span className={styles.progressLabel}>{p.progress}%</span>
                      </div>
                      <div className={styles.projectActions}>
                        <Link href="/projects" className={styles.linkBtn}>查看详情</Link>
                        <button type="button" className={styles.linkBtn} onClick={() => window.alert(`演示模式：填报 ${p.name} 进展`)}>填报进展</button>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {activeTab === "notice" && (
                <ul className={styles.noticeList}>
                  {NOTICES.map((n) => (
                    <li key={n.id} className={`${styles.noticeItem} ${!n.read ? styles.noticeUnread : ""}`}>
                      {!n.read && <span className={styles.unreadDot} />}
                      <div className={styles.noticeTitle}>{n.title}</div>
                      <div className={styles.noticeMeta}>
                        <span>{n.publisher}</span>
                        <span className={styles.noticeDate}>{n.date}</span>
                      </div>
                      <button type="button" className={styles.noticeBtn} onClick={() => window.alert(`演示模式：查看通知\n${n.title}`)}>查看详情</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <aside className={styles.colSide}>
            <section className={styles.sideCard}>
              <h3 className={styles.sideTitle}>快速入口</h3>
              <div className={styles.quickGrid}>
                <Link href="/projects" className={styles.quickItem}>📋 我的项目</Link>
                <Link href="/rewards" className={styles.quickItem}>🏆 科技奖励</Link>
                <Link href="/users" className={styles.quickItem}>👥 人员管理</Link>
                <Link href="/manage/knowledgeManagement/knowledgeManagement" className={styles.quickItem}>📚 知识库</Link>
                <Link href="/manage/achievement/achievementList/achievementList" className={styles.quickItem}>🏅 成果管理</Link>
                <Link href="/manage/assessmentManagement/assessmentOverView" className={styles.quickItem}>📊 考核管理</Link>
              </div>
            </section>

            <section className={styles.sideCard}>
              <h3 className={styles.sideTitle}>系统公告</h3>
              <ul className={styles.announceList}>
                <li><span className={styles.announceDot} /> 2026 年科技项目立项申报通道已开放<span className={styles.announceDate}>2026-09-28</span></li>
                <li><span className={styles.announceDot} /> 第十届科技奖励网评启动<span className={styles.announceDate}>2026-09-20</span></li>
                <li><span className={styles.announceDot} /> 2026 年度知识管理优秀案例征集<span className={styles.announceDate}>2026-09-15</span></li>
                <li><span className={styles.announceDot} /> 集团科技创新工作会议将于 10 月召开<span className={styles.announceDate}>2026-09-10</span></li>
              </ul>
            </section>

            <section className={styles.sideCard}>
              <h3 className={styles.sideTitle}>数据概览</h3>
              <div className={styles.metricsGrid}>
                <div><strong>326</strong><span>累计成果</span></div>
                <div><strong>47</strong><span>本年新增</span></div>
                <div><strong>82%</strong><span>转化率</span></div>
                <div><strong>1.2亿</strong><span>研发投入</span></div>
              </div>
            </section>
          </aside>
        </section>
      </div>
    </AuthenticatedPage>
  );
}