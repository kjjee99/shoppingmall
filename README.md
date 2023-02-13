# 🍱밀키트 쇼핑몰 프로젝트
엘리스 SW 트랙 2기 1차 팀 프로젝트입니다. <br /><br />
HTML & CSS와 Javascript(Node.js)를 사용하여 웹페이지를 제작하였습니다.<br /><br /> 
밀키트를 주제로 상품 조회, 주문, 후기 작성 등 쇼핑몰의 전반적인 기능을 구현해보았습니다.<br /><br />

## API 명세서
https://www.notion.so/dodo-elice/API-918e682be25b4fdab4cbe56bc3c05795

<br />

## DB 설계
https://www.notion.so/dodo-elice/DB-e095aeaa41c949f88f8d06aae3a67984

<br />

## 주요 기술

### Front-End
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> &nbsp;
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"> &nbsp;
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">

### Back-End 
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=css3&logoColor=white"> &nbsp;
<img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=css3&logoColor=white"> &nbsp;
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=css3&logoColor=white">

### 개발도구
<img alt="gitlab" src ="https://img.shields.io/badge/gitLab-FC6D26.svg?&style=for-the-badge&logo=GitLab&logoColor=FFFFFF"/> &nbsp;
<img alt="git" src ="https://img.shields.io/badge/git-f85832.svg?&style=for-the-badge&logo=Git&logoColor=ffffff"/>&nbsp;
<img alt="discord" src ="https://img.shields.io/badge/discord-5865F2.svg?&style=for-the-badge&logo=Discord&logoColor=333333"/>&nbsp;

<br>


## 구현 기능

### 회원가입, 로그인, 회원정보 수정
- 가입 시, 카카오 우편번호 API를 이용하여 주소 정보를 받을 수 있습니다.
- 구글 OAuth 인증을 이용한 소셜 로그인을 할 수 있습니다.
- 정규표현식을 이용하여 로그인 및 회원가입 시 이메일, 휴대번호를 검증할 수 있습니다.
<div>
  <img src="https://user-images.githubusercontent.com/82688516/211472198-f15694e0-9c5c-4819-9a13-457619f655c7.png" alt="로그인" width='350px' height='250px'/>
  <img src="https://user-images.githubusercontent.com/82688516/211472160-0fbf2676-3d25-4d3f-8a5f-7cee8ae6db49.png" alt="회원가입" width='350px' height='250px'/>
  <img src="https://user-images.githubusercontent.com/82688516/211472172-c36c6802-17a5-48c7-9cfe-0926d0acab71.png" alt="회원정보 수정" width='350px' height='250px'/>
</div>
<br />
<br />

### 상품 목록 및 상품 상세 정보
- fetch API를 이용하여 상품 목록 및 상품 상세 정보를 비동기적으로 받아온 후 페이지를 구현하였습니다.
<div>
  <img src="https://user-images.githubusercontent.com/82688516/211472844-a9be89d2-7328-4bd9-9e9a-806ad12b4ce7.png" alt="상품 목록" width='350px' height='250px'/>
  <img src="https://user-images.githubusercontent.com/82688516/211472848-1002303f-b29a-4cb4-9327-8f29de8205e9.png" alt="상품 상세" width='350px' height='250px'/>
</div>
<br />
<br />

### 장바구니
- sessionStorage와 fetch API를 이용하여 장바구니에 상품을 담고 주문할 수 있습니다.
<div >
  <img src="https://user-images.githubusercontent.com/82688516/211473478-3df16dc3-6d3c-4e26-ac55-625bca196979.png" alt="장바구니" width='350px' height='250px'/>
</div>
<br />
<br />

### 주문 및 주문 조회, 리뷰
- 상품 주문 시, 유저의 주소 정보를 불러올 수 있습니다.
- fetch API를 이용하여 주문한 상품 목록을 조회할 수 있습니다.
- 주문한 상품에 대한 리뷰를 작성할 수 있습니다.
<div >
  <img src="https://user-images.githubusercontent.com/82688516/211473500-b54d4454-24a0-43d1-9b0e-ff66aa8cc145.png" alt="주문 페이지" width='350px' height='250px'/>
  <img src="https://user-images.githubusercontent.com/82688516/211473521-6812b328-d828-421f-b39c-902ae984d7cd.png" alt="주문조회" width='350px' height='250px'/>
  <img src="https://user-images.githubusercontent.com/82688516/211473538-7a04826c-64b8-4871-a5a0-206e0a57d8cf.png" alt="리뷰관리" width='350px' height='250px'/>
</div>
<br />
<br />

### 관리자 페이지

<table>
  <tr>
    <th>공지사항 관련 CRUD 가능</th>
    <th>상품 관련 CRUD 가능</th>
  </tr>
  <tr>
    <td> <img src="https://user-images.githubusercontent.com/82688516/211474682-e2b60379-9fb0-4785-9279-777b90a2ec35.png" alt="공지사항 관리" width = 350px height = 250px ></td>
    <td><img src="https://user-images.githubusercontent.com/82688516/211474702-84b192d7-62d9-4ef7-b2c8-fb6beac45e2e.png" alt="상품 관리"  width = 350px height = 250px></td>
   </tr> 
   <tr>
    <th>주문 관련 CRUD 가능</th>
    <th>카테고리 관련 CRUD 가능</th>
  </tr>
   <tr>
    <td><img src="https://user-images.githubusercontent.com/82688516/211474747-9a40e938-4094-45c4-86b5-7977402eeb60.png" alt="주문 관리"  width = 350px height = 250px></td>
    <td><img src="https://user-images.githubusercontent.com/82688516/211474780-959a9d0a-fe22-4b95-b851-8d584f73a537.png" alt="카테고리 관리" width = 350px height = 250px></td>
  </tr>
</table>

## 제작자

| 이름 | 담당 업무 |
| ------ | ------ |
|배은지| 프론트엔드|
|진형빈| 프론트엔드|
|최정훈| 프론트엔드|
|김정은| 백엔드|
|최수혁| 백엔드|

