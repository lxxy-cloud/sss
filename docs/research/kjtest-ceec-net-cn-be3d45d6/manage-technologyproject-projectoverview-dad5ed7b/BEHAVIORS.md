# Behaviors

- All filter inputs and dropdowns are client-only. Query (查询) commits the draft filter into the active filter set; Reset (重置) restores the defaults and clears the table.
- Year dropdown (立项年份) accepts year text; matching is exact-year equality.
- Multi-select checkbox (checkbox groups) maps to a multi-value filter; missing a value excludes nothing (open filter).
- Status radio (项目状态) selects one of: 全部 / 在研 / 验收 / 验收文档 / 已完成.
- 是否产学研项目 / 是否国际合作项目 radio groups filter by exact match.
- 查询 button click re-renders the table against the current filters and shows an inline notice of how many rows matched.
- View (查看) buttons are non-destructive — they set an inline notice describing the demo project they "opened" rather than navigating.
- Pagination is purely visual: page buttons and the input + 确定 button update the visible page indicator, no re-fetch.
- Page-size selector (200 条/页 etc.) updates the label only.
