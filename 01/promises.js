function getFromDb ({ id, tag }, cb){
  const ms = 2000;
  const returnData = [
    {
      id: 10,
      txt: 'foo',
      tag: 'A',
    },
    {
      id: 100,
      txt: 'woo',
      tag: 'B',
    },
    {
      id: 1000,
      txt: 'zoo',
      tag: 'A',
    },
  ];

  let res = returnData;
  const err = undefined;

  if (tag) {
    res = res.filter(d => d.tag.includes(tag));
  }
  if (id) {
    res = res.find(d => d.id === id);
  }

  return setTimeout(cb.bind(undefined, err, res), ms);
}

function getFromDbAsync ({ id, tag }){
  return new Promise((resolve, reject) => {
    getFromDb({ id, tag }, (err, rez) => err ? reject(err) : resolve(rez));
  });
}

//// WRONG!
// getFromDb({ tag: 'A' }, (err, rez) => {
//   console.log(rez.length);
//   getFromDb({ id: rez[0].id }, (err, rez) => console.log('target', rez));
// });
// getFromDb({}, (err, rez) => console.log(rez));

//// RIGHT BUT...

getFromDb({ tag: 'A' }, (err, rez) => {
  getFromDb({ id: rez[0].id }, (err, rez) => {
    console.log('target', rez);
    getFromDb({}, (err, rez) => {
      console.log(rez);
    });
  });
});

getFromDbAsync({ tag: 'A' }) // please IE ....
  .then(rez => getFromDbAsync({ id: rez[0].id }))
  .then(rez => console.log('target', rez))
  .then(() => getFromDbAsync({}))
  .then(rez => console.log(rez))
  .catch(err => console.error(err));
