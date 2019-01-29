const preload = (path, as) => {
  const link = document.createElement('link');
  link.setAttribute('rel', 'preload');
  link.setAttribute('href', path);
  link.setAttribute('as', as);
  document.getElementsByTagName('head')[0].append(link);
};

export default preload;
