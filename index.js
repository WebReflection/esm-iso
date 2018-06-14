/*! (c) 2018 Andrea Giammarchi (ISC) */
((i, s, o) => {
  const c = i[s];
  i[s] = (...a) => {
    if (o.test(a[0])) a[0] = a[0].slice(3);
    return c.apply(i, a);
  };
})(
  require('module'), '_resolveFilename',
  /^\/m\//
);
