# DashboardShell Specification

## Overview
- Target: `src/components/sites/kjtest-ceec-net-cn-be3d45d6/root-8a5edab2/DashboardShell.tsx`
- Interaction model: click-driven expandable navigation, informational dashboard cards.

## Exact measured shell layout at 1440px
- Root fixed/full viewport, `#f0f2f5`, 14px Chinese system font.
- Header: fixed top, 61px high, white with `0 1px 0 rgba(0,0,0,.05)` shadow; title at 16px, ~24px bold.
- 3px blue-to-magenta accent rule sits at y=61px.
- Sidebar: fixed left at y=64px, width 220px, bottom 0; inner background `#004ea2`; white menu labels, 16px; primary row 51px tall.
- Main: left 220px, top 64px, background `#f0f2f5`; tab strip 55px high then a 15px-gapped 2-column dashboard grid.
- Dashboard cards: white, radius 6px; each 50% column approximately, 15px gap. Header has left blue 3px accent and a #eee divider.

## Required navigation labels
`用户管理`, `研发平台`, `科技项目`, `科技成果`, `科技奖励`, `技术标准`, `重大工程技术方案评审`, `考核管理`, `科技统计`, `协同创新`, `知识管理`, `个人信息`, `系统管理`.

## Dashboard content
- User label: `集团公司 赵耀华 (00A0181)`.
- Card headings: `待办 99+`, `通知公告`, `研发投入（万元）`, `科技奖励`, `科技成果`.
- Use the visible source list entries and render charts with CSS/SVG-free bars and a simple donut; no chart dependency.

## Behaviors
- Parent navigation items containing children expand/collapse via click, retaining the blue treatment.
- Sidebar item click changes active display label only; no real APIs or data submission.
- Use a compact responsive fallback below 900px: sidebar becomes horizontally scrollable / collapsible, cards stack.
