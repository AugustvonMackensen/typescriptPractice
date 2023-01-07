// 앱이 더 커지고 대규모가 되면서 자바스크립트의 한계가 드러남
// 설치 순서
// 1. Node 설치 : https://nodejs.org 에서 LTS 버전 다운로드
// 2. VSCode 설치
// 3. 디렉토리 생성 및 하위 폴더 생성
// 4. 하위폴더 기준으로 터미널 열어서 npm init 명령어 실행
// 5. 엔터 누름
// 6. 순서대로 description, main, test command, git repository, keywords, author, license 입력하면 package.json 생성됨
// 7. 이후 typescript를 npm install -g typescript 명령어로 typescript 패캐지를 받는다.
// 8. string-vs-numbers.ts 파일을 만들고, 코드를 입력한 뒤 터미널에 tsc strings-vs-numbers.ts 입력
// 9. tsc는 typescript를 실행하는 컴파일러이며, 이를 컴파일러가 확인하는 파일의 이름으로 자바스크립트러 트랜스파일하여 
//      string-vs-numbers.js 라는 자바스크립트 파일이 생성된다.
//10. node string-vs-numbers.js 라는 명령어로 터미널에서 실행하면 a+b의 값이 콘솔에 출력된다.
//11. node라는 명령어는 자바스크립트 파일을 실행하기 위한 런타임 역할을 하고, 노드가 구글 크롬 브라우저 엔진인 v8을 이용해 실행하여 a+b의 결과값이
//      화면에 출력된다
//12. ts 파일과 js 파일 동시에 열지마라.


// let a = 5;
// let b = '6';
// console.log(a + b);

// 실행 결과, 56이 나옴.
// 자바스크립트 런타임에서 의도를 추측해 숫자 a를 문자열로 변환하고 변수 b와 더해서 문자열끼리의 덧셈이 되어 버림
// html에 들어오는 대부분 입력은 문자열로 들어옴

//정적 타입 적용
// 자바스크립트 파일을 삭제하고 코드 입력후 타입스크립트 컴파일러가 복제된 두 벌의 a와 b 변수를 인지하게 함
// let a: number = 5;
// let b: number = '6';
// console.log(a + b);

// 실행시 에러 작동됨
// error TS2322: Type 'string' is not assignable to type 'number'.
// 모든 변수가 숫자여야 함을 지정했기에 컴파일러는 내용 확인 후 진행할 수 없다고 함.
// 변수 b를 숫자로 바꾸고 실행
let a: number = 5;
let b: number = 6;
console.log(a + b);

// 확인 결과 : 11
// 부정확하게 변수를 설정할 시 타입스크립트에서는 오류를 잡아내고 런타임에 사용되지 않도록 함