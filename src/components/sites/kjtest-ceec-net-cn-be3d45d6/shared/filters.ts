import type { FilterRow } from "./AuthenticatedPage";

export const F_PROJECT: FilterRow[] = [
  [
    { kind: "text", label: "立项年份", placeholder: "请选择立项年份" },
    { kind: "text", label: "项目名称", placeholder: "请输入项目名称" },
    { kind: "select", label: "项目等级", options: ["全部", "国家级", "省部级", "集团级", "子集团级", "子企业级"] },
    { kind: "text", label: "项目类别", placeholder: "请输入项目类别" },
  ],
  [
    { kind: "select", label: "立项机制", options: ["全部", "揭榜挂帅", "其他"] },
    { kind: "text", label: "牵头单位", placeholder: "请输入牵头单位" },
    { kind: "select", label: "项目状态", options: ["全部", "在研", "验收", "验收文档"] },
    { kind: "select", label: "项目来源", options: ["全部", "自立", "下达"] },
  ],
  [
    { kind: "radio", label: "是否产学研项目", name: "industryAcademia", options: ["全部", "是", "否"] },
    { kind: "radio", label: "是否国际合作项目", name: "international", options: ["全部", "是", "否"] },
  ],
];

export const F_PLATFORM: FilterRow[] = [[
  { kind: "text", label: "平台名称", placeholder: "请输入平台名称" },
  { kind: "select", label: "平台类别", options: ["全部", "股份公司级研发平台", "集团级研发平台", "省级工程（技术）研究中心", "子集团级研发平台", "子企业级研发平台"] },
  { kind: "text", label: "依托单位", placeholder: "请输入依托单位" },
  { kind: "select", label: "研究领域", options: ["全部", "建材", "民爆", "传统能源", "新能源及综合智慧能源", "工程建设", "数字", "建筑", "国际工程"] },
]];

export const F_USER: FilterRow[] = [[
  { kind: "text", label: "人员编号", placeholder: "请输入人员编号" },
  { kind: "text", label: "姓名", placeholder: "请输入姓名" },
  { kind: "radio", label: "能建内/外", name: "energyInternal", options: ["全部", "能建内", "能建外"] },
  { kind: "text", label: "工作单位", placeholder: "请输入工作单位" },
  { kind: "radio", label: "是否专家", name: "isExpert", options: ["全部", "是", "否"] },
  { kind: "text", label: "管理单位", placeholder: "请输入管理单位" },
  { kind: "text", label: "从事专业", placeholder: "请输入从事专业" },
]];

export const F_REWARD: FilterRow[] = [[
  { kind: "text", label: "年度", placeholder: "请选择年度" },
  { kind: "text", label: "项目名称", placeholder: "请输入项目名称" },
  { kind: "text", label: "主要完成人", placeholder: "请输入主要完成人" },
  { kind: "text", label: "主要完成单位", placeholder: "请输入主要完成单位" },
  { kind: "select", label: "获奖级别", options: ["全部", "国家级", "省部级", "股份公司级", "集团级"] },
  { kind: "select", label: "奖励种类", options: ["全部", "科技进步奖", "技术发明奖"] },
  { kind: "select", label: "获奖等级", options: ["全部", "一等奖", "二等奖", "三等奖"] },
]];

export const F_TOPIC: FilterRow[] = [[
  { kind: "text", label: "年度", placeholder: "请选择年度" },
  { kind: "text", label: "项目名称", placeholder: "请输入项目名称" },
  { kind: "text", label: "发布单位", placeholder: "请输入发布单位" },
  { kind: "text", label: "选题依据", placeholder: "请输入选题依据" },
  { kind: "text", label: "研究期限(月)", placeholder: "请输入研究期限(月)" },
  { kind: "text", label: "提出单位", placeholder: "请输入提出单位" },
  { kind: "select", label: "审核状态", options: ["全部", "待审核", "审核中", "已通过", "已退回"] },
]];

export const F_TOPIC_NOTICE: FilterRow[] = [[
  { kind: "text", label: "年度", placeholder: "请选择年度" },
  { kind: "text", label: "通知标题", placeholder: "请输入通知标题" },
  { kind: "text", label: "发布单位", placeholder: "请输入发布单位" },
  { kind: "text", label: "截止时间", placeholder: "请选择截止时间" },
  { kind: "select", label: "办结状态", options: ["全部", "未办结", "已办结"] },
  { kind: "select", label: "申报状态", options: ["全部", "未申报", "已申报"] },
]];

export const F_NOTICE: FilterRow[] = [[
  { kind: "text", label: "年度", placeholder: "请选择年度" },
  { kind: "text", label: "通知标题", placeholder: "请输入通知标题" },
  { kind: "text", label: "发布单位", placeholder: "请输入发布单位" },
  { kind: "text", label: "截止时间", placeholder: "请选择截止时间" },
  { kind: "select", label: "状态", options: ["全部", "未截止", "已截止"] },
]];

export const F_ACHIEVEMENT: FilterRow[] = [[
  { kind: "select", label: "全部", options: ["全部", "科技成果", "工法", "专利", "软著", "论文", "著作", "成果转化", "技术引进"] },
  { kind: "text", label: "成果名称", placeholder: "请输入成果名称" },
  { kind: "select", label: "成果分类", options: ["请选择", "软著", "专利", "论文"] },
  { kind: "text", label: "关键词", placeholder: "请输入关键词" },
]];

export const F_CONSTRUCTION: FilterRow[] = [[
  { kind: "text", label: "年度", placeholder: "请选择年度" },
  { kind: "text", label: "项目名称", placeholder: "请输入项目名称" },
  { kind: "text", label: "发布单位", placeholder: "请输入发布单位" },
  { kind: "select", label: "审核状态", options: ["全部", "待审核", "审核中", "已通过", "已退回"] },
]];

export const F_PATENT: FilterRow[] = [[
  { kind: "text", label: "年度", placeholder: "请选择年度" },
  { kind: "text", label: "专利名称", placeholder: "请输入专利名称" },
  { kind: "text", label: "专利号", placeholder: "请输入专利号" },
  { kind: "select", label: "专利类型", options: ["全部", "发明专利", "实用新型", "外观设计"] },
  { kind: "select", label: "审核状态", options: ["全部", "待审核", "已通过", "已退回"] },
]];

export const F_STANDARD: FilterRow[] = [[
  { kind: "text", label: "年度", placeholder: "请选择年度" },
  { kind: "text", label: "标准名称", placeholder: "请输入标准名称" },
  { kind: "select", label: "标准类型", options: ["全部", "国家标准", "行业标准", "企业标准"] },
  { kind: "select", label: "状态", options: ["全部", "编制中", "已发布", "已废止"] },
]];

export const F_ENGINEERING: FilterRow[] = [[
  { kind: "text", label: "年度", placeholder: "请选择年度" },
  { kind: "text", label: "项目名称", placeholder: "请输入项目名称" },
  { kind: "text", label: "申报单位", placeholder: "请输入申报单位" },
  { kind: "select", label: "评审状态", options: ["全部", "待评审", "评审中", "已评审"] },
]];

export const F_ASSESSMENT: FilterRow[] = [[
  { kind: "text", label: "年度", placeholder: "请选择年度" },
  { kind: "text", label: "考核名称", placeholder: "请输入考核名称" },
  { kind: "select", label: "考核类型", options: ["全部", "年度考核", "专项考核"] },
  { kind: "select", label: "状态", options: ["全部", "未开始", "进行中", "已结束"] },
]];
