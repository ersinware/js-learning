// ||| today

// console.log(new Date().toString())
// //milliseconds after 1970
// console.log(Date.now().toString())
// //the same with new Date()
// console.log(new Date(Date.now()).toString())
//
// const today = new Date()
// // day of month
// console.log(today.getDate())
// // day of week
// console.log(today.getDay())
// console.log(today.getFullYear())
// console.log(today.getMonth())
// console.log(today.getHours())
// console.log(today.getMinutes())

// ||| set any date

// const ninthAugust = new Date();
// ninthAugust.setTime(Date.parse('Aug 9, 1995'));
// console.log(ninthAugust.toDateString())
//
// const date = new Date('December 25, 1995 13:30:00')
// console.log(date.toDateString())
// console.log(date.toTimeString())
//
// const date2 = new Date(1995, 11, 25, 13, 30, 0)
// console.log(date2.toDateString())
// console.log(date2.toTimeString())

// ||| anniversary

// const today = new Date();
// const endYear = new Date(1995, 11, 31, 23, 59, 59, 999);
// endYear.setFullYear(today.getFullYear());
//
// const msPerDay = 24 * 60 * 60 * 1000;
// let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
// daysLeft = Math.round(daysLeft);
// console.log(daysLeft)

// ||| digital form

// const time = new Date()
// const hour = time.getHours()
// const minute = time.getMinutes()
// const second = time.getSeconds()
// let temp = '' + ((hour > 12) ? hour - 12 : hour)
// if (hour === 0) temp = '12'
// temp += ((minute < 10) ? ':0' : ':') + minute
// temp += ((second < 10) ? ':0' : ':') + second
// temp += (hour >= 12) ? ' P.M.' : ' A.M.'
// console.log(temp)

// ||| formatting

// const seventeenthJuly = new Date(2014, 6, 17)
// const options = {
//  year        : '2-digit', // 4-digit???
//  month       : '2-digit',
//  day         : '2-digit',
//  hour        : '2-digit',
//  minute      : '2-digit',
//  // timeZoneName: 'short'
// }
// console.log(seventeenthJuly.toDateString())
//
// const turkishDateTime = new Intl.DateTimeFormat('tr-TR', options).format
// console.log(turkishDateTime(seventeenthJuly))