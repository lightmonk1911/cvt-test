const prefetch = (path) => {
  const link = document.createElement('link');
  link.setAttribute('rel', 'prefetch');
  link.setAttribute('href', path);
  document.getElementsByTagName('head')[0].append(link);
};

export default prefetch;
