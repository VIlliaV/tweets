export const smoothScroll = top => {
  window.scrollBy({
    top,
    behavior: 'smooth',
  });
};
