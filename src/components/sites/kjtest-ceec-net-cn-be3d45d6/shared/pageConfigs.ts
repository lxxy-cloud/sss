import type { SidebarItem } from "./AuthenticatedPage";

// Complete sidebar menu tree with real route hrefs
export const SIDEBAR: SidebarItem[] = [
  { label: "用户管理", defaultOpen: true, children: [
    { label: "单位用户", href: "/manage/orgManage/org" },
    { label: "个人用户", href: "/users" },
    { label: "专家库", href: "/manage/orgManage/expert/expertQuery" },
    { label: "用户配置", href: "/manage/systemManage/user" },
    { label: "角色配置", href: "/manage/systemManage/role" },
  ]},
  { label: "研发平台", defaultOpen: true, children: [
    { label: "研发平台清单", href: "/platforms" },
    { label: "研发平台登记", href: "/manage/RDPlatform/platformRegistration/list" },
    { label: "能建研发平台组建", href: "/manage/RDPlatform/groupFormation/list" },
    { label: "能建研发平台认定", href: "/manage/RDPlatform/platformCognizance/platformVerification" },
    { label: "运行管理", href: "/manage/RDPlatform/platformManagement/list" },
    { label: "考核管理", href: "/manage/RDPlatform/assessmentManagement/list" },
  ]},
  { label: "科技项目", defaultOpen: true, children: [
    { label: "项目清单", href: "/projects" },
    { label: "选题征集", href: "/manage/technologyProject/collectTopics/collectTopicsSB" },
    { label: "揭榜挂帅", href: "/manage/technologyProject/projectApplication/projectApplication" },
    { label: "项目立项", href: "/manage/technologyProject/projectEstablish/projectEstablish" },
    { label: "项目实施", href: "/manage/technologyProject/projectOngoing/projectOngoing" },
    { label: "项目验收", href: "/manage/technologyProject/projectAcceptance/projectAcceptance" },
    { label: "项目后评估", href: "/manage/technologyProject/projectAppraisal/projectAppraisal" },
  ]},
  { label: "科技成果", defaultOpen: true, children: [
    { label: "成果清单", href: "/manage/achievement/achievementList/achievementList" },
    { label: "成果鉴定", href: "/manage/achievement/identify/identifyAppliy" },
    { label: "成果登记", href: "/manage/achievement/achievementRegist/achievementRegist" },
    { label: "工法管理", href: "/manage/achievement/constructionManagement/constructionList" },
    { label: "专利管理", href: "/manage/achievement/patenManagement/patentsList" },
    { label: "成果推广目录", href: "/manage/achievement/promotion-catalog/index" },
    { label: "成果转化与引进", href: "/manage/achievement/transform-import/index" },
  ]},
  { label: "科技奖励", defaultOpen: true, children: [
    { label: "奖励清单", href: "/rewards" },
    { label: "奖励申报", href: "/manage/reward/declare/myList" },
    { label: "奖励评选", href: "/manage/reward/audit/formExam" },
    { label: "外部奖励", href: "/manage/techRewards/externalRewards/externalRewardsDeclaration/list" },
  ]},
  { label: "技术标准", defaultOpen: true, children: [
    { label: "技术标准清单", href: "/manage/technicalStandard/listOfTechnicalStandards/index" },
    { label: "企业技术标准", href: "/manage/technicalStandard/enterpriseTechnicalStandards/EnterpriseStandardRecord" },
    { label: "技术标准登记", href: "/manage/technicalStandard/RegistrierungTechnischerNormen/application/Anwendungsnormen" },
  ]},
  { label: "重大工程技术方案评审", defaultOpen: true, children: [
    { label: "评审清单", href: "/manage/engineeringTechnology/engineeringOverview" },
    { label: "评审申请", href: "/manage/engineeringTechnology/engineeringApply" },
    { label: "评审审核", href: "/manage/engineeringTechnology/engineeringAudit" },
    { label: "评审组织", href: "/manage/engineeringTechnology/engineeringOrganization" },
    { label: "回访与评价", href: "/manage/engineeringTechnology/returnEvaluate" },
    { label: "专家履职评价", href: "/manage/engineeringTechnology/evaluateStatistics" },
    { label: "落实情况反馈", href: "/manage/engineeringTechnology/Casereturn" },
  ]},
  { label: "考核管理", defaultOpen: true, children: [
    { label: "考核清单", href: "/manage/assessmentManagement/assessmentOverView" },
    { label: "发布通知", href: "/manage/assessmentManagement/assessmentIssue" },
    { label: "考核报送", href: "/manage/assessmentManagement/assessmentSubmission" },
    { label: "考核评价", href: "/manage/assessmentManagement/assessmentEvaluateAll" },
  ]},
  { label: "科技统计", defaultOpen: true, children: [
    { label: "集团总体情况", href: "/manage/technologyStatistics/technologyStatistics" },
    { label: "科技统计表", href: "/manage/dataFilling/technologyStatistics" },
    { label: "年度工作总结", href: "/manage/dataFilling/annualWork" },
  ]},
  { label: "协同创新", href: "/manage/collaborativeInnovation/collaborativeInnovation" },
  { label: "知识管理", href: "/manage/knowledgeManagement/knowledgeManagement" },
  { label: "个人信息", href: "/manage/orgManage/myself/myself" },
  { label: "系统管理", defaultOpen: true, children: [
    { label: "字典管理", href: "/manage/systemManage/dictionary/dictionaryQuery" },
  ]},
];
