"use client";

import { useMemo, useState } from "react";

import { AuthenticatedPage } from "./AuthenticatedPage";
import { SIDEBAR } from "./pageConfigs";
import { OrgTree } from "./OrgTree";
import styles from "./PeopleListPage.module.css";

type Person = {
  userId: number;
  序号: number;
  人员编号: string;
  姓名: string;
  能建内外: string;
  工作单位: string;
  是否专家: string;
  管理单位: string;
  从事专业: string;
};

const PEOPLE: Person[] = [
  { userId: 1, 序号: 1, 人员编号: "010202A02728", 姓名: "肖丽", 能建内外: "能建内", 工作单位: "中国电力工程顾问集团华东电力设计院有限公司", 是否专家: "是", 管理单位: "集团公司", 从事专业: "电力系统" },
  { userId: 2, 序号: 2, 人员编号: "012007A00569", 姓名: "杨晓娟", 能建内外: "能建内", 工作单位: "中能建数字科技集团有限公司", 是否专家: "否", 管理单位: "集团公司", 从事专业: "信息技术" },
  { userId: 3, 序号: 3, 人员编号: "0111A100051", 姓名: "柳媛", 能建内外: "能建内", 工作单位: "中能建城市投资发展有限公司", 是否专家: "否", 管理单位: "集团公司", 从事专业: "工程管理" },
  { userId: 4, 序号: 4, 人员编号: "010108A11967", 姓名: "胡兴邦", 能建内外: "能建内", 工作单位: "在建及新筹备项目", 是否专家: "否", 管理单位: "集团公司", 从事专业: "土木工程" },
  { userId: 5, 序号: 5, 人员编号: "010204A2235", 姓名: "史东瑞", 能建内外: "能建内", 工作单位: "电力规划总院有限公司", 是否专家: "是", 管理单位: "集团公司", 从事专业: "电力规划" },
];

export function PeopleListPage() {
  const [keyword, setKeyword] = useState("");
  const [expertOnly, setExpertOnly] = useState("全部");
  const [selectedOrg, setSelectedOrg] = useState("中能建集团");

  const filtered = useMemo(() => {
    return PEOPLE.filter((p) => {
      if (expertOnly === "是" && p.是否专家 !== "是") return false;
      if (expertOnly === "否" && p.是否专家 !== "否") return false;
      if (keyword && !p.姓名.includes(keyword) && !p.人员编号.includes(keyword) && !p.工作单位.includes(keyword)) return false;
      // If user clicked a specific org node (leaf), filter by that org
      const leaf = ["中能建绿色建材有限公司", "中能建数字科技集团有限公司", "中能建城市投资发展有限公司", "中能建氢能源有限公司",
        "中国电力工程顾问集团华东电力设计院有限公司", "中国电力工程顾问集团中南电力设计院有限公司", "中国电力工程顾问集团西北电力设计院有限公司",
        "中国电力工程顾问集团华北电力设计院有限公司", "电力规划总院有限公司",
        "中国葛洲坝集团股份有限公司", "中国葛洲坝集团路桥工程有限公司", "中国葛洲坝集团市政工程有限公司",
        "中国葛洲坝集团三峡建设工程有限公司", "中国葛洲坝集团生态环保有限公司",
        "中国能源建设集团山西电力建设有限公司", "中国能源建设集团华东建设投资有限公司", "中国能源建设集团科技发展有限公司",
        "在建及新筹备项目"];
      if (leaf.includes(selectedOrg) && p.工作单位 !== selectedOrg) return false;
      return true;
    });
  }, [keyword, expertOnly, selectedOrg]);

  return (
    <AuthenticatedPage
      sidebar={SIDEBAR}
      breadcrumb={["用户管理", "个人用户"]}
      columns={[]}
      rows={[]}
      rowKey={() => "0"}
    >
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <OrgTree onSelect={setSelectedOrg} defaultSelected={selectedOrg} />
        </aside>
        <main className={styles.main}>
          <div className={styles.filterBar}>
            <input
              type="text"
              placeholder="姓名 / 工号 / 工作单位"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className={styles.search}
            />
            <div className={styles.expertFilter}>
              <label><input type="radio" name="expert" checked={expertOnly === "全部"} onChange={() => setExpertOnly("全部")} /> 全部</label>
              <label><input type="radio" name="expert" checked={expertOnly === "是"} onChange={() => setExpertOnly("是")} /> 专家</label>
              <label><input type="radio" name="expert" checked={expertOnly === "否"} onChange={() => setExpertOnly("否")} /> 非专家</label>
            </div>
            <div className={styles.toolbar}>
              <button type="button" className={styles.primary} onClick={() => window.alert("演示模式：新增能建内科技人员")}>新增能建内</button>
              <button type="button" className={styles.outline} onClick={() => window.alert("演示模式：新增能建外科技人员")}>新增能建外</button>
              <button type="button" className={styles.outline} onClick={() => window.alert("演示模式：导出清单")}>导出清单</button>
            </div>
          </div>

          <div className={styles.tableCard}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th style={{ width: "5%" }}>序号</th>
                  <th style={{ width: "12%" }}>人员编号</th>
                  <th style={{ width: "8%" }}>姓名</th>
                  <th style={{ width: "8%" }}>能建内/外</th>
                  <th style={{ width: "30%" }}>工作单位</th>
                  <th style={{ width: "8%" }}>是否专家</th>
                  <th style={{ width: "12%" }}>管理单位</th>
                  <th style={{ width: "12%" }}>从事专业</th>
                  <th style={{ width: "5%" }}>操作</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => (
                  <tr key={p.userId}>
                    <td>{p.序号}</td>
                    <td className={styles.mono}>{p.人员编号}</td>
                    <td><strong>{p.姓名}</strong></td>
                    <td>
                      <span className={p.能建内外 === "能建内" ? styles.tagBlue : styles.tagGray}>{p.能建内外}</span>
                    </td>
                    <td className={styles.unitCell} title={p.工作单位}>{p.工作单位}</td>
                    <td>
                      <span className={p.是否专家 === "是" ? styles.tagGreen : styles.tagGray}>{p.是否专家}</span>
                    </td>
                    <td>{p.管理单位}</td>
                    <td>{p.从事专业}</td>
                    <td><a href={`/users/${p.userId}`} className={styles.viewLink}>查看</a></td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr><td colSpan={9} className={styles.empty}>当前选中单位暂无人员</td></tr>
                )}
              </tbody>
            </table>
            <div className={styles.footer}>
              <span>共 {filtered.length} 条</span>
            </div>
          </div>
        </main>
      </div>
    </AuthenticatedPage>
  );
}