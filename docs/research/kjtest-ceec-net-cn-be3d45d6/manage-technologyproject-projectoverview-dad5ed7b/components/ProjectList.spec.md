# Component Spec: ProjectList

Self-contained client component that reproduces the R&D project-overview list page at `/projects`.

## Inputs / state
- `draftFilters: Filters` — current values of the filter form (text + select + checkboxes + radios).
- `filters: Filters` — committed filters applied to the table; populated by Query.
- `page: number` — currently selected pagination page (visual only).
- `pageSize: number` — currently selected page size (visual only).
- `notice: string` — inline status text displayed above the table.

## Filters type
```ts
type Filters = {
  year: string;            // 立项年份
  name: string;            // 项目名称
  level: string;           // 项目等级 (全部 dropdown)
  category: string;        // 项目类别
  mechanism: string;       // 立项机制
  unit: string;            // 牵头单位
  status: string;          // 项目状态 (全部/在研/验收/验收文档/已完成)
  source: string;          // 项目来源 (全部 dropdown)
  industryAcademia: '全部' | '是' | '否';
  international: '全部' | '是' | '否';
}
```

## Demo data
A `rows` constant with 11 of the 79 rows actually visible on the live page (rows 1–11), captured via DOM `innerText`. Status values are restricted to 在研 / 验收 / 验收文档 so the demo can show all three colors.

## Layout
- Reuse the exact header / sidebar / tabs / filter box / table / pagination CSS module classes from `PlatformList.module.css` (`styles` is its own module but the class names mirror it 1:1).
- Sidebar mirrors the live menu: 用户管理 / 研发平台 / 科技项目 (expanded) / 项目清单 (active) / 选题征集 / 揭榜挂帅 / 项目立项 / 项目实施 / 项目验收 / 项目后评估 / 科技成果 / 科技奖励 / 技术标准 / 重大工程技术方案评审 / 考核管理 / 科技统计 / 协同创新 / 知识管理 / 个人信息 / 系统管理.
- Tabs: 首页 / 项目清单 (active).

## Filter form (3 rows)
- Row 1: 立项年份 (text, year placeholder) / 项目名称 (text) / 项目等级 (select) / 项目类别 (text)
- Row 2: 立项机制 (select) / 牵头单位 (text) / 项目状态 (select) / 项目来源 (select)
- Row 3: 是否产学研项目 (radios) / 是否国际合作项目 (radios) / [查询][重置] buttons

## Table
12 columns: 序号 / 立项年份 / 项目名称 / 项目等级 / 项目类别 / 立项机制 / 项目起止时间 / 牵头单位 / 项目负责人 / 项目总预算经费(万元) / 项目状态 / 操作

Long text columns (项目名称, 牵头单位) get `title=...` for ellipsis hover; the row keeps the live data values verbatim from the DOM capture.

## Pagination
`‹ 1 2 3 … 10 ›` + 到第 [1] 页 + 确定 + 共 79 条 + [200 条/页].

## Empty state
If the filter produces zero matches, render a single `<tr><td colSpan=12>暂无可显示的数据</td></tr>`.

## Behaviors
- Click 查询 → commit draft → filter rows → update notice with match count.
- Click 重置 → restore default filters → reset page to 1 → re-render full data → clear notice.
- Click 查看 → set notice `'已打开【{name}】的本地演示详情。'`.
- Click any page button → update `page` state. Input + 确定 parses number, clamped ≥ 1. Page size select updates the visible label.
