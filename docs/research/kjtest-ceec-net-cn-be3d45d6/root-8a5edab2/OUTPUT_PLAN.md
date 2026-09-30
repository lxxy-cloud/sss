# Authenticated-system Clone Plan

- Source: `http://kjtest.ceec.net.cn/#/manage/orgManage/person/personQuery` (authenticated SPA)
- Destination: `/` (replaces the earlier root login clone with the authenticated-system dashboard)
- Preserved login clone: move the existing LoginPage route to `/login.html` during dashboard assembly.
- Site key: `kjtest-ceec-net-cn-be3d45d6`
- Page key: `root-8a5edab2`
- Component root: `src/components/sites/kjtest-ceec-net-cn-be3d45d6/root-8a5edab2/`
- Assets: `public/sites/kjtest-ceec-net-cn-be3d45d6/root-8a5edab2/`

Phase 1 covers the dashboard shell and its full module navigation; individual business views will be added as route-scoped demos from the authenticated source.
