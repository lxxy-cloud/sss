# Page Topology

Single-screen table page built on the standard dashboard shell (header + sidebar + tabs + workspace).

```
┌─ Header (fixed, 61px) ────────────────────────────────────────────┐
│ 科技创新管理系统                  集团公司 赵耀华 (00A0181)  ⏻     │
├─ Sidebar (fixed, 220px) ──────┬─ Tabs (55px) ────────────────────┤
│ 用户管理                       │ 首页  [项目清单 ×]                │
│ 研发平台                       ├─ Filter box (border-bottom) ────┤
│ 科技项目  ▾                    │ Row 1: 立项年份/项目名称/项目等级/项目类别
│   项目清单  ●                  │ Row 2: 立项机制/牵头单位/项目状态/项目来源
│   选题征集                     │ Row 3: 是否产学研/是否国际合作   [查询][重置]
│   ...                          ├─ Table (min-width 1030px) ───────┤
│ 科技成果                       │ 序号 立项年份 项目名称 ... 操作   │
│ ...                            │ 1   2026  玄武岩...    查看      │
│                                │ ... 11 rows visible (79 total)  │
│                                ├─ Pagination ─────────────────────┤
│                                │ ‹  1  2  3  …  10  ›   到第[1]页 │
│                                │          确定   共 79 条  [200条/页]│
└────────────────────────────────┴──────────────────────────────────┘
```
