"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { AuthenticatedPage } from "./AuthenticatedPage";
import { SIDEBAR } from "./pageConfigs";
import styles from "./KnowledgePage.module.css";

type Doc = {
  id: number;
  title: string;
  category: string;
  author: string;
  unit: string;
  publishDate: string;
  downloads: number;
  views: number;
  size: string;
};

const CATEGORIES = ["全部", "技术标准", "技术论文", "技术报告", "内部资料", "培训资料", "最佳实践", "典型案例", "工法资料"] as const;

const docs: Doc[] = [
  { id: 1, title: "特高压输电工程设计标准汇编（2024版）", category: "技术标准", author: "张炳成", unit: "中国电力工程顾问集团有限公司", publishDate: "2024-08-15", downloads: 1245, views: 3821, size: "12.4 MB" },
  { id: 2, title: "百万千瓦级超超临界燃煤机组关键技术研究", category: "技术论文", author: "李涛, 王明", unit: "华东电力设计院", publishDate: "2024-06-22", downloads: 856, views: 2103, size: "8.7 MB" },
  { id: 3, title: "新能源场站智能运维管理平台技术报告", category: "技术报告", author: "万明忠", unit: "中能建数字科技集团有限公司", publishDate: "2024-09-10", downloads: 634, views: 1876, size: "15.2 MB" },
  { id: 4, title: "抽水蓄能电站建设典型案例汇编", category: "典型案例", author: "陶洪辉", unit: "中国能源建设集团广西电力设计研究院", publishDate: "2024-07-08", downloads: 423, views: 1287, size: "23.1 MB" },
  { id: 5, title: "BIM技术在大型水利枢纽施工中的应用", category: "最佳实践", author: "周佳奇", unit: "中国葛洲坝集团市政工程有限公司", publishDate: "2024-05-30", downloads: 312, views: 945, size: "6.8 MB" },
  { id: 6, title: "新型电力系统构建路径研究", category: "技术论文", author: "杜忠明", unit: "电力规划总院", publishDate: "2024-04-12", downloads: 587, views: 1645, size: "9.5 MB" },
  { id: 7, title: "海外EPC项目风险管控指南", category: "内部资料", author: "罗必雄", unit: "中国电力工程顾问集团有限公司", publishDate: "2024-03-25", downloads: 268, views: 712, size: "4.2 MB" },
  { id: 8, title: "氢能制备与储运关键技术进展", category: "技术论文", author: "李京光", unit: "中能建氢能源有限公司", publishDate: "2024-09-05", downloads: 445, views: 1126, size: "7.3 MB" },
  { id: 9, title: "智能建造施工工法汇编（2024）", category: "工法资料", author: "蒋洋", unit: "中能建绿色建材有限公司", publishDate: "2024-08-28", downloads: 521, views: 1456, size: "18.9 MB" },
  { id: 10, title: "数字化转型与新型生产关系研究", category: "培训资料", author: "张猛", unit: "北京电力设备总厂有限公司", publishDate: "2024-10-15", downloads: 198, views: 567, size: "5.1 MB" },
  { id: 11, title: "煤矸石资源化利用技术指南", category: "技术报告", author: "吴磊", unit: "葛洲坝集团生态环保有限公司", publishDate: "2024-07-20", downloads: 367, views: 998, size: "11.4 MB" },
  { id: 12, title: "复杂地质条件下超长隧洞施工关键技术", category: "工法资料", author: "何威", unit: "中国葛洲坝集团路桥工程有限公司", publishDate: "2024-06-08", downloads: 412, views: 1089, size: "14.7 MB" },
];

export function KnowledgePage() {
  const [keyword, setKeyword] = useState("");
  const [activeCat, setActiveCat] = useState<string>("全部");

  const filtered = useMemo(() => {
    return docs.filter((d) => {
      if (activeCat !== "全部" && d.category !== activeCat) return false;
      if (keyword && !d.title.includes(keyword) && !d.author.includes(keyword)) return false;
      return true;
    });
  }, [keyword, activeCat]);

  const total = docs.length;

  return (
    <AuthenticatedPage
      sidebar={SIDEBAR}
      breadcrumb={["知识管理"]}
      columns={[]}
      rows={[]}
      rowKey={() => "0"}
    >
      <div className={styles.page}>
        <div className={styles.hero}>
          <div className={styles.heroLeft}>
            <h2 className={styles.heroTitle}>知识管理</h2>
            <p className={styles.heroDesc}>集团内部技术标准、论文、报告、最佳实践与典型案例的统一检索与共享平台。</p>
            <p className={styles.heroStats}>共收录 {total} 份技术文档，涵盖电力工程、新能源、储能、氢能、生态环保、智能建造等领域。</p>
          </div>
          <div className={styles.heroSearch}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="搜索文档标题或作者..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="button" className={styles.searchBtn}>搜索</button>
          </div>
        </div>

        <div className={styles.categories}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`${styles.catChip} ${activeCat === cat ? styles.catChipActive : ""}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.tableCard}>
          <div className={styles.tableHeader}>
            <h3>{activeCat === "全部" ? "全部文档" : activeCat}</h3>
            <span className={styles.count}>共 {filtered.length} 条</span>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: "50%" }}>文档标题</th>
                <th style={{ width: "12%" }}>分类</th>
                <th style={{ width: "12%" }}>作者</th>
                <th style={{ width: "15%" }}>发布单位</th>
                <th style={{ width: "8%" }}>大小</th>
                <th style={{ width: "8%" }}>下载 / 浏览</th>
                <th style={{ width: "9%" }}>发布日期</th>
                <th style={{ width: "10%" }}>操作</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((d) => (
                <tr key={d.id}>
                  <td className={styles.titleCell}>
                    <Link href="#" className={styles.titleLink}>{d.title}</Link>
                  </td>
                  <td><span className={styles.catPill}>{d.category}</span></td>
                  <td>{d.author}</td>
                  <td className={styles.unitCell} title={d.unit}>{d.unit}</td>
                  <td>{d.size}</td>
                  <td className={styles.numeric}>{d.downloads.toLocaleString()} / {d.views.toLocaleString()}</td>
                  <td>{d.publishDate}</td>
                  <td>
                    <Link href="#" className={styles.actionLink}>查看</Link>
                    <Link href="#" className={styles.actionLink}>下载</Link>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={8} className={styles.emptyCell}>暂无匹配文档</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AuthenticatedPage>
  );
}