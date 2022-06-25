# 在控制台输出徽章信息

简体中文 | [English]('https://github.com/yesw6a/badge-author-info/blob/master/README-EN.md')

# Install

## npm

```bash
npm i badge-author-info
```

## yarn

```bash
yarn add badge-author-info
```

## pnpm

```bash
pnpm i badge-author-info
```

# Usage

```js
import { logAuthorInfo, customBadge } from 'badge-author-info';

logAuthorInfo({}); // | cc | 583783099@qq.com |
logAuthorInfo({ author: 'author name', email: 'author@email.com' }); // | author name | author@email.com |
customBadge([
  { label: 'label1', value: 'value1' },
  { label: 'label2', value: 'value2' },
]); // Experience yourself, thx! QAQ
```

# Changelog

## v1.0.3

- 只能打印固定的信息

## v2.0.0

- 使用 `ts` 重构
- 提供多种打印徽章的方法
  - 默认的徽章
  - 自定义徽章
  - 使用默认样式且自定义值

## v2.0.1

- 提供多语种 `README`
