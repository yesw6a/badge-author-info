# Print badge in console

[简体中文]('https://github.com/yesw6a/badge-author-info/blob/master/README-zh-CN.md') | English

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

- Only print fixed information.

## v2.0.0

- Refactor by typescript.
- Provide many methods to print badge.
  - Default badge.
  - Custom badge.
  - Default style and custom value.

## v2.0.1

- Provide more languages `README`.
