# PlatformList Specification

- Local route `/platforms`; client-only interactions.
- Use the existing system shell measurements: 61px header, 220px blue sidebar, 55px tab strip, #f0f2f5 workspace.
- Sidebar has expanded `研发平台` with active `研发平台清单`, then `研发平台登记`, `能建研发平台组建`, `能建研发平台认定`, `运行管理`, `考核管理`.
- Filter row: `平台名称` input, `平台类别` select, `依托单位` input, `研究领域` select. Second row has checked blue platform-level checkboxes (`国家级`, `省部级`, `集团级`, `子集团级`, `子企业级`) and running-state radios (`全部`, `正常`, `申请停用`, `已停止`). Buttons are 30px: blue `查询`, white outlined `重置`.
- Table header #ebf4ff, 16px cells, 50px rows. Columns: `序号`, `平台名称`, `平台等级`, `平台类别`, `依托单位`, `研究领域`, `运行状态`, `操作`.
- Render source data, at least 13 rows. Preserve examples: `中国能源建设股份有限公司绿色先进材料研究院 | 集团级 | 股份公司级研发平台 | 绿色建材公司 | 建材`; `广东省起重运输工程技术研究中心 | 省部级 | 省级工程（技术）研究中心 | 广东火电 | 传统能源`; all statuses `正常`, actions `查看`.
- Pagination: blue active 1, then arrows, `到第 1 页 确定`, `共 107 条`, `200 条/页`.
- Under 1000px shell becomes horizontal/collapsed and table scrolls.
