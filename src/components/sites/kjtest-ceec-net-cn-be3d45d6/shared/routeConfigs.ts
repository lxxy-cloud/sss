import type { ColumnDef } from "./AuthenticatedPage";
import type { FilterRow } from "./AuthenticatedPage";
import type { Row } from "./types";
import {
  PROJECT_COLUMNS, PLATFORM_COLUMNS, USER_COLUMNS, REWARD_COLUMNS,
  ACHIEVEMENT_COLUMNS, TOPIC_COLUMNS, TOPIC_NOTICE_COLUMNS, CONSTRUCTION_COLUMNS,
  PATENT_COLUMNS, STANDARD_COLUMNS, ENGINEERING_COLUMNS, ASSESSMENT_COLUMNS,
} from "./columns";
import {
  F_PROJECT, F_PLATFORM, F_USER, F_REWARD, F_TOPIC, F_TOPIC_NOTICE, F_NOTICE,
  F_ACHIEVEMENT, F_CONSTRUCTION, F_PATENT, F_STANDARD, F_ENGINEERING, F_ASSESSMENT,
} from "./filters";

export type RouteCfg = {
  columns: ColumnDef<Row>[];
  filterRows?: FilterRow[];
  rowsKey: string;
  totalCount?: number;
  breadcrumb?: string[];
  tabs?: Array<{
    key: string;
    label: string;
    rowsKey?: string;
    filterRows?: FilterRow[];
    columns?: ColumnDef<Row>[];
    totalCount?: number;
  }>;
  defaultTab?: string;
  toolbar?: Array<{ label: string; primary?: boolean }>;
  detailRouteBase?: string;
};

export const ROUTE_CFGS: Record<string, RouteCfg> = {
  "/users": { detailRouteBase: "/users", columns: USER_COLUMNS, filterRows: F_USER, rowsKey: "users", totalCount: 79, toolbar: [
    { label: "新增能建内科技人员", primary: true }, { label: "新增能建外科技人员" }, { label: "导出清单" },
  ] },
  "/manage/orgManage/org": { columns: USER_COLUMNS, filterRows: F_USER, rowsKey: "orgUnits", totalCount: 38 },
  "/manage/orgManage/expert/expertQuery": { columns: USER_COLUMNS, filterRows: F_USER, rowsKey: "experts" },
  "/manage/systemManage/user": { columns: USER_COLUMNS, filterRows: F_USER, rowsKey: "userConfigs" },
  "/manage/systemManage/role": { columns: USER_COLUMNS, filterRows: F_USER, rowsKey: "roleConfigs" },
  "/platforms": { detailRouteBase: "/platforms", columns: PLATFORM_COLUMNS, filterRows: F_PLATFORM, rowsKey: "platforms", totalCount: 12 },
  "/manage/RDPlatform/platformRegistration/list": { columns: PLATFORM_COLUMNS, filterRows: F_PLATFORM, rowsKey: "platformsReg" },
  "/manage/RDPlatform/groupFormation/list": { columns: PLATFORM_COLUMNS, filterRows: F_PLATFORM, rowsKey: "platformsGroup" },
  "/manage/RDPlatform/platformCognizance/platformVerificationQuery": { columns: PLATFORM_COLUMNS, filterRows: F_PLATFORM, rowsKey: "platformsCogRecord" },
  "/manage/RDPlatform/platformCognizance/platformVerificationNotic": { columns: TOPIC_NOTICE_COLUMNS, filterRows: F_NOTICE, rowsKey: "platformNotice" },
  "/manage/RDPlatform/platformCognizance/platformVerification": { columns: PLATFORM_COLUMNS, filterRows: F_PLATFORM, rowsKey: "platformsCogApply" },
  "/manage/RDPlatform/platformCognizance/platformVerificationInspect": { columns: PLATFORM_COLUMNS, filterRows: F_PLATFORM, rowsKey: "platformsCogReview" },
  "/manage/RDPlatform/platformManagement/list": { columns: PLATFORM_COLUMNS, filterRows: F_PLATFORM, rowsKey: "platformsOps" },
  "/manage/RDPlatform/assessmentManagement/list": { columns: PLATFORM_COLUMNS, filterRows: F_PLATFORM, rowsKey: "platformsAssess" },
  "/projects": { detailRouteBase: "/projects", columns: PROJECT_COLUMNS, filterRows: F_PROJECT, rowsKey: "projects", totalCount: 79 },
  "/manage/technologyProject/collectTopics/collectTopicsSearch": { columns: TOPIC_COLUMNS, filterRows: F_TOPIC, rowsKey: "topicSearch" },
  "/manage/technologyProject/collectTopics/collectTopicsManage": { columns: TOPIC_NOTICE_COLUMNS, filterRows: F_TOPIC_NOTICE, rowsKey: "topicNotice" },
  "/manage/technologyProject/collectTopics/collectTopicsSB": { columns: TOPIC_NOTICE_COLUMNS, filterRows: F_TOPIC_NOTICE, rowsKey: "topicSb", defaultTab: "notice", tabs: [
    { key: "notice", label: "选题征集通知", rowsKey: "topicNotice" },
    { key: "mine", label: "我的申报", rowsKey: "topicSb" },
  ] },
  "/manage/technologyProject/collectTopics/collectTopicsSH": { columns: TOPIC_COLUMNS, filterRows: F_TOPIC, rowsKey: "topicSh" },
  "/manage/technologyProject/projectApplication/projectAppliSearch": { columns: PROJECT_COLUMNS, filterRows: F_PROJECT, rowsKey: "appRecords" },
  "/manage/technologyProject/projectApplication/projectAppliInform": { columns: TOPIC_NOTICE_COLUMNS, filterRows: F_TOPIC_NOTICE, rowsKey: "appNotice" },
  "/manage/technologyProject/projectApplication/projectApplication": { columns: PROJECT_COLUMNS, filterRows: F_PROJECT, rowsKey: "appApply" },
  "/manage/technologyProject/projectApplication/projectAppliInvestigate": { columns: PROJECT_COLUMNS, filterRows: F_PROJECT, rowsKey: "appReview" },
  "/manage/technologyProject/projectApplication/specialistTriage": { columns: PROJECT_COLUMNS, filterRows: F_PROJECT, rowsKey: "appTriage" },
  "/manage/technologyProject/projectApplication/expertReview": { columns: PROJECT_COLUMNS, filterRows: F_PROJECT, rowsKey: "appExpert" },
  "/manage/technologyProject/projectApplication/appraisalResult": { columns: PROJECT_COLUMNS, filterRows: F_PROJECT, rowsKey: "appResult" },
  "/manage/technologyProject/projectEstablish/projectInitiationQuery": { columns: PROJECT_COLUMNS, filterRows: F_PROJECT, rowsKey: "estRecords" },
  "/manage/technologyProject/projectEstablish/projectEstablishNotic": { columns: TOPIC_NOTICE_COLUMNS, filterRows: F_TOPIC_NOTICE, rowsKey: "estNotice" },
  "/manage/technologyProject/projectEstablish/projectAssignedPreparer": { columns: PROJECT_COLUMNS, filterRows: F_PROJECT, rowsKey: "estAssigned" },
  "/manage/technologyProject/projectEstablish/projectEstablish": { columns: PROJECT_COLUMNS, filterRows: F_PROJECT, rowsKey: "estApply" },
  "/manage/technologyProject/projectEstablish/projectEstablishInspect": { columns: PROJECT_COLUMNS, filterRows: F_PROJECT, rowsKey: "estReview" },
  "/manage/technologyProject/projectOngoing/projectOngoing": { columns: PROJECT_COLUMNS, filterRows: F_PROJECT, rowsKey: "ongoing" },
  "/manage/technologyProject/projectAcceptance/projectAcceptance": { columns: PROJECT_COLUMNS, filterRows: F_PROJECT, rowsKey: "acceptance" },
  "/manage/technologyProject/projectAppraisal/projectAppraisal": { columns: PROJECT_COLUMNS, filterRows: F_PROJECT, rowsKey: "appraisal" },
  "/manage/achievement/achievementList/achievementList": { columns: ACHIEVEMENT_COLUMNS, filterRows: F_ACHIEVEMENT, rowsKey: "achievements", totalCount: 138, defaultTab: "all", tabs: [
    { key: "all", label: "全部", rowsKey: "achievements" },
    { key: "tech", label: "科技成果", rowsKey: "achRegist" },
    { key: "construction", label: "工法", rowsKey: "construction" },
    { key: "patent", label: "专利", rowsKey: "patents", columns: PATENT_COLUMNS, filterRows: F_PATENT },
    { key: "softcopyright", label: "软著", rowsKey: "achievements" },
    { key: "paper", label: "论文", rowsKey: "achievements" },
    { key: "book", label: "著作", rowsKey: "achievements" },
    { key: "transform", label: "成果转化", rowsKey: "achTransform" },
    { key: "import", label: "技术引进", rowsKey: "achTransform" },
  ] },
  "/manage/achievement/identify/identifySearch": { columns: TOPIC_COLUMNS, filterRows: F_TOPIC, rowsKey: "achIdRecords" },
  "/manage/achievement/identify/identifyAppliy": { columns: TOPIC_COLUMNS, filterRows: F_TOPIC, rowsKey: "achIdApply" },
  "/manage/achievement/identify/identifyAudit": { columns: TOPIC_COLUMNS, filterRows: F_TOPIC, rowsKey: "achIdAudit" },
  "/manage/achievement/achievementRegist/achievementRegist": { columns: ACHIEVEMENT_COLUMNS, filterRows: F_ACHIEVEMENT, rowsKey: "achRegist" },
  "/manage/achievement/constructionManagement/constructionList": { columns: CONSTRUCTION_COLUMNS, filterRows: F_CONSTRUCTION, rowsKey: "construction" },
  "/manage/achievement/constructionManagement/declarationNotice": { columns: CONSTRUCTION_COLUMNS, filterRows: F_CONSTRUCTION, rowsKey: "conNotice" },
  "/manage/achievement/constructionManagement/constructionDeclaration": { columns: CONSTRUCTION_COLUMNS, filterRows: F_CONSTRUCTION, rowsKey: "conApply" },
  "/manage/achievement/constructionManagement/constructionAudit": { columns: CONSTRUCTION_COLUMNS, filterRows: F_CONSTRUCTION, rowsKey: "conAudit" },
  "/manage/achievement/constructionManagement/formalitiesReview": { columns: CONSTRUCTION_COLUMNS, filterRows: F_CONSTRUCTION, rowsKey: "conFormal" },
  "/manage/achievement/constructionManagement/pushExpertReview": { columns: CONSTRUCTION_COLUMNS, filterRows: F_CONSTRUCTION, rowsKey: "conPushExpert" },
  "/manage/achievement/constructionManagement/expertReview": { columns: CONSTRUCTION_COLUMNS, filterRows: F_CONSTRUCTION, rowsKey: "conExpert" },
  "/manage/achievement/constructionManagement/constructionPerfect": { columns: CONSTRUCTION_COLUMNS, filterRows: F_CONSTRUCTION, rowsKey: "conPerfect" },
  "/manage/achievement/constructionManagement/constructionRelease": { columns: CONSTRUCTION_COLUMNS, filterRows: F_CONSTRUCTION, rowsKey: "conRelease" },
  "/manage/achievement/patenManagement/patentsList": { columns: PATENT_COLUMNS, filterRows: F_PATENT, rowsKey: "patents" },
  "/manage/achievement/patenManagement/patentFiling": { columns: PATENT_COLUMNS, filterRows: F_PATENT, rowsKey: "patentFiling" },
  "/manage/achievement/patenManagement/patentReview": { columns: PATENT_COLUMNS, filterRows: F_PATENT, rowsKey: "patentReview" },
  "/manage/achievement/promotion-catalog/index": { columns: ACHIEVEMENT_COLUMNS, filterRows: F_ACHIEVEMENT, rowsKey: "achPromotion" },
  "/manage/achievement/transform-import/index": { columns: ACHIEVEMENT_COLUMNS, filterRows: F_ACHIEVEMENT, rowsKey: "achTransform" },
  "/rewards": { detailRouteBase: "/rewards", columns: REWARD_COLUMNS, filterRows: F_REWARD, rowsKey: "rewards", totalCount: 138, defaultTab: "internal", tabs: [
    { key: "internal", label: "内部奖励", rowsKey: "rewards" },
    { key: "external", label: "外部奖励", rowsKey: "extRecords", columns: REWARD_COLUMNS },
  ] },
  "/manage/reward/declare/list": { columns: REWARD_COLUMNS, filterRows: F_REWARD, rowsKey: "rwRecords" },
  "/manage/reward/notice/overview": { columns: TOPIC_NOTICE_COLUMNS, filterRows: F_TOPIC_NOTICE, rowsKey: "rwNotice" },
  "/manage/reward/declare/myList": { columns: REWARD_COLUMNS, filterRows: F_REWARD, rowsKey: "rwDeclare" },
  "/manage/reward/audit/tbdwsh": { columns: REWARD_COLUMNS, filterRows: F_REWARD, rowsKey: "rwRecommend" },
  "/manage/reward/audit/formExam": { columns: REWARD_COLUMNS, filterRows: F_REWARD, rowsKey: "rwFormal" },
  "/manage/reward/expertPush/rewardPushQuery": { columns: REWARD_COLUMNS, filterRows: F_REWARD, rowsKey: "rwPushExpert" },
  "/manage/reward/expertScore/expertScoreQuery": { columns: REWARD_COLUMNS, filterRows: F_REWARD, rowsKey: "rwExpertScore" },
  "/manage/reward/meetingAudit/orgnizeAudit/list": { columns: REWARD_COLUMNS, filterRows: F_REWARD, rowsKey: "rwOrgAudit" },
  "/manage/reward/meetingAudit/expertAudit/list": { columns: REWARD_COLUMNS, filterRows: F_REWARD, rowsKey: "rwMeetingAudit" },
  "/manage/reward/recommendResult/resultQuery": { columns: REWARD_COLUMNS, filterRows: F_REWARD, rowsKey: "rwResult" },
  "/manage/reward/notice/show": { columns: TOPIC_NOTICE_COLUMNS, filterRows: F_TOPIC_NOTICE, rowsKey: "rwPublic" },
  "/manage/techRewards/externalRewards/externalRewardsQuery/list": { columns: REWARD_COLUMNS, filterRows: F_REWARD, rowsKey: "extRecords" },
  "/manage/techRewards/externalRewards/externalRewardsNotic/list": { columns: TOPIC_NOTICE_COLUMNS, filterRows: F_TOPIC_NOTICE, rowsKey: "extNotice" },
  "/manage/techRewards/externalRewards/externalRewardsDeclaration/list": { columns: REWARD_COLUMNS, filterRows: F_REWARD, rowsKey: "extDeclare" },
  "/manage/techRewards/externalRewards/externalRewardsReview/list": { columns: REWARD_COLUMNS, filterRows: F_REWARD, rowsKey: "extReview" },
  "/manage/techRewards/externalRewards/externalRewardsRegistration/list": { columns: REWARD_COLUMNS, filterRows: F_REWARD, rowsKey: "extRegist" },
  "/manage/technicalStandard/listOfTechnicalStandards/index": { columns: STANDARD_COLUMNS, filterRows: F_STANDARD, rowsKey: "standards" },
  "/manage/technicalStandard/enterpriseTechnicalStandards/EnterpriseStandardRecord": { columns: STANDARD_COLUMNS, filterRows: F_STANDARD, rowsKey: "entStdRecords" },
  "/manage/technicalStandard/enterpriseTechnicalStandards/projectApplication/projectAppliInform": { columns: TOPIC_NOTICE_COLUMNS, filterRows: F_TOPIC_NOTICE, rowsKey: "entStdAppNotice" },
  "/manage/technicalStandard/enterpriseTechnicalStandards/projectApplication/StandardProjectApplication": { columns: STANDARD_COLUMNS, filterRows: F_STANDARD, rowsKey: "entStdApp" },
  "/manage/technicalStandard/enterpriseTechnicalStandards/projectApplication/StandardProjectAppliAudit": { columns: STANDARD_COLUMNS, filterRows: F_STANDARD, rowsKey: "entStdAppAudit" },
  "/manage/technicalStandard/enterpriseTechnicalStandards/projectEstablish/projectEstablishNotic": { columns: TOPIC_NOTICE_COLUMNS, filterRows: F_TOPIC_NOTICE, rowsKey: "entStdEstNotice" },
  "/manage/technicalStandard/enterpriseTechnicalStandards/projectEstablish/StandardProjectEstablish": { columns: STANDARD_COLUMNS, filterRows: F_STANDARD, rowsKey: "entStdEst" },
  "/manage/technicalStandard/enterpriseTechnicalStandards/projectEstablish/Standardzubereitung": { columns: STANDARD_COLUMNS, filterRows: F_STANDARD, rowsKey: "entStdDraft" },
  "/manage/technicalStandard/enterpriseTechnicalStandards/ReviewNotice": { columns: TOPIC_NOTICE_COLUMNS, filterRows: F_TOPIC_NOTICE, rowsKey: "entStdReview" },
  "/manage/technicalStandard/enterpriseTechnicalStandards/standardRelease": { columns: STANDARD_COLUMNS, filterRows: F_STANDARD, rowsKey: "entStdRelease" },
  "/manage/technicalStandard/RegistrierungTechnischerNormen/organization/Zubereitungsnormen": { columns: STANDARD_COLUMNS, filterRows: F_STANDARD, rowsKey: "stdOrgDraft" },
  "/manage/technicalStandard/RegistrierungTechnischerNormen/application/Anwendungsnormen": { columns: STANDARD_COLUMNS, filterRows: F_STANDARD, rowsKey: "stdApp" },
  "/manage/engineeringTechnology/engineeringOverview": { columns: ENGINEERING_COLUMNS, filterRows: F_ENGINEERING, rowsKey: "engOverview" },
  "/manage/engineeringTechnology/engineeringApply": { columns: ENGINEERING_COLUMNS, filterRows: F_ENGINEERING, rowsKey: "engApply" },
  "/manage/engineeringTechnology/engineeringAudit": { columns: ENGINEERING_COLUMNS, filterRows: F_ENGINEERING, rowsKey: "engAudit" },
  "/manage/engineeringTechnology/engineeringOrganization": { columns: ENGINEERING_COLUMNS, filterRows: F_ENGINEERING, rowsKey: "engOrg" },
  "/manage/engineeringTechnology/returnEvaluate": { columns: ENGINEERING_COLUMNS, filterRows: F_ENGINEERING, rowsKey: "engReturn" },
  "/manage/engineeringTechnology/evaluateStatistics": { columns: ENGINEERING_COLUMNS, filterRows: F_ENGINEERING, rowsKey: "engEval" },
  "/manage/engineeringTechnology/Casereturn": { columns: ENGINEERING_COLUMNS, filterRows: F_ENGINEERING, rowsKey: "engCasereturn" },
  "/manage/assessmentManagement/assessmentOverView": { columns: ASSESSMENT_COLUMNS, filterRows: F_ASSESSMENT, rowsKey: "assessOverview", toolbar: [
    { label: "新增考核计划", primary: true }, { label: "导入" }, { label: "导出" },
  ] },
  "/manage/assessmentManagement/assessmentIssue": { columns: TOPIC_NOTICE_COLUMNS, filterRows: F_TOPIC_NOTICE, rowsKey: "assessIssue" },
  "/manage/assessmentManagement/assessmentSubmission": { columns: ASSESSMENT_COLUMNS, filterRows: F_ASSESSMENT, rowsKey: "assessSubmit" },
  "/manage/assessmentManagement/assessmentEvaluateAll": { columns: ASSESSMENT_COLUMNS, filterRows: F_ASSESSMENT, rowsKey: "assessEval" },
  "/manage/technologyStatistics/technologyStatistics": { columns: ASSESSMENT_COLUMNS, rowsKey: "statsOverview" },
  "/manage/dataFilling/technologyStatistics": { columns: ASSESSMENT_COLUMNS, filterRows: F_ASSESSMENT, rowsKey: "statsFill" },
  "/manage/dataFilling/annualWork": { columns: ASSESSMENT_COLUMNS, filterRows: F_ASSESSMENT, rowsKey: "annualWork" },
  "/manage/collaborativeInnovation/collaborativeInnovation": { columns: PROJECT_COLUMNS, rowsKey: "collab" },
  "/manage/knowledgeManagement/knowledgeManagement": { columns: ACHIEVEMENT_COLUMNS, rowsKey: "knowledge" },
  "/manage/orgManage/myself/myself": { columns: USER_COLUMNS, rowsKey: "myself" },
  "/manage/systemManage/dictionary/dictionaryQuery": { columns: STANDARD_COLUMNS, rowsKey: "dict" },
};

