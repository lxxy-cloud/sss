# Design Tokens (captured from live page)

Captured via `getComputedStyle` against the live authenticated page at 1440×900.

## Page
- Body background: `#f0f2f5`
- Primary font: "Microsoft YaHei", "PingFang SC", Arial, sans-serif
- Base text color: `#333`

## Header (61px fixed)
- Background: `#fff`
- Brand color: `#34495e`, weight 700, 16px
- Account color: `#5f6e7b`
- Bottom border: 3px linear gradient `#1687e8 → #276fd5 → #d529c5`

## Sidebar (220px wide)
- Background: `#004ea2`
- Active parent: `#084a90`
- Subnav background: `#003f83`
- Active child: `#3584ed`
- Item text: `#fff` / `#d8e9fb` (sub)
- Item height: 51px / 38px

## Tabs (55px tall)
- Background: `#fff`
- Border-bottom: 1px solid `#e1e5e8`
- Text: `#727f8d`
- Active underline: `#1687e8`

## Filter
- Panel background: `#fff`
- Border-bottom: 1px solid `#eee`
- Label color: `#333`
- Input / select: 160×30, border `#e1e5e8`, radius 2px, color `#555`, 14px
- Focus border: `#008ffd`
- Query button: bg `#008ffd`, text `#fff`, radius 3px, 30px tall
- Reset button: bg `#fff`, text/border `#1e78dd`, radius 3px, 30px tall

## Table
- Min-width: 1030px
- th: 40px height, bg `#ebf4ff`, color `#3d607e`, 16px, weight 400
- td: 50px height, color `#555`, border-bottom 1px `#eee`, 16px
- Status colors:
  - 在研 → `#4a9a37` (green)
  - 验收 / 已完成 → `#1687e8` (blue)

## Pagination
- Button: 30×30, border `#d9e0e7`, color `#637484`
- Active page: bg `#008ffd`, color `#fff`
- Page size selector: border `#d9e0e7`
- Text color: `#667785`
