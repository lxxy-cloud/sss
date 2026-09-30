"use client";

import { useState } from "react";

import { AuthenticatedPage } from "./AuthenticatedPage";
import { SIDEBAR } from "./pageConfigs";
import styles from "./ProfilePage.module.css";

type Section = "basic" | "security" | "logs";

type LoginLog = {
  time: string;
  ip: string;
  device: string;
  location: string;
};

const LOGS: LoginLog[] = [
  { time: "2026-09-30 09:15:32", ip: "10.135.234.93", device: "Chrome 131 / Windows 11", location: "北京市 朝阳区" },
  { time: "2026-09-29 18:42:11", ip: "10.135.234.93", device: "Chrome 131 / Windows 11", location: "北京市 朝阳区" },
  { time: "2026-09-29 09:03:47", ip: "10.135.234.93", device: "Chrome 131 / Windows 11", location: "北京市 朝阳区" },
  { time: "2026-09-28 14:21:08", ip: "10.135.234.93", device: "Chrome 131 / Windows 11", location: "北京市 朝阳区" },
  { time: "2026-09-28 09:11:54", ip: "10.135.234.93", device: "Edge 130 / Windows 11", location: "北京市 朝阳区" },
];

export function ProfilePage() {
  const [section, setSection] = useState<Section>("basic");
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  return (
    <AuthenticatedPage
      sidebar={SIDEBAR}
      breadcrumb={["个人信息"]}
      columns={[]}
      rows={[]}
      rowKey={() => "0"}
    >
      <div className={styles.page}>
        <header className={styles.header}>
          <div className={styles.avatar}>赵</div>
          <div className={styles.headerInfo}>
            <h2 className={styles.name}>赵耀华 <span className={styles.empId}>(工号 00A0181)</span></h2>
            <p className={styles.subtitle}>集团公司 / 数字化管理部 / 系统管理员</p>
            <p className={styles.contact}>📧 zhaoyaohua@ceec.net.cn  ·  📱 +86 138-0000-0000</p>
          </div>
          <div className={styles.headerStats}>
            <div><strong>128</strong><span>本月登录</span></div>
            <div><strong>42</strong><span>本月操作</span></div>
            <div><strong>5</strong><span>未读消息</span></div>
          </div>
        </header>

        <nav className={styles.tabs}>
          <button type="button" className={section === "basic" ? styles.tabActive : styles.tab} onClick={() => setSection("basic")}>
            基本信息
          </button>
          <button type="button" className={section === "security" ? styles.tabActive : styles.tab} onClick={() => setSection("security")}>
            安全设置
          </button>
          <button type="button" className={section === "logs" ? styles.tabActive : styles.tab} onClick={() => setSection("logs")}>
            登录与操作日志
          </button>
        </nav>

        {section === "basic" && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>基本信息</h3>
            <dl className={styles.grid}>
              <div className={styles.row}><dt>姓名</dt><dd>赵耀华</dd></div>
              <div className={styles.row}><dt>工号</dt><dd>00A0181</dd></div>
              <div className={styles.row}><dt>性别</dt><dd>男</dd></div>
              <div className={styles.row}><dt>出生日期</dt><dd>1985-06-12</dd></div>
              <div className={styles.row}><dt>政治面貌</dt><dd>中共党员</dd></div>
              <div className={styles.row}><dt>民族</dt><dd>汉族</dd></div>
              <div className={styles.row}><dt>所属单位</dt><dd>中国能源建设集团有限公司</dd></div>
              <div className={styles.row}><dt>部门</dt><dd>数字化管理部</dd></div>
              <div className={styles.row}><dt>职位</dt><dd>系统管理员</dd></div>
              <div className={styles.row}><dt>职称</dt><dd>高级工程师</dd></div>
              <div className={styles.row}><dt>学历</dt><dd>硕士研究生</dd></div>
              <div className={styles.row}><dt>专业</dt><dd>计算机科学与技术</dd></div>
              <div className={styles.row}><dt>入职日期</dt><dd>2010-07-01</dd></div>
              <div className={styles.row}><dt>办公电话</dt><dd>010-59000000</dd></div>
              <div className={styles.row}><dt>手机</dt><dd>+86 138-0000-0000</dd></div>
              <div className={styles.row}><dt>邮箱</dt><dd>zhaoyaohua@ceec.net.cn</dd></div>
              <div className={styles.rowFull}><dt>办公地址</dt><dd>北京市西城区阜成门北大街 2 号 中国能源建设大厦 18 层</dd></div>
            </dl>
            <div className={styles.actions}>
              <button type="button" className={styles.primary} onClick={() => window.alert("演示模式：编辑个人信息")}>编辑信息</button>
              <button type="button" className={styles.secondary} onClick={() => window.alert("演示模式：上传头像")}>更换头像</button>
            </div>
          </section>
        )}

        {section === "security" && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>安全设置</h3>
            <div className={styles.securityList}>
              <div className={styles.securityRow}>
                <div className={styles.securityLeft}>
                  <h4>登录密码</h4>
                  <p>建议每 90 天更换一次密码，长度不少于 12 位，包含大小写字母、数字和特殊字符。</p>
                </div>
                <button type="button" className={styles.primary} onClick={() => setShowPasswordModal(true)}>修改密码</button>
              </div>
              <div className={styles.securityRow}>
                <div className={styles.securityLeft}>
                  <h4>手机绑定</h4>
                  <p>已绑定 +86 138-****0000，登录异常或找回密码时用于接收验证码。</p>
                </div>
                <button type="button" className={styles.secondary} onClick={() => window.alert("演示模式：更换手机")}>更换手机</button>
              </div>
              <div className={styles.securityRow}>
                <div className={styles.securityLeft}>
                  <h4>邮箱绑定</h4>
                  <p>已绑定 zha****@ceec.net.cn，用于接收系统通知和密码找回。</p>
                </div>
                <button type="button" className={styles.secondary} onClick={() => window.alert("演示模式：更换邮箱")}>更换邮箱</button>
              </div>
              <div className={styles.securityRow}>
                <div className={styles.securityLeft}>
                  <h4>两步验证 <span className={styles.badgeOn}>已开启</span></h4>
                  <p>登录时除密码外，还需通过手机短信验证码二次确认。</p>
                </div>
                <button type="button" className={styles.danger} onClick={() => window.alert("演示模式：关闭两步验证")}>关闭</button>
              </div>
              <div className={styles.securityRow}>
                <div className={styles.securityLeft}>
                  <h4>登录设备管理</h4>
                  <p>当前已登录 2 台设备。本月异常登录尝试 0 次。</p>
                </div>
                <button type="button" className={styles.secondary} onClick={() => window.alert("演示模式：查看登录设备")}>查看设备</button>
              </div>
              <div className={styles.securityRow}>
                <div className={styles.securityLeft}>
                  <h4>消息通知</h4>
                  <p>站内信：开启  ·  邮件通知：开启  ·  短信通知：仅紧急</p>
                </div>
                <button type="button" className={styles.secondary} onClick={() => window.alert("演示模式：通知设置")}>通知设置</button>
              </div>
            </div>
          </section>
        )}

        {section === "logs" && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>登录日志</h3>
            <table className={styles.logTable}>
              <thead>
                <tr>
                  <th style={{ width: "20%" }}>登录时间</th>
                  <th style={{ width: "15%" }}>IP地址</th>
                  <th style={{ width: "25%" }}>设备 / 浏览器</th>
                  <th style={{ width: "20%" }}>登录地点</th>
                  <th style={{ width: "20%" }}>状态</th>
                </tr>
              </thead>
              <tbody>
                {LOGS.map((log, i) => (
                  <tr key={i}>
                    <td>{log.time}</td>
                    <td className={styles.mono}>{log.ip}</td>
                    <td>{log.device}</td>
                    <td>{log.location}</td>
                    <td><span className={styles.statusOk}>成功</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3 className={styles.sectionTitle} style={{ marginTop: 24 }}>最近操作记录</h3>
            <table className={styles.logTable}>
              <thead>
                <tr>
                  <th style={{ width: "20%" }}>操作时间</th>
                  <th style={{ width: "30%" }}>操作内容</th>
                  <th style={{ width: "20%" }}>对象</th>
                  <th style={{ width: "15%" }}>结果</th>
                  <th style={{ width: "15%" }}>来源 IP</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>2026-09-30 10:25:14</td><td>查看项目详情</td><td>项目 / 玄武岩连续纤维与复合材料...</td><td><span className={styles.statusOk}>成功</span></td><td className={styles.mono}>10.135.234.93</td></tr>
                <tr><td>2026-09-30 10:22:08</td><td>导出奖励清单</td><td>奖励清单</td><td><span className={styles.statusOk}>成功</span></td><td className={styles.mono}>10.135.234.93</td></tr>
                <tr><td>2026-09-30 10:18:53</td><td>新增科技项目查询条件</td><td>项目清单 / 立项年份=2026</td><td><span className={styles.statusOk}>成功</span></td><td className={styles.mono}>10.135.234.93</td></tr>
                <tr><td>2026-09-30 09:55:21</td><td>提交评审申请</td><td>评审申请 / 智能电网新型继电保护方案</td><td><span className={styles.statusPending}>审核中</span></td><td className={styles.mono}>10.135.234.93</td></tr>
                <tr><td>2026-09-30 09:42:37</td><td>查看用户详情</td><td>个人用户 / 010202A02728</td><td><span className={styles.statusOk}>成功</span></td><td className={styles.mono}>10.135.234.93</td></tr>
              </tbody>
            </table>
          </section>
        )}

        {showPasswordModal && (
          <div className={styles.modalBackdrop} onClick={() => setShowPasswordModal(false)}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <h3>修改密码</h3>
              <label>当前密码<input type="password" placeholder="请输入当前密码" /></label>
              <label>新密码<input type="password" placeholder="12 位以上，包含大小写字母、数字、特殊字符" /></label>
              <label>确认新密码<input type="password" placeholder="再次输入新密码" /></label>
              <div className={styles.modalActions}>
                <button type="button" className={styles.secondary} onClick={() => setShowPasswordModal(false)}>取消</button>
                <button type="button" className={styles.primary} onClick={() => { setShowPasswordModal(false); window.alert("演示模式：密码已修改"); }}>确认</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AuthenticatedPage>
  );
}