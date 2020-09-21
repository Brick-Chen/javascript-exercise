export default function addSerialNumber(source) {
  // TODO 5: 在这里写实现代码，需要采用ES6 Object.assign
  const processedObj = Object.assign(source);
  processedObj.properties.status = 'processed';
  processedObj.serialNumber = '12345';
  return processedObj;
}
