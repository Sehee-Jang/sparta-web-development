// Promise
// async(): 비동기 / await: 기다리다

// coffeeMaker 함수에서 호출할 함수 'addCoffee' 선언
// Promise를 반환
var addCoffee = function (name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(name);
    }, 500);
  });
};

// coffeeMaker 함수는
var coffeeMaker = async function () {
  var coffeeList = "";
  var _addCoffee = async function (name) {
    coffeeList += (coffeeList ? ", " : "") + (await addCoffee(name));
  };
  // Promise를 반환하는 함수인 경우, await를 만나면 무조건 끝날 때 까지 기다린다.
  // _addCoffee("에스프레소")이 로직이 실행되는데 만약 100초가 걸린다면
  await _addCoffee("에스프레소");
  // 여기 console.log(coffeeList)도 100초 뒤 실행됨
  console.log(coffeeList);
  await _addCoffee("아메리카노");
  console.log(coffeeList);
  await _addCoffee("카페모카");
  console.log(coffeeList);
  await _addCoffee("카페라떼");
  console.log(coffeeList);
};
coffeeMaker();