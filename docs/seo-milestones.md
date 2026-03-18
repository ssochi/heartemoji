# HeartEmojis 下一阶段里程碑

## 目标

下一阶段不再以“补更多单个 emoji 详情页”为主，而是转向更接近真实搜索意图的内容与工具。

核心目标有 3 个：

1. 把站点从 `emoji 词条站` 扩成 `heart expression 工具站`
2. 优先覆盖明显有需求、但站内还没有承接好的 query cluster
3. 用可复用的页面框架，批量扩展英文、中文、西语长尾

## 优先级原则

- 优先做 `复制/粘贴/场景/平台/昵称/bio` 这类强意图词
- 优先做当前 SERP 前排内容质量不高的主题
- 优先做可程序化扩展的页面族，而不是单页手工内容
- 优先复用现有详情页、copy page、search landing 的组件能力
- 暂缓继续堆普通 emoji 详情页

## 当前进展

- 已完成里程碑 0 的第一版基础设施：
  - 新增统一路由 `/[locale]/copy-paste/[slug]`
  - Search landing 组件已支持 `en / zh / es`
  - sitemap 和 copy-paste hub 已接入新页面
- 已上线首批页面：
  - `en/heart-symbols`
  - `en/heart-symbols-for-bio`
  - `en/aesthetic-heart-symbols`
  - `en/heart-symbols-for-discord`
  - `en/heart-emojis-for-instagram-bio`
  - `en/whatsapp-heart-emoji-meanings`
  - `en/discord-heart-emojis`
  - `zh/heart-symbols`
  - `zh/special-heart-symbols`
  - `zh/wechat-nickname-heart-symbols`
  - `zh/xiaohongshu-heart-symbols`
  - `zh/wechat-heart-emoji-meanings`
  - `zh/wechat-status-heart-symbols`
  - `zh/xiaohongshu-big-heart`
  - `es/corazones-aesthetic-para-copiar-y-pegar`
  - `es/corazones-para-bio`
  - `es/corazones-para-nombre`
  - `es/corazones-para-instagram`
  - `es/corazones-para-discord`
  - `es/significado-corazones-whatsapp`
- 里程碑 1 里优先列出的 symbols / bio / 昵称专题页已补齐
- 里程碑 2 里优先列出的平台场景页已补齐
- 已上线里程碑 3 的首批语境解释页：
  - `en/what-does-black-heart-mean-from-a-guy`
  - `en/what-does-purple-heart-mean-from-a-girl`
  - `en/white-heart-in-texting`
  - `en/black-heart-on-instagram`
  - `en/pink-heart-in-texting`
  - `en/blue-heart-in-texting`
- 下一步继续里程碑 3，补剩余高价值语境页，并决定是否扩到中文 / 西语版本

## 里程碑 0：搜索 landing 基础设施重构

### 目标

把现在偏西语专用的搜索 landing 能力，抽成可扩英文、中文、西语的统一框架。

### 为什么先做

当前最有点击表现的是带明确搜索意图的页面，而不是百科式详情页。先把底层框架做对，后面每批内容都能更快上线。

### 交付物

- 统一的 search landing 数据结构，支持 `en / zh / es`
- 通用路由策略，避免只在 `/es/copiar/[slug]` 这类单语路径里扩
- 统一 metadata / schema / FAQ / internal link 生成逻辑
- 统一的页面模板：
  - hero
  - quick copy
  - snippet blocks
  - FAQ
  - related links

### 代码范围

- `src/data/searchLandingPages.ts`
- `src/components/SearchLandingPage.tsx`
- `src/app/[locale]/...` 下新增统一 landing 路由

### 完成标准

- 能用一套数据模型同时生成至少 1 个英文、1 个中文、1 个西语 landing page
- 页面模板不需要为每个 query 单独写 JSX

## 里程碑 1：Heart Symbols / Bio / 昵称专题

### 目标

拿下最明显未满足的一组需求：`heart symbols`、`aesthetic hearts`、`bio hearts`、`昵称/用户名 hearts`。

### 这一批优先做什么

- 英文
  - `heart-symbols`
  - `heart-symbols-for-bio`
  - `aesthetic-heart-symbols`
  - `heart-symbols-for-discord`
- 中文
  - `爱心符号复制`
  - `爱心特殊符号`
  - `微信昵称爱心符号`
  - `小红书爱心符号`
- 西语
  - `corazones-aesthetic-para-copiar-y-pegar`
  - `corazones-para-bio`
  - `corazones-para-nombre`

### 页面应该提供的内容

- 大量可直接复制的心形符号，不只是 emoji
- 按使用场景分组：
  - bio
  - nickname
  - username
  - Discord
  - Instagram
  - 微信 / 小红书
- 风格分组：
  - cute
  - aesthetic
  - minimal
  - gothic
  - romantic
- 常见问题：
  - 为什么有的心会显示成红色 emoji
  - 为什么有的符号在某些平台看不见
  - 哪些更适合昵称/简介

### 功能要求

- 一键复制
- 分类筛选
- 平台使用建议
- 同页内直接跳转

### 完成标准

- 上线至少 8-12 个高意图 landing pages
- 英文、中文、西语都各有 1 个以上 symbols 入口页

## 里程碑 2：平台场景页

### 目标

覆盖用户真实使用场景，而不是只解释 emoji 本身。

### 优先主题

- English
  - `heart-emojis-for-instagram-bio`
  - `whatsapp-heart-emoji-meanings`
  - `discord-heart-emojis`
- 中文
  - `微信爱心emoji含义`
  - `微信状态爱心符号`
  - `小红书巨大爱心`
- Español
  - `corazones-para-instagram`
  - `corazones-para-discord`
  - `significado-corazones-whatsapp`

### 页面结构建议

- 平台场景说明
- 适合复制的现成组合
- 不同显示风险
- 昵称 / 简介 / 评论 / 状态的区别
- FAQ

### 依赖

- 复用里程碑 0 的 landing 框架
- 复用里程碑 1 的 symbols 数据池

### 完成标准

- 每个语言至少 2 个平台页
- 页面之间有明确的 related links，形成 cluster

## 里程碑 3：语境解释页

### 目标

补上“关系语境解释”这类需求，例如：

- `what does black heart mean from a guy`
- `what does purple heart mean from a girl`
- `white heart in texting`
- `black heart on instagram`

### 为什么放在第三批

这类词通常意图清晰，但内容模型要先规范，否则容易写成低质情感文章。

### 页面模型

- 直接回答 query
- 语境拆分：
  - friendship
  - flirting
  - fandom
  - sarcasm
  - grief / support
- 风险提示：
  - 什么时候容易误解
- 搭配 emoji 推荐

### 优先颜色

- black
- white
- purple
- pink
- blue

### 完成标准

- 先做 6-10 个最高价值的语境页
- 每个页面都能反链到对应颜色 heart detail page

## 里程碑 4：生成器升级

### 目标

把现在的“重复 N 个心”升级成真正能解决需求的工具。

### 先做 3 个工具

1. `Bio Generator`
   - 输入名字或关键词
   - 输出带爱心的昵称 / bio / 签名样式

2. `Caption Generator`
   - 按风格输出短句：
     - romantic
     - soft
     - cute
     - fandom
     - dark

3. `Big Heart Builder`
   - 输出适合评论区、状态、小红书帖文的巨型爱心块
   - 支持行数、宽度、符号风格

### 为什么值得做

- 生成器类需求比单页内容更容易拿到回访
- 可以自然承接 symbols / copy-paste / platform 页

### 完成标准

- 至少 1 个工具上线并和 landing pages 强互链
- 工具页本身具备 indexable 内容，而不是纯客户端空壳

## 里程碑 5：放量与淘汰

### 目标

不是无限扩页，而是按表现放量。

### 要做的事情

- 每两周复盘 Search Console
- 看哪些 query cluster 起量：
  - symbols
  - platform
  - relationship meaning
  - generators
- 起量主题继续扩
- 长期没起色的 query 停止扩写

### 判断标准

- impressions 是否明显增长
- CTR 是否高于普通详情页
- 是否出现 cluster 内部互相带量

## 推荐执行顺序

### Batch 1

- 里程碑 0
- 里程碑 1 的英文 + 中文入口页

### Batch 2

- 里程碑 1 剩余页
- 里程碑 2 的平台页

### Batch 3

- 里程碑 3 的语境解释页

### Batch 4

- 里程碑 4 的工具升级

### Batch 5

- 里程碑 5 的放量、剪枝、二次扩展

## 当前不建议优先做的事

- 继续大量补普通 heart detail pages
- 先扩更多语言
- 先做更多偏娱乐的小功能

原因很简单：这些方向更像“补内容”，不是“补需求”。

## 第一批建议直接开的任务

1. 抽象 search landing 的多语言数据结构
2. 新建 `heart-symbols` 系列页的数据模型
3. 先上这 6 个页面
   - `en/heart-symbols`
   - `en/heart-symbols-for-bio`
   - `zh/爱心符号复制`
   - `zh/微信昵称爱心符号`
   - `es/corazones-aesthetic-para-copiar-y-pegar`
   - `es/corazones-para-bio`
4. 给这些页补统一 internal linking
5. 两周后看 Search Console，再决定平台页和语境页谁先扩
