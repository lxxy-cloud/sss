"use client";

import { useMemo, useState } from "react";

import { AuthenticatedPage } from "./AuthenticatedPage";
import { SIDEBAR } from "./pageConfigs";
import styles from "./AchievementListPage.module.css";

type Doc = {
  id: number;
  name: string;
  category: string;
  description: string;
  unit: string;
  lead: string;
  date: string;
  size: string;
};

const CATEGORIES = ["全部", "科技成果", "工法", "专利", "软著", "论文", "著作", "成果转化", "技术引进"] as const;

const docs: Doc[] = [
  { id: 1, name: "特高压输电工程电磁暂态建模关键技术", category: "科技成果", description: "建立了完整的特高压交流输电系统电磁暂态仿真模型，提出了换流阀、换流变压器等核心设备的精确建模方法，已应用于多项实际工程。", unit: "中国电力工程顾问集团有限公司", lead: "张炳成", date: "2024-12-08", size: "32 页" },
  { id: 2, name: "煤矸石制备无机纤维关键技术和装备", category: "科技成果", description: "研发了煤矸石高温熔融离心成纤工艺与成套装备，实现了固废资源化高值利用，达到国际先进水平。", unit: "中能建绿色建材有限公司", lead: "蒋洋", date: "2024-11-22", size: "28 页" },
  { id: 3, name: "智慧工地综合展示平台软件", category: "软著", description: "基于物联网和移动互联网技术，提供环境监测、劳务实名制管理、物料管理、巡检记录、设备管理、流程审批等一体化解决方案。", unit: "中能建数字科技集团有限公司", lead: "万明忠", date: "2024-09-18", size: "18 页" },
  { id: 4, name: "水电工程高塔柱智能建造技术体系", category: "工法", description: "形成了包含液压自爬模、智能缆索吊、混凝土温控等的完整施工工法体系，已在多个大型水电站应用。", unit: "中国葛洲坝集团股份有限公司", lead: "刘雄", date: "2024-08-30", size: "26 页" },
  { id: 5, name: "阵列式多吊点稳固吊装柔性大型管屏技术", category: "工法", description: "针对大型电站锅炉受热面吊装研发的创新工法，解决了传统方法效率低、安全风险高的难题。", unit: "中国能源建设集团山西电力建设有限公司", lead: "吴凯", date: "2024-07-12", size: "15 页" },
  { id: 6, name: "一种基于深度学习的输电线路覆冰检测方法", category: "专利", description: "提出了一种结合图像识别与气象数据的输电线路覆冰自动检测方法，检测准确率达到 95% 以上。", unit: "中国电力工程顾问集团中南电力设计院有限公司", lead: "胡星", date: "2024-10-25", size: "12 页" },
  { id: 7, name: "新能源场站智能运维管理平台", category: "专利", description: "提供新能源场站设备状态监测、故障预警、能效优化的一体化平台，支持光伏、风电、储能等多种设备类型。", unit: "中能建数字科技集团有限公司", lead: "万明忠", date: "2024-09-08", size: "24 页" },
  { id: 8, name: "复杂地质条件下超长隧洞 TBM 适应性研究", category: "论文", description: "系统研究了 TBM 在断层破碎带、高地应力、突涌水等复杂地质条件下的适应性问题，提出针对性方案。", unit: "中国葛洲坝集团股份有限公司", lead: "刘雄", date: "2024-06-15", size: "8 页" },
  { id: 9, name: "新型电力系统构建路径与关键技术综述", category: "论文", description: "系统梳理了新型电力系统的内涵、构建路径与关键技术体系，为集团战略规划提供参考。", unit: "电力规划总院有限公司", lead: "杜忠明", date: "2024-04-30", size: "16 页" },
  { id: 10, name: "中国能源建设集团科技发展战略研究", category: "著作", description: "系统总结集团科技发展现状，提出未来 5-10 年的科技发展方向、目标与重点任务。", unit: "中国能源建设集团有限公司", lead: "集团科技委", date: "2024-03-20", size: "218 页" },
  { id: 11, name: "氢能制备与储运关键技术示范工程", category: "成果转化", description: "建成 100 Nm³/h 碱性电解水制氢示范装置，完成高压气态与液态储氢技术验证。", unit: "中能建氢能源有限公司", lead: "李京光", date: "2024-10-12", size: "项目" },
  { id: 12, name: "BIM 技术在大型水利枢纽施工中的集成应用", category: "技术引进", description: "引进、消化、吸收国际先进的 BIM 协同管理平台，并结合国内水电工程实际进行二次开发与本土化适配。", unit: "中国葛洲坝集团市政工程有限公司", lead: "周佳奇", date: "2024-05-22", size: "技术" },
];

export function AchievementListPage() {
  const [keyword, setKeyword] = useState("");
  const [activeCat, setActiveCat] = useState<string>("全部");

  const filtered = useMemo(() => {
    return docs.filter((d) => {
      if (activeCat !== "全部" && d.category !== activeCat) return false;
      if (keyword && !d.name.includes(keyword) && !d.unit.includes(keyword) && !d.lead.includes(keyword)) return false;
      return true;
    });
  }, [keyword, activeCat]);

  const catCount = (cat: string) => cat === "全部" ? docs.length : docs.filter((d) => d.category === cat).length;

  return (
    <AuthenticatedPage
      sidebar={SIDEBAR}
      breadcrumb={["科技成果", "成果清单"]}
      columns={[]}
      rows={[]}
      rowKey={() => "0"}
    >
      <div className={styles.page}>
        <div className={styles.topFilter}>
          <div className={styles.tabs}>
            <span className={styles.tabsLabel}>成果类别</span>
            <div className={styles.chips}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`${styles.chip} ${activeCat === cat ? styles.chipActive : ""}`}
                  onClick={() => setActiveCat(cat)}
                >
                  {cat}
                  <span className={styles.chipCount}>{catCount(cat)}</span>
                </button>
              ))}
            </div>
          </div>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="搜索成果名称 / 负责人 / 单位"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className={styles.searchInput}
            />
            <button type="button" className={styles.searchBtn}>搜索</button>
          </div>
        </div>

        <div className={styles.cardsHeader}>
          <h3>{activeCat === "全部" ? "全部成果" : activeCat}</h3>
          <span>共 {filtered.length} 项</span>
        </div>

        <div className={styles.cards}>
          {filtered.map((d) => (
            <article key={d.id} className={styles.card}>
              <header className={styles.cardHeader}>
                <span className={styles.catPill}>{d.category}</span>
                <span className={styles.cardDate}>{d.date}</span>
              </header>
              <h4 className={styles.cardTitle}>{d.name}</h4>
              <p className={styles.cardDesc}>{d.description}</p>
              <footer className={styles.cardFooter}>
                <div className={styles.cardMeta}>
                  <span><strong>承担单位：</strong>{d.unit}</span>
                  <span><strong>负责人：</strong>{d.lead}</span>
                </div>
                <div className={styles.cardActions}>
                  <button type="button" className={styles.viewBtn}>查看</button>
                  <button type="button" className={styles.dlBtn}>下载</button>
                </div>
              </footer>
            </article>
          ))}
          {filtered.length === 0 && <div className={styles.empty}>暂无匹配成果</div>}
        </div>
      </div>
    </AuthenticatedPage>
  );
}