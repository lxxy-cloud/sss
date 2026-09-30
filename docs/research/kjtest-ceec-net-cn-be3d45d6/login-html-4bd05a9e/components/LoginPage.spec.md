# LoginPage Specification

## Overview
- **Target file:** `src/components/sites/kjtest-ceec-net-cn-be3d45d6/login-html-4bd05a9e/LoginPage.tsx`
- **Screenshot:** observed with Chrome DevTools MCP at 1440×1200 and mobile 390×844.
- **Interaction model:** native input focus and click-driven checkbox; form submission must be a no-op.

## DOM Structure
`main.loginWrapper` > `section.loginBody` > `form.card` containing header, two icon-labelled inputs, checkbox, and submit button.

## Computed Styles (exact desktop values)

### Page/container
- `body`: background `rgb(240,242,245) url(bg_login2.png) no-repeat 50% 110px / 100%`; `font-size:14px`.
- Wrapper: absolute inset `0`, full viewport.
- Login body: padding `110px 10px 40px`.
- Card: width `360px`; background `#fff`; radius `2px`; shadow `0 1px 2px rgba(0,0,0,.05)`; centered with auto margins.

### Header
- Height/line-height `42px`; padding `0 15px`; `background:#fafafa`; `font-size:15px`; `font-weight:700`; `color:#333`; bottom border `1px solid #eee`.
- Use small CSS-drawn or Unicode-compatible line icons; no external icon font dependency.

### Form
- Padding `10px 15px`; thin `#eee` side/bottom border.
- Field row: height `38px`, margin-bottom `15px`.
- Icon box: 48×38px; background `#fafafa`; `1px solid #eee`; 2px left radius.
- Input: height `38px`; width fills remaining; left padding `10px`; `14px`; white; `1px solid #eee`; right radius 2px; transition `all .3s ease`.
- Remember row has a 20px bottom margin. Checkbox square: 18×18px, border `#d2d2d2`, radius 2px; label `14px`, color `#333`.
- Button: full width; height/line-height `38px`; background `#01aaed`; `#fafafa` text; 14px; radius 2px.

## States & Behaviors
- Input focus: blue `#01aaed` border and subtle matching box-shadow.
- Checkbox click: toggle selected state, blue fill and white checkmark.
- Submit: prevent default; no credential/API handling.

## Text Content (verbatim)
- `用户登录`
- `账号`
- `密码`
- `记住用户名`
- `登 录`

## Assets
- `public/sites/kjtest-ceec-net-cn-be3d45d6/login-html-4bd05a9e/bg_login2.png`

## Responsive Behavior
- Desktop 1440px: card is 360px wide, top offset 110px.
- Tablet 768px: same fixed card and top offset.
- Mobile 390px: source lacks a viewport meta tag and therefore preserves a 360px card within a 980px layout viewport, visually scaled down. Preserve the desktop card proportions and avoid a mobile stacked redesign.
