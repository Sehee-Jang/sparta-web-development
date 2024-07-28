/**
 * - 문제 설명
 * 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
 * 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
 *
 * ### 제한 조건
 * - strings는 길이 1 이상, 50이하인 배열입니다.
 * - strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
 * - strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
 * - 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
 *
 * ### 입출력 예
 * |  strings                | n |          return         |
 * | ["sun", "bed", "car"]   | 1 | ["car", "bed", "sun"]   |
 * | ["abce", "abcd", "cdx"] | 2 | ["abcd", "abce", "cdx"] |
 *
 * ### 입출력 예 설명
 * - 입출력 예 1
 * "sun", "bed", "car"의 1번째 인덱스 값은 각각 "u", "e", "a" 입니다.
 * 이를 기준으로 strings를 정렬하면 ["car", "bed", "sun"] 입니다.
 *
 * - 입출력 예 2
 * "abce"와 "abcd", "cdx"의 2번째 인덱스 값은 "c", "c", "x"입니다.
 * 따라서 정렬 후에는 "cdx"가 가장 뒤에 위치합니다.
 * "abce"와 "abcd"는 사전순으로 정렬하면 "abcd"가 우선하므로, 답은 ["abcd", "abce", "cdx"] 입니다.
 */

/**
 * - 문제 풀이 팁

    **1) 입력으로 받아온 문자열의 ‘배열’을 정렬하는 문제입니다.**

    우리의 과제는 정렬하는 로직을 구현하는 것 입니다.

    **2) 정렬하는 로직을 구현하는 아이디어 입니다.**

    1. 기본적으로 사전식 정렬입니다. 문자열 배열같은 경우 sort로 정렬이 가능합니다.
    2. 그런데 인덱스에 해당하는 문자 순서로 정렬하고, 그 인덱스에 해당하는 문자가 같은 경우 사전식으로 정렬해주는 작업이 필요합니다.
    3. 물론 성능적인 측면에서 더 좋은 방법이 있지만, 지금은 가장 쉬운 방법을 채택하려고 합니다.

    **3) 결론적으로 아래와 같은 순서로 구현하시면 쉽습니다.**

    1. 문자열 앞에 인덱스에 해당하는 문자를 붙인다
        1. ["sun", "bed", "car"], 1 이라면 → ["usun", "ebed", "acar"]
    2. 사전순으로 정렬한다
        1. ["acar", "ebed", "usun"]
    3. 정렬된 배열의 가장 앞 글자를 땐다
        1. ["car", "bed", "sun"]

    **4) 위와 같은 방법으로 구현하셨다면, 성능적으로(시간복잡도 상) 개선을 해봐도 좋지만, 오늘 배운 배열의 메서드를 이용해서 1,2,3번의 로직을 구현하는 것을 연습해보시는걸 추천합니다 🙂**
 */

// 1. 문자열을 입력받아 옴
function solution(strings, n) {
    let result = [];

    // 1. 문자열 가장 앞에 n번째 글자 붙인 문자배열 만들기
    for (let i = 0; i < strings.length; i++) {
        //  strings[i][n]: strings i에 있는 n번째 요소
        strings[i] = strings[i][n] + strings[i]; // u sun, e bed, a car
        // 왜 n번째를 문자열 맨 앞에 붙였는지??
        // -> sort()로 정렬을 할 때 기준을 만들기 위해서??
    }

    // 2. 문자열 사전순 정렬
    strings.sort(); // acar, ebed, usun

    // 3. 앞글자 제거 후 리턴
    for (let j = 0; j < strings.length; j++) {
        // replace(바꿀 요소, 어떻게 바꿀 것인지)
        strings[j] = strings[j].replace(strings[j][0], "");
        result.push(strings[j]);
    }
    return result;
}

console.log(solution(["sun", "bed", "car"], 1));    //  [ 'car', 'bed', 'sun' ]

// solution(["sun", "bed", "car"], 1);
// solution[["abce", "abcd", "cdx"], 2];