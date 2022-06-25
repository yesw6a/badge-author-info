type ShowBadgeProps = {
  label: string;
  value: string;
  bgColorLabel?: string;
  bgColorValue?: string;
};

/** 生成徽章 */
const showBadge = ({ label, value, bgColorLabel = '#06436f', bgColorValue = '#436f06' }: ShowBadgeProps) => {
  if (!label && !value) return;
  console.log(
    '%c '.concat(label, ' %c ').concat(value, ' '),
    'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: '.concat(bgColorLabel, ';'),
    'padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: '.concat(bgColorValue, ';')
  );
};

type LogAuthorInfo = {
  author?: string;
  email?: string;
};

export const logAuthorInfo = ({ author = 'cc', email = '583783099@qq.com' }: LogAuthorInfo) => {
  showBadge({ label: 'Author', value: author, bgColorLabel: '#06436f', bgColorValue: '#436f06' });
  showBadge({ label: 'Email', value: email, bgColorLabel: '#e18a3b', bgColorValue: '#8a3be1' });
};

export const customBadge = (badges: ShowBadgeProps[]) => {
  badges.map((params) => showBadge(params));
};
