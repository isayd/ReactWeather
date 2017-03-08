// function getTempCallback (location, callback){
//   callback(undefined, 78);
//   callback('City nor found');
// }
//
// getTempCallback('Philandelphia', function (err, temp){
//   if (err){
//     console.log('error',err);
//   }else {
//     console.log('sucess', temp);
//   }
// });
//
// //Problems with callback
// // 1. We have one callback function that is reponsible for differentiate between error an success cases
// // 2. We call callback twice (sucess and error)
//
// //-------------------------------//
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject){
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     },1000);
//   });
// }
//
// getTempPromise('Philandelphia').then(function (temp){
//   console.log('promise sucess', temp);
// }, function(err){
//   console.log('promise error', err);
// });

//
//if (type of 7 === 'number')

function addPromise (a,b) {
  return new Promise (function (resolve, reject){
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    } else {
      reject('No son enteros');
    }
  });
}

addPromise (5,6).then(function (sum){
  console.log('sucess', sum);
},  function(err){
  console.log('error', err);
});

addPromise (5,'que onda weee').then(function (sum){
  console.log('sucess', sum);
},  function(err){
  console.log('error', err);
});
