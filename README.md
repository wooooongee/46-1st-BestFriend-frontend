# Project grön

![waving](https://capsule-render.vercel.app/api?type=waving&height=200&fontAlignY=40&text=grön&color=gradient)

#### \*Nike 웹사이트를 모델링한 프로젝트입니다.

## 🧚‍♂️ 개발 기간 및 인원

- 개발 기간 : 2023/05/26 ~ 2023/06/09
- 개발 인원 : 프론트엔드 3명 , 백엔드 1명
  - Product Manager: 김혜중(B)
  - Project Manager: 조혜진(F)
  - Teammates: 이재웅(F), 장건웅(F)
- 깃헙 레포지토리
  - [Frontend](https://github.com/wecode-bootcamp-korea/46-1st-BestFriend-frontend)
  - [Backend](https://github.com/wecode-bootcamp-korea/46-1st-BestFriend-backend)

## 🪴 서비스 소개

### 1. 기획의도

- 나이키처럼 건강한 라이프 스타일을 추구하는 고객을 타겟으로 선정
- 나이키 웹사이트 UX,UI 디자인의 강점을 살려 화면 구성
- 식물에 대해 잘 모르는 사람도 니즈에 맞는 식물을 쉽게 고를 수 있도록 기능 기획
- 식물에 대한 진입장벽을 낮추고 편리하게 식물을 구매할 수 있는 서비스

### 2. 서비스 개요

- 서비스명 : grön
- 판매상품 : 식물, 화분, 관리도구
- 고객 : 반려식물 집사가 되고 싶은 누구나

## ⚡️ 구현 기능

내가 구현한 기능은 <span style="color:lightgreen">lightgreen</span> 색상으로 표기

1. 회원가입/로그인

   ![signup](https://github.com/wecode-bootcamp-korea/46-1st-BestFriend-frontend/assets/123567359/21243327-5971-4bd0-b34d-1ea888ab5324)
   <p>✅ 유효성 검사 후 API 요청 분기 처리</p>

   ![login-성공시](https://github.com/wooooongee/apple-shopping/assets/123567359/8cc84d50-6826-41ab-8388-ee9dd3ffeffd)

   <p>로그인이 성공하면 토큰 저장 후 메인으로 이동</p>
   <p>로그인이 실패하면 토스트 팝업으로 알림</p>

2. 내비게이션 바 드롭다운 메뉴

   ![1-1 메인 동영상 _ Nav 드롭다운](https://github.com/wecode-bootcamp-korea/46-1st-BestFriend-frontend/assets/123567359/ba0e2bec-df47-4ce3-aa32-dd405bfcec2b)
   <p>✅ useState hook과 조건부 렌더링을 통해 내비게이션 바 각 메뉴에 onMouseOver 이벤트 발생시 Dropdown 메뉴 노출</p>
   <p>✅ video 태그로 동영상 URL을 삽입하고 반복재생, 자동재생, 음소거 설정</p>
   <p>✅ useState hook을 활용하여 상품 카드 캐러셀 우측 상단의 버튼을 누를 때마다 좌우로 이동</p>

3. <span style="color : lightgreen">이미지 캐러셀</span>

   ![ezgif-4-1f62fbcc6c](https://github.com/wooooongee/apple-shopping/assets/123567359/3c82a8e0-9ce1-46ec-901c-4504253268bf)

   ✅ fetch(GET) 메소드를 통해 data를 state에 저장 후 Array.map 이용하여 데이터 바인딩

   ✅ useRef를 이용해 DOM에 접근하여 슬라이드 기능 구현

4. 상품 카테고리, 필터, 정렬, 페이지네이션, 검색

<img width="1882" alt="4-1 카테고리-식물" src="https://github.com/wooooongee/apple-shopping/assets/123567359/598754bc-dc4f-4e5c-ac9b-73f78751e345">

    ✅ useSearchParams hook을 활용해 쿼리스트링에 변화를 주는 방식으로 구현

    ✅ 좌측의 각 서브카테고리를 선택하면 URL의 쿼리스트링이 변경되고 해당 서브카테고리에 속한 상품 리스트가 노출

  <img src="https://github.com/wooooongee/apple-shopping/assets/123567359/1aa7b7f0-30bc-42df-9b12-cfd394d629f6">
  
  ![4-3 정렬](https://github.com/wooooongee/apple-shopping/assets/123567359/40bb10f2-467f-4462-aeb3-35d9029f132e)

✅ useSearchParams hook을 활용해 URL의
쿼리스트링을 변경시켜 필터&정렬 기능 구현

✅ useState hook을 활용해 정렬 버튼을 토글 형태로 구현

✅ 필터링 부분 UI가 식물 카테고리에서만 그려지도록 조건부 렌더링 적용

![4-5 검색](https://github.com/wooooongee/apple-shopping/assets/123567359/def36d32-9a83-40a5-a99e-47faa958949b)

✅ 쿼리스트링을 활용해 검색 기능 구현

<img width="1622" alt="4-4 페이지네이션" src="https://github.com/wooooongee/apple-shopping/assets/123567359/d9170959-dbf0-4b60-9fbc-b9aed6a2551d">

✅ useSearchParams hook을 활용해 URL 쿼리스트링의 ‘offset’ 값을 동적으로 변경하여 페이지네이션 기능 구현

5. <span style="color:lightgreen">상품 상세페이지</span>

<img width="517" alt="스크린샷 2023-06-10 오후 8 22 42" src="https://github.com/wooooongee/apple-shopping/assets/123567359/027d5024-12fc-4fca-8e5f-6105acd987b2">

✅ useParams Hook과 fetch(GET)메소드를 사용하여 동적 라우팅으로 상품 정보 데이터 바인딩

![5-1](https://github.com/wooooongee/apple-shopping/assets/123567359/4dbcc1c2-d783-4dbe-9549-c65cc23d1604)
![5-2](https://github.com/wooooongee/apple-shopping/assets/123567359/3a7350e8-f29c-4665-83cf-494ebeb0c434)

✅위시리스트 버튼 상태를 useState Hook boolean 값으로 저장
버튼 onClick에 setter함수를 사용

✅ 조건부 렌더링을 사용해 fetch(POST,DELETE) 요청

✅ 위시리스트 보기 버튼 클릭시 useNavigate Hook을 사용하여 페이지 전환

![5-3](https://github.com/wooooongee/apple-shopping/assets/123567359/351b7260-1b01-4ebc-b905-b44f7929cff9)

✅ 수량 버튼onClick에 setter함수를 사용하여 리렌더링

✅ 담기 버튼 클릭시 state에 담긴 수량값을 fetch(POST) 요청으로 보냄

![5-5](https://github.com/wooooongee/apple-shopping/assets/123567359/7d77fa2a-4158-4c3f-9386-5866d3d8b82d)

✅ 추천상품 클릭시 useNavigate Hook을 사용하여 페이지 변환

✅ queryString을 사용해 해당 상품과 같은 상세 카테고리인 상품을 추천상품으로 추천

6. <span style="color:lightgreen">장바구니</span>

![7-2,3](https://github.com/wooooongee/apple-shopping/assets/123567359/f5fd64c9-12fe-4d8a-91d5-c11b37fac5af)

![7-4](https://github.com/wooooongee/apple-shopping/assets/123567359/c9c29042-6a2b-4f27-87c0-7ec0c6688616)

✅ fetch(GET) 메소드를 통해 데이터 바인딩

✅ 수량 버튼 onClick에 fetch(PATCH) 요청으로 장바구니 수량 변경
Response 값을 받아 페이지 리렌더링

✅ fetch(DELETE) 메소드를 통해 해당 상품 삭제

![7-1](https://github.com/wooooongee/apple-shopping/assets/123567359/151bb535-7ab7-4148-8c5a-cdf773e82feb)

✅ 조건부 렌더링을 통해 장바구니 비어있을시 UI변경

7. <span style="color:lightgreen">위시리스트</span>

![6-1](https://github.com/wooooongee/apple-shopping/assets/123567359/0eeaa0f4-eddd-4c89-a9bb-52eecb07a43e)

✅ 삭제버튼 클릭시 fetch(DELETE) 메소드를 통해 해당 상품 삭제

✅ 조건부 렌더링을 통해 위시리스트 비어있을시 UI 변경

8. 리뷰

![5-4](https://github.com/wooooongee/apple-shopping/assets/123567359/2821c929-4826-4cb9-aac6-98b48fab8343)

✅ useState hook을 활용해 리뷰 보기/남기기/삭제
기능 구현

✅ API 호출시 headers에 token값을 포함시켜 로그인한 상태에서만 댓글을 남길 수 있고, 본인의 댓글만 삭제 가능

9. 결제

![ezgif-3-454fa77c6e](https://github.com/wooooongee/apple-shopping/assets/123567359/e4be867f-6900-492f-96d7-e135c058b53c)

✅ API 통신 후 데이터 렌더링

✅ 잔여포인트에 따른 분기처리
결제 성공시 메인으로 이동
잔여 포인트 부족하여 결제 실패시 토스트 팝업으로 알림

## 📚 기술 스택

### Frontend

|                                             JavaScript                                             |                                                 React                                                 |                                              scss                                               |                                                 esLint                                                 |                                                 Prettier                                                 |
| :------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: |
| <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/sass-icon.svg" width="65" height="65" /></div> | <img src="https://techstack-generator.vercel.app/eslint-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/prettier-icon.svg" alt="icon" width="65" height="65" /> |

### Backend

|                                             JavaScript                                             |                                                Node.js                                                |                                                    MySQL                                                     |
| :------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: |
| <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/nginx-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="icon" width="65" height="65" /> </div> |

## ⚙️ 협업툴

<div>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat&logo=Slack&logoColor=white"/>
<img src="https://img.shields.io/badge/Trello-0052CC?style=flat&logo=Trello&logoColor=white"/>
<img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"/>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white"/>
<img src="https://img.shields.io/badge/VSCode-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/>
</div>
