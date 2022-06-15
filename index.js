function showBadge(label, value, bgColorLabel, bgColorValue) {
  console.log(
    '%c '.concat(label, ' %c ').concat(value, ' '),
    'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: '.concat(bgColorLabel, ';'),
    'padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: '.concat(bgColorValue, ';')
  );
}

showBadge('Author', 'cc', '#06436f', '#436f06');
showBadge('Email', '583783099@qq.com', '#e18a3b', '#8a3be1');
