# PersonUserList Specification

## Overview
- Target: `src/components/sites/kjtest-ceec-net-cn-be3d45d6/manage-orgmanage-person-personquery-5fea2f5b/PersonUserList.tsx`
- Local route: `/users`
- Interaction model: click/form-driven, demo-only.

## Measured layout at 1440×1000
- Header 61px white, bottom 3px blue-to-magenta accent.
- Sidebar: x0–220, beginning y64, `#004ea2`; active parent `#084a90`, active child `#3584ed`.
- Content begins x220/y64. Tab strip height 55px, white.
- Workspace `#f0f2f5` padding 15px. Tree width about 185px, white, with a thin gray right separator.
- The right panel begins at x435 and has a white search/form region. Inputs are 160px × 32px with `#e6e6e6` borders. Labels are 14px/`#333`.
- Primary action/search: `#0099ff`, radius 4px, height 32px. Reset is white with #1e78dd border. Main action buttons are 170px×32px blue.
- Table header #e8f2ff, each row approx 51px, #eee grid lines; blue operation links and red delete link.
- Bottom pagination uses 32px blue active box.

## Data to render
- Columns: `人员编号`, `姓名`, `能建内/外`, `工作单位`, `是否专家`, `管理单位`, `从事专业`, `操作`.
- Render representative source rows including:
  - `010202A02728 | 肖萌 | 能建内 | 中国电力工程顾问集团华东... | 是`
  - `012007A00569 | 杨晓娟 | 能建内 | 中能建数字科技集团有限公司 | 否`
  - `0111A100051 | 柳媛 | 能建内 | 中能建城市投资发展有限公司 | 否`
  - `010108A11967 | 胡兴邦 | 能建内 | 在建及新筹备项目 | 否`
  - `010204A2235 | 史东瑞 | 能建内 | 电力规划总院有限公司 | 是`

## Controls/text
- Filters: `人员编号`, `姓名`, `能建内/外`, `工作单位`, `是否专家`, `管理单位`, `从事专业`.
- Buttons: `查询`, `重置`, `新增能建内科技人员`, `新增能建外科技人员`, `导出清单`.
- Tree includes `集团公司`, `湖南火电`, `广东火电`, `西北城建`, `中电工程`, `资产管理公司`, `国际集团`, `数科集团`.

## Responsive behavior
- Under 1000px, sidebar may be horizontal or collapse; workspace becomes a vertical tree then table layout with horizontal table scrolling.
