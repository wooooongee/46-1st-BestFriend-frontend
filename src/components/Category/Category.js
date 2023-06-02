const PLANTS_SUBCATEGORY = [
  { id: 1, title: '초보자도 키우기 쉬워요' },
  { id: 2, title: '선물하기 좋아요' },
  { id: 3, title: '공기를 정화해줘요' },
  { id: 4, title: '어두운 곳에서도 잘 자라요' },
];

const POTS_SUBCATEGORY = [
  { id: 5, title: '도자기 화분' },
  { id: 6, title: '토분' },
  { id: 7, title: '유약분' },
];

const TOOLS_SUBCATEGORY = [
  { id: 8, title: '스프레이' },
  { id: 9, title: '물뿌리개' },
  { id: 10, title: '모종삽' },
];

export const MAIN_CATEGORIES = {
  plants: {
    title: '식물',
    path: '/list?category=1,2,3,4',
    subCategories: PLANTS_SUBCATEGORY,
  },
  pots: {
    title: '화분',
    path: '/list?category=5,6,7',
    subCategories: POTS_SUBCATEGORY,
  },
  tools: {
    title: '관리상품',
    path: '/list?category=8,9,10',
    subCategories: TOOLS_SUBCATEGORY,
  },
};
