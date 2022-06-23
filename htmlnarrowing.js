// img 태그 경로 변경하기
var image = document.querySelector("#image");
if (image instanceof HTMLImageElement) {
    image.src = 'test2.jpg';
}
// 3개의 a태그 href 동시변경
var ahref = document.querySelectorAll(".naver");
// 여러개 선택되면
if (ahref instanceof NodeList) {
    ahref.forEach(function (v) {
        if (v instanceof HTMLAnchorElement) {
            v.href = 'https://kakao.com';
        }
    });
}
