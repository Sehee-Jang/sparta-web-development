/**
 * 문제 4. 배열 메서드 활용하기(심화): find()
 * 출근시간이 9시이고, 퇴근시간이 21시인 튜터님을 찾아 반환하는 findLongestTutor 함수를 완성해주세요!
 * 출력 결과: { 이름: "윤창식", 출근시간: 9, 퇴근시간: 21 }
 */


const tutors = [
  {
    이름: "최원장",
    출근시간: 9,
    퇴근시간: 18,
  },
  {
    이름: "윤창식",
    출근시간: 9,
    퇴근시간: 21,
  },
  {
    이름: "박가현",
    출근시간: 13,
    퇴근시간: 18,
  },
  {
    이름: "김병연",
    출근시간: 13,
    퇴근시간: 21,
  },
];

// 힌트
// 1. find() 메서드를 사용해 tutors 배열을 순회합니다.
// 2. 순회하면서 tutor 객체를 하나씩 가져옵니다.
// 3. tutor 객체의 출근시간과 퇴근시간을 동시에 비교하여 조건에 맞는 tutor를 찾습니다.

function find9to21Tutor(tutors) {
    return tutors.find(function (t) { 
        if (t.출근시간 === 9 && t.퇴근시간 === 21) {
            return true;
        } else { 
            return false;
        }
    })
}

console.log(find9to21Tutor(tutors));
