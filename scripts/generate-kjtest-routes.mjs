#!/usr/bin/env node
// Generate Next.js route files for all kjtest clones
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// ============ Route manifest ============
// Each entry: [routePath, pageTitle, breadcrumb[], filterRowsCode, columnsCode, demoRowsCode, totalCount, rowKeyAccessors, sidebarActiveChild]
const MANIFEST = [
  // ===== user-mgmt =====
  ["/users", "个人用户", ["用户管理"], null, "userMgmt", "users", 79, "userId", null],
  ["/manage/orgManage/org", "单位用户", ["用户管理"], null, "orgUnit", "orgUnits", 38, "unitId", null],
  ["/manage/orgManage/expert/expertQuery", "专家库", ["用户管理"], null, "expert", "experts", 0, "expertId", null],
  ["/manage/systemManage/user", "用户配置", ["用户管理"], null, "userConfig", "userConfigs", 0, "userId", null],
  ["/manage/systemManage/role", "角色配置", ["用户管理"], null, "roleConfig", "roleConfigs", 0, "roleId", null],

  // ===== research platform =====
  ["/platforms", "研发平台清单", ["研发平台"], "platform", "platformList", "platforms", 12, "id", null],
  ["/manage/RDPlatform/platformRegistration/list", "研发平台登记", ["研发平台"], "platform", "platformList", "platformsReg", 0, "id", null],
  ["/manage/RDPlatform/groupFormation/list", "能建研发平台组建", ["研发平台"], "platform", "platformList", "platformsGroup", 0, "id", null],
  ["/manage/RDPlatform/platformCognizance/platformVerificationQuery", "认定记录", ["研发平台", "能建研发平台认定"], "platform", "platformList", "platformsCogRecord", 0, "id", null],
  ["/manage/RDPlatform/platformCognizance/platformVerificationNotic", "发布通知", ["研发平台", "能建研发平台认定"], "notice", "noticeTable", "platformNotice", 0, "id", null],
  ["/manage/RDPlatform/platformCognizance/platformVerification", "认定申报", ["研发平台", "能建研发平台认定"], "platform", "platformList", "platformsCogApply", 0, "id", null],
  ["/manage/RDPlatform/platformCognizance/platformVerificationInspect", "认定审核", ["研发平台", "能建研发平台认定"], "platform", "platformList", "platformsCogReview", 0, "id", null],
  ["/manage/RDPlatform/platformManagement/list", "运行管理", ["研发平台"], "platform", "platformList", "platformsOps", 0, "id", null],
  ["/manage/RDPlatform/assessmentManagement/list", "考核管理", ["研发平台"], "platform", "platformList", "platformsAssess", 0, "id", null],

  // ===== technology project =====
  ["/projects", "项目清单", ["科技项目"], "project", "projectList", "projects", 79, "id", null],
  ["/manage/technologyProject/collectTopics/collectTopicsSearch", "选题申报记录", ["科技项目", "选题征集"], "topics", "topicSearch", "topicSearch", 0, "id", null],
  ["/manage/technologyProject/collectTopics/collectTopicsManage", "发布通知", ["科技项目", "选题征集"], "topicNotice", "topicNoticeTable", "topicNotice", 0, "id", null],
  ["/manage/technologyProject/collectTopics/collectTopicsSB", "选题申报", ["科技项目", "选题征集"], "topicNotice", "topicNoticeTable", "topicSb", 0, "id", null],
  ["/manage/technologyProject/collectTopics/collectTopicsSH", "选题审核", ["科技项目", "选题征集"], "topics", "topicSearch", "topicSh", 0, "id", null],
  ["/manage/technologyProject/projectApplication/projectAppliSearch", "项目申报记录", ["科技项目", "揭榜挂帅"], "project", "projectList", "appRecords", 0, "id", null],
  ["/manage/technologyProject/projectApplication/projectAppliInform", "发布通知", ["科技项目", "揭榜挂帅"], "topicNotice", "topicNoticeTable", "appNotice", 0, "id", null],
  ["/manage/technologyProject/projectApplication/projectApplication", "项目申报", ["科技项目", "揭榜挂帅"], "project", "projectList", "appApply", 0, "id", null],
  ["/manage/technologyProject/projectApplication/projectAppliInvestigate", "项目审核", ["科技项目", "揭榜挂帅"], "project", "projectList", "appReview", 0, "id", null],
  ["/manage/technologyProject/projectApplication/specialistTriage", "推送专家会审", ["科技项目", "揭榜挂帅"], "project", "projectList", "appTriage", 0, "id", null],
  ["/manage/technologyProject/projectApplication/expertReview", "专家会审", ["科技项目", "揭榜挂帅"], "project", "projectList", "appExpert", 0, "id", null],
  ["/manage/technologyProject/projectApplication/appraisalResult", "评审结果", ["科技项目", "揭榜挂帅"], "project", "projectList", "appResult", 0, "id", null],
  ["/manage/technologyProject/projectEstablish/projectInitiationQuery", "项目立项记录", ["科技项目", "项目立项"], "project", "projectList", "estRecords", 0, "id", null],
  ["/manage/technologyProject/projectEstablish/projectEstablishNotic", "发布通知", ["科技项目", "项目立项"], "topicNotice", "topicNoticeTable", "estNotice", 0, "id", null],
  ["/manage/technologyProject/projectEstablish/projectAssignedPreparer", "指派项目填报人", ["科技项目", "项目立项"], "project", "projectList", "estAssigned", 0, "id", null],
  ["/manage/technologyProject/projectEstablish/projectEstablish", "立项填报", ["科技项目", "项目立项"], "project", "projectList", "estApply", 0, "id", null],
  ["/manage/technologyProject/projectEstablish/projectEstablishInspect", "立项审核", ["科技项目", "项目立项"], "project", "projectList", "estReview", 0, "id", null],
  ["/manage/technologyProject/projectOngoing/projectOngoing", "项目实施", ["科技项目"], "project", "projectList", "ongoing", 0, "id", null],
  ["/manage/technologyProject/projectAcceptance/projectAcceptance", "项目验收", ["科技项目"], "project", "projectList", "acceptance", 0, "id", null],
  ["/manage/technologyProject/projectAppraisal/projectAppraisal", "项目后评估", ["科技项目"], "project", "projectList", "appraisal", 0, "id", null],

  // ===== achievements =====
  ["/manage/achievement/achievementList/achievementList", "成果清单", ["科技成果"], "achievement", "achievementList", "achievements", 138, "id", null],
  ["/manage/achievement/identify/identifySearch", "成果鉴定记录", ["科技成果", "成果鉴定"], "topics", "topicSearch", "achIdRecords", 0, "id", null],
  ["/manage/achievement/identify/identifyAppliy", "成果鉴定申请", ["科技成果", "成果鉴定"], "topics", "topicSearch", "achIdApply", 0, "id", null],
  ["/manage/achievement/identify/identifyAudit", "成果鉴定审核", ["科技成果", "成果鉴定"], "topics", "topicSearch", "achIdAudit", 0, "id", null],
  ["/manage/achievement/achievementRegist/achievementRegist", "成果登记", ["科技成果"], "achievement", "achievementList", "achRegist", 0, "id", null],
  ["/manage/achievement/constructionManagement/constructionList", "工法清单", ["科技成果", "工法管理"], "construction", "constructionList", "construction", 0, "id", null],
  ["/manage/achievement/constructionManagement/declarationNotice", "发布通知", ["科技成果", "工法管理"], "construction", "constructionList", "conNotice", 0, "id", null],
  ["/manage/achievement/constructionManagement/constructionDeclaration", "工法申报", ["科技成果", "工法管理"], "construction", "constructionList", "conApply", 0, "id", null],
  ["/manage/achievement/constructionManagement/constructionAudit", "工法审核", ["科技成果", "工法管理"], "construction", "constructionList", "conAudit", 0, "id", null],
  ["/manage/achievement/constructionManagement/formalitiesReview", "形式审查", ["科技成果", "工法管理"], "construction", "constructionList", "conFormal", 0, "id", null],
  ["/manage/achievement/constructionManagement/pushExpertReview", "推送专家评审", ["科技成果", "工法管理"], "construction", "constructionList", "conPushExpert", 0, "id", null],
  ["/manage/achievement/constructionManagement/expertReview", "专家评审", ["科技成果", "工法管理"], "construction", "constructionList", "conExpert", 0, "id", null],
  ["/manage/achievement/constructionManagement/constructionPerfect", "工法完善", ["科技成果", "工法管理"], "construction", "constructionList", "conPerfect", 0, "id", null],
  ["/manage/achievement/constructionManagement/constructionRelease", "工法发布", ["科技成果", "工法管理"], "construction", "constructionList", "conRelease", 0, "id", null],
  ["/manage/achievement/patenManagement/patentsList", "专利清单", ["科技成果", "专利管理"], "patents", "patentsTable", "patents", 0, "id", null],
  ["/manage/achievement/patenManagement/patentFiling", "专利申报", ["科技成果", "专利管理"], "patents", "patentsTable", "patentFiling", 0, "id", null],
  ["/manage/achievement/patenManagement/patentReview", "专利审核", ["科技成果", "专利管理"], "patents", "patentsTable", "patentReview", 0, "id", null],
  ["/manage/achievement/promotion-catalog/index", "成果推广目录", ["科技成果"], "achievement", "achievementList", "achPromotion", 0, "id", null],
  ["/manage/achievement/transform-import/index", "成果转化与引进", ["科技成果"], "achievement", "achievementList", "achTransform", 0, "id", null],

  // ===== rewards =====
  ["/rewards", "奖励清单", ["科技奖励"], "reward", "rewardList", "rewards", 138, "id", null],
  ["/manage/reward/declare/list", "申报记录", ["科技奖励", "奖励申报"], "reward", "rewardList", "rwRecords", 0, "id", null],
  ["/manage/reward/notice/overview", "发布通知", ["科技奖励", "奖励申报"], "topicNotice", "topicNoticeTable", "rwNotice", 0, "id", null],
  ["/manage/reward/declare/myList", "奖励申报", ["科技奖励", "奖励申报"], "reward", "rewardList", "rwDeclare", 0, "id", null],
  ["/manage/reward/audit/tbdwsh", "奖励推荐", ["科技奖励", "奖励申报"], "reward", "rewardList", "rwRecommend", 0, "id", null],
  ["/manage/reward/audit/formExam", "形式审查", ["科技奖励", "奖励评选"], "reward", "rewardList", "rwFormal", 0, "id", null],
  ["/manage/reward/expertPush/rewardPushQuery", "推送专家网评", ["科技奖励", "奖励评选"], "reward", "rewardList", "rwPushExpert", 0, "id", null],
  ["/manage/reward/expertScore/expertScoreQuery", "专家网评", ["科技奖励", "奖励评选"], "reward", "rewardList", "rwExpertScore", 0, "id", null],
  ["/manage/reward/meetingAudit/orgnizeAudit/list", "组织专家会审", ["科技奖励", "奖励评选"], "reward", "rewardList", "rwOrgAudit", 0, "id", null],
  ["/manage/reward/meetingAudit/expertAudit/list", "专家会审", ["科技奖励", "奖励评选"], "reward", "rewardList", "rwMeetingAudit", 0, "id", null],
  ["/manage/reward/recommendResult/resultQuery", "评审结果", ["科技奖励", "奖励评选"], "reward", "rewardList", "rwResult", 0, "id", null],
  ["/manage/reward/notice/show", "奖励公示", ["科技奖励", "奖励评选"], "topicNotice", "topicNoticeTable", "rwPublic", 0, "id", null],
  ["/manage/techRewards/externalRewards/externalRewardsQuery/list", "申报记录", ["科技奖励", "外部奖励"], "reward", "rewardList", "extRecords", 0, "id", null],
  ["/manage/techRewards/externalRewards/externalRewardsNotic/list", "发布通知", ["科技奖励", "外部奖励"], "topicNotice", "topicNoticeTable", "extNotice", 0, "id", null],
  ["/manage/techRewards/externalRewards/externalRewardsDeclaration/list", "奖励申报", ["科技奖励", "外部奖励"], "reward", "rewardList", "extDeclare", 0, "id", null],
  ["/manage/techRewards/externalRewards/externalRewardsReview/list", "奖励审核", ["科技奖励", "外部奖励"], "reward", "rewardList", "extReview", 0, "id", null],
  ["/manage/techRewards/externalRewards/externalRewardsRegistration/list", "外部奖励登记", ["科技奖励", "外部奖励"], "reward", "rewardList", "extRegist", 0, "id", null],

  // ===== standards =====
  ["/manage/technicalStandard/listOfTechnicalStandards/index", "技术标准清单", ["技术标准"], "standard", "standardList", "standards", 0, "id", null],
  ["/manage/technicalStandard/enterpriseTechnicalStandards/EnterpriseStandardRecord", "企业标准记录", ["技术标准", "企业技术标准"], "standard", "standardList", "entStdRecords", 0, "id", null],
  ["/manage/technicalStandard/enterpriseTechnicalStandards/projectApplication/projectAppliInform", "发布申报通知", ["技术标准", "企业技术标准"], "topicNotice", "topicNoticeTable", "entStdAppNotice", 0, "id", null],
  ["/manage/technicalStandard/enterpriseTechnicalStandards/projectApplication/StandardProjectApplication", "标准项目申报", ["技术标准", "企业技术标准"], "standard", "standardList", "entStdApp", 0, "id", null],
  ["/manage/technicalStandard/enterpriseTechnicalStandards/projectApplication/StandardProjectAppliAudit", "标准项目审核", ["技术标准", "企业技术标准"], "standard", "standardList", "entStdAppAudit", 0, "id", null],
  ["/manage/technicalStandard/enterpriseTechnicalStandards/projectEstablish/projectEstablishNotic", "发布立项通知", ["技术标准", "企业技术标准"], "topicNotice", "topicNoticeTable", "entStdEstNotice", 0, "id", null],
  ["/manage/technicalStandard/enterpriseTechnicalStandards/projectEstablish/StandardProjectEstablish", "标准立项", ["技术标准", "企业技术标准"], "standard", "standardList", "entStdEst", 0, "id", null],
  ["/manage/technicalStandard/enterpriseTechnicalStandards/projectEstablish/Standardzubereitung", "标准编制", ["技术标准", "企业技术标准"], "standard", "standardList", "entStdDraft", 0, "id", null],
  ["/manage/technicalStandard/enterpriseTechnicalStandards/ReviewNotice", "通知清单", ["技术标准", "企业技术标准"], "topicNotice", "topicNoticeTable", "entStdReview", 0, "id", null],
  ["/manage/technicalStandard/enterpriseTechnicalStandards/standardRelease", "标准发布", ["技术标准", "企业技术标准"], "standard", "standardList", "entStdRelease", 0, "id", null],
  ["/manage/technicalStandard/RegistrierungTechnischerNormen/organization/Zubereitungsnormen", "参与编制标准", ["技术标准", "技术标准登记"], "standard", "standardList", "stdOrgDraft", 0, "id", null],
  ["/manage/technicalStandard/RegistrierungTechnischerNormen/application/Anwendungsnormen", "业务相关标准", ["技术标准", "技术标准登记"], "standard", "standardList", "stdApp", 0, "id", null],

  // ===== engineering review =====
  ["/manage/engineeringTechnology/engineeringOverview", "评审清单", ["重大工程技术方案评审"], "engineering", "engineeringTable", "engOverview", 0, "id", null],
  ["/manage/engineeringTechnology/engineeringApply", "评审申请", ["重大工程技术方案评审"], "engineering", "engineeringTable", "engApply", 0, "id", null],
  ["/manage/engineeringTechnology/engineeringAudit", "评审审核", ["重大工程技术方案评审"], "engineering", "engineeringTable", "engAudit", 0, "id", null],
  ["/manage/engineeringTechnology/engineeringOrganization", "评审组织", ["重大工程技术方案评审"], "engineering", "engineeringTable", "engOrg", 0, "id", null],
  ["/manage/engineeringTechnology/returnEvaluate", "回访与评价", ["重大工程技术方案评审"], "engineering", "engineeringTable", "engReturn", 0, "id", null],
  ["/manage/engineeringTechnology/evaluateStatistics", "专家履职评价", ["重大工程技术方案评审"], "engineering", "engineeringTable", "engEval", 0, "id", null],
  ["/manage/engineeringTechnology/Casereturn", "落实情况反馈", ["重大工程技术方案评审"], "engineering", "engineeringTable", "engCasereturn", 0, "id", null],

  // ===== assessment =====
  ["/manage/assessmentManagement/assessmentOverView", "考核清单", ["考核管理"], "assessment", "assessmentTable", "assessOverview", 0, "id", null],
  ["/manage/assessmentManagement/assessmentIssue", "发布通知", ["考核管理"], "topicNotice", "topicNoticeTable", "assessIssue", 0, "id", null],
  ["/manage/assessmentManagement/assessmentSubmission", "考核报送", ["考核管理"], "assessment", "assessmentTable", "assessSubmit", 0, "id", null],
  ["/manage/assessmentManagement/assessmentEvaluateAll", "考核评价", ["考核管理"], "assessment", "assessmentTable", "assessEval", 0, "id", null],

  // ===== statistics =====
  ["/manage/technologyStatistics/technologyStatistics", "集团总体情况", ["科技统计"], null, "statsOverview", "statsOverview", 0, "id", null],
  ["/manage/dataFilling/technologyStatistics", "科技统计表", ["科技统计"], "assessment", "assessmentTable", "statsFill", 0, "id", null],
  ["/manage/dataFilling/annualWork", "年度工作总结", ["科技统计"], "assessment", "assessmentTable", "annualWork", 0, "id", null],

  // ===== single pages =====
  ["/manage/collaborativeInnovation/collaborativeInnovation", "协同创新", ["协同创新"], null, "collab", "collab", 0, "id", null],
  ["/manage/knowledgeManagement/knowledgeManagement", "知识管理", ["知识管理"], null, "knowledge", "knowledge", 0, "id", null],
  ["/manage/orgManage/myself/myself", "个人信息", ["个人信息"], null, "myself", "myself", 0, "id", null],
  ["/manage/systemManage/dictionary/dictionaryQuery", "字典管理", ["系统管理"], null, "dict", "dict", 0, "id", null],
];

console.log(`Generating ${MANIFEST.length} route files...`);

for (const [routePath, title] of MANIFEST) {
  // Path is like /foo/bar → src/app/foo/bar/page.tsx
  // App router escapes: @ -> %40, _ prefix -> %5F, (), [] -> encoded
  const segments = routePath.split("/").filter(Boolean).map(s => {
    let r = s;
    if (r.startsWith("@")) r = "%40" + r.slice(1);
    if (r.startsWith("_")) r = "%5F" + r.slice(1);
    r = r.replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\[/g, "%5B").replace(/\]/g, "%5D");
    return r;
  });
  const dir = join(ROOT, "src", "app", ...segments);
  mkdirSync(dir, { recursive: true });
  const file = join(dir, "page.tsx");
  const content = `import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
};

export default function Page() {
  return <KjtestPage route=${JSON.stringify(routePath)} />;
}
`;
  writeFileSync(file, content, "utf8");
}

console.log(`Done. Wrote ${MANIFEST.length} page.tsx files.`);
