/*! (c) 2018 Andrea Giammarchi (ISC) */
((i, s, o) => {
  const c = i[s];
  i[s] = (...a) => c.apply(i, o.test(a[0]) ? ((a[0] = a[0].slice(3)), a) : a);
})(
  require('module'), '_resolveFilename',
  /^\/m\//
);
