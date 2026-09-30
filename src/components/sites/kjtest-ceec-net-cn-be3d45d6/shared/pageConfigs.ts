import type { SidebarItem } from "./AuthenticatedPage";

export const SIDEBAR: SidebarItem[] = [
  { label: "用户管理", children: [
    { label: "单位用户" }, { label: "个人用户" }, { label: "专家库" }, { label: "用户配置" }, { label: "角色配置" },
  ]},
  { label: "研发平台", children: [
    { label: "研发平台清单" }, { label: "研发平台登记" }, { label: "能建研发平台组建" }, { label: "能建研发平台认定" }, { label: "运行管理" }, { label: "考核管理" },
  ]},
  { label: "科技项目", children: [
    { label: "项目清单" }, { label: "选题征集" }, { label: "揭榜挂帅" }, { label: "项目立项" }, { label: "项目实施" }, { label: "项目验收" }, { label: "项目后评估" },
  ]},
  { label: "科技成果", children: [
    { label: "成果清单" }, { label: "成果鉴定" }, { label: "成果登记" }, { label: "工法管理" }, { label: "专利管理" }, { label: "成果推广目录" }, { label: "成果转化与引进" },
  ]},
  { label: "科技奖励", children: [
    { label: "奖励清单" }, { label: "奖励申报" }, { label: "奖励评选" }, { label: "外部奖励" },
  ]},
  { label: "技术标准", children: [
    { label: "技术标准清单" }, { label: "企业技术标准" }, { label: "技术标准登记" },
  ]},
  { label: "重大工程技术方案评审", children: [
    { label: "评审清单" }, { label: "评审申请" }, { label: "评审审核" }, { label: "评审组织" }, { label: "回访与评价" }, { label: "专家履职评价" }, { label: "落实情况反馈" },
  ]},
  { label: "考核管理", children: [
    { label: "考核清单" }, { label: "发布通知" }, { label: "考核报送" }, { label: "考核评价" },
  ]},
  { label: "科技统计", children: [
    { label: "集团总体情况" }, { label: "科技统计表" }, { label: "年度工作总结" },
  ]},
  { label: "协同创新" },
  { label: "知识管理" },
  { label: "个人信息" },
  { label: "系统管理", children: [
    { label: "字典管理" },
  ]},
];
