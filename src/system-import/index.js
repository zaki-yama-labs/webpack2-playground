function onClick() {
  System.import('./module').then(module => {
    module.default;
  }).catch(err => {
    console.log('Chunk loading failed');
  });
}
