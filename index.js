if (typeof window != 'undefined' && !window.location.origin) {
  window.location.origin = window.location.protocol + '//' + window.location.host;
}
