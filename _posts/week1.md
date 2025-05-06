---
title: "[Week1] CSS Cascading"
excerpt: "CSS에서 여러 스타일 규칙이 하나의 요소에 적용될 때, 어떤 스타일이 실제로 적용될지를 결정하는 원칙입니다. 이를 “계단식”이라고 부르며, 3가지 기준에 따라 우선순위를 정합니다."
coverImage: "/assets/blog/defaultImage/book.png"
date: "2024-10-20"
author:
  name: 이석찬
  picture: "/assets/blog/defaultImage/paduck.png"
ogImage:
  url: "/assets/blog/ogImage/og_image.png"
category: "Weekly"
---

CSS에서 여러 스타일 규칙이 하나의 요소에 적용될 때, 어떤 스타일이 실제로 적용될지를 결정하는 원칙입니다. 이를 “계단식”이라고 부르며, 3가지 기준에 따라 우선순위를 정합니다.

## 1. 명시도(Specificity)

선택자가 얼마나 구체적인지를 수치로 따져서, 점수가 높은 선택자의 스타일이 우선 적용됩니다.

- 인라인 스타일: 점수 1000
- ID 선택자: 점수 100
- 클래스, 속성, 가상 클래스: 점수 10
- 태그, 가상 요소: 점수 1

```js
h1 { color: blue; }       → 점수 1
.title { color: red; }    → 점수 10
#header { color: green; } → 점수 100
```

## 2. 출처(Origin)

스타일이 어디서 작성되었는가에 따라 우선순위가 달라집니다.

- 브라우저 기본 스타일 (가장 낮음)
- 외부 CSS / 내부 <style> (기본)
- 인라인 스타일 (style="") (높음)
- !important가 붙은 스타일 (가장 높음)

## 3. 선언 순서(Order)

같은 명시도, 같은 출처라면 나중에 선언된 스타일이 적용됩니다.

```js
.box { color: red; }
.box { color: blue; } → 이게 적용됨
```

## 우선순위 요약 (높을수록 우선)

!important > 인라인 스타일 > ID > 클래스/속성 > 태그 > 브라우저 기본
같은 우선순위라면 → 나중에 작성된 스타일이 적용됨
