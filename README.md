# 生成作者信息的徽章并输出在控制台

# Install

```bash
npm i badge-author-info
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

- 支持直接解构使用打印作者信息。

## v2.0.0

- 使用 `ts` 重构
- 支持自定义徽章信息
- 提供默认徽章打印
