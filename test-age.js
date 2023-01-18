// test-age.ts
// 어떤 사람이 운전이 가능한지 알려주는 코드
// 자바스크립트에서의 해결법 :
// 1) for문 사용해 user 객체의 속성 키 이름을 모두 확인하면서 나이에 해당하는 키 이름 확인
// 2) 그런 다음 예외를 호출하거나 오류 핸들러를 호출함
// 단점 : 모든 함수에서 이런 처리를 해야 한다면 비효율적이고 부담스러운 작업이고 코드 실행 중에 오류를 잡안매
// 오류는 사용자가 알기 전 잡아내는게 좋음
// usr 파라미터의 콜론과 User 타입 확인
//여기서 파라미터는 타입 어노테이션이라 부르고, 컴파일러에게 User 타입의 파라미터만 함수 canDrive에 전달함.
function canDrive(usr) {
    console.log("user is", usr.name);
    if (usr.age >= 16) {
        console.log("allow to drive");
    }
    else {
        console.log("do not allow to drive");
    }
}
// 에러 발생 사유 : User 인터페이스는 name과 age라는 속성이 있는데 age 속성이 없음
// age 누락 에러 보여줌
// const tom = {
//   name: "tom",
// }
//일정 시간이 지난 다음 누군가가 이 canDrive 함수를 사용한다 가정.
var tom = {
    name: "tom",
    age: 25
};
canDrive(tom);
