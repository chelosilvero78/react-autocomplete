// import {getCLS, getFID, getLCP} from 'web-vitals';

// function logDelta({name, id, delta}) {
//   console.log(`${name} matching ID ${id} changed by ${delta}`);
// }

// export function printLogDelta(){
//   getCLS(logDelta);
//   getFID(logDelta);
//   getLCP(logDelta);
// }



const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

//exportaciones por default junto con otras
// var message2 = 'I am exported';
// export default message2;
// export const message = 'I am also exported'
export default reportWebVitals;
