## react-design-pattern
- 리액트를 사용하여 개발하는 프론트엔드 개발자로서 리액트와 관련된 디자인 패턴을 공부하는 것이 재사용 가능한 컴포넌트를 만들거나 유지 보수하기 좋은 코드를 작성하는 대 도움이 될 것 같아 디자인 패턴 스터디를 위한 레포지토리를 생성했습니다.
- src/[디자인 패턴 이름] 폴터에 각 패턴의 예시를 공부할 예정입니다.
- 스터디한 디자인 패턴과 장단점은 리드미에서 확인 할 수 있습니다.

### 1. Presentational and Container Component Pattern 
####[2022.11.21]
- 이 패턴은 컴포넌트를 ‘Conatainer’와 ‘Presentational’ 두 카테고리로 나눕니다.
- Presentational은 뷰 역할을 담당하고 하고 Conatainer는 동작하는 역할을 담당합니다.
- 패턴을 만든 Dan Abramov가 이제(2019년)는 추천하지 않는 패턴으로 사용하면 안되는 것은 아니나 지양하는 것이 좋다고 생각합니다.
#### 장점
- 관심사를 분리 할 수 있다.
    - 기능과 UI가 명확하게 분리되기 때문에 코드의 구조를 이해하기 쉬워지고 유지보수, 재사용성이 뛰어나다.
- 재사용성을 높일 수 있다.
    - Presentational 컴포넌트는 다른 부분과 의존성을 갖지 않기 때문에 다른 container에서 마음껏 사용할 수 있다.
- 마크업이 편하다.
    - 이 패턴을 사용하면 ‘레이아웃 컴포넌트가’ 추출될 수 밖에 없다. 이 레이아웃 컴포넌트를 통해 똑같은 마크업을 여러번 작성하는 것을 방지할 수 있다.
#### 단점
- 필요하지 않는데 맹목적으로 패턴을 강제하는 현상이 있다
- 로직을 분리하는 작업을 이제는 Hooks를 통해 할 수 있다. (Hooks로 로직을 사용하게 되면 view 뿐만 아니라 로직까지 재사용이 가능하다는 이점을 가져갈 수 있다.)
### 2. Conditional Rendering
####[2022.11.22]
- 리액트의 조건부 렌더링 디자인 패턴은 말 그대로 특정 조건이 충족되면 해당 결과가 나오게 한다.
- 공부를 하면서 느낀 점은 조건부 렌더링 디자인 패턴은 리액트로 개발을 하면서 자연스럽게 사용하는 부분들이 많았다고 느꼈다.
- 이번 기회를 통해 지금까지 코드를 작성했던 방식이 검증 받은 하나의 디자인 패턴이라는 것을 알게 되었다.
- 리액트에서 소개하는 조건부 렌더링의 방법은 4가지가 있다.
  1. if else 패턴
     - CRP1, if 문을 통해 렌더링 할 컴포넌트를 선택
     - 부분적인 조건부 렌더링이 불 가능하다.
  2. : ? 패턴
     - CRP2, 삼항연산자를 사용해 렌더링 할 컴포넌트를 선택
  3. && 패턴
     - CRP3, [조건] && [컴포넌트]를 통해 컴포넌트를 렌더링 할지 선택
  4. HOC 패턴
     - CRP4, 리액트의 특징을 이용한 가장 특이한 패턴이다.
     - 함수에 매개변수로 컴포넌트를 넣고 컴포넌트로 선언하여 보낸 props에 값에 따라 조건부 렌더링
     - 해당 스터디에서는 렌더링만 했지만 HOC 패턴을 사용할 경우 동일 한 로직을 반복하는 컴포넌트를 하나의 컴포넌트 로직 안에서 처리할 수 있게 한다.
### 3. View Asset Pattern
####[2022.11.23]
- React는 JSX를 사용하기 때문에 UI 개발자와 FE 개발자의 협업 시 충돌이 발생하는 경우가 잦다. 이런 협업 문제를 해결 하기 위해 Presentatinal Container Pattern 등 디자인 패턴이 존재하지만 대부분 비즈니스 로직의 관점에서 관심사를 분리하여 View 설계에는 도움이 되지만 역할 분담에 따른 협업 과정 문제를 해결하는데는 개발자 경험에 따른 차이가 발생하기 때문에 VAC Pattern을 사용한다.
1. VAC의 특징
- 반복이나 조건부 노출, 스타일 제어와 같은 렌더링과 관련된 처리만 수행
- 오직 props를 통해서만 제어되며 스스로 상태를 관리하거나 변경하지 않는 stateless 컴포넌트
- 이벤트에 함수를 바인딩 할 때 어떠한 추가 처리도 하지 않는다.
2. 유의사항
- props 네이밍은 데이터 친화적인 형태 보다 렌더링에 직관적인 형태로 사용하는 것이 좋다.
- 여러 정보를 사용하는 경우 개별 전달보다 조합된 결과만 전달하는 것이 좋다.
    - ex) *isLogin && isOwner* (x)*, showEditButton: isLogin && isOwner* (o)
- Container 컴포넌트에 로직을 위임하는 설계 방식을 따르기 때문에 Presentational과 Container 컴포넌트 패턴의 한 종류라고 볼 수 있다.
### 4. Provider Design Pattern
####[2022.11.25]
- Provider Design Pattern의 목적은 다양한 구성요소에서 전역 데이터를 공유하는 것이다.
- 이 패턴의 작동 방식을 이해하려면 먼저 React의 Context API를 이해해야 한다.
- 해당 패턴은 Props Drilling을 피하기 위해 사용한다.
- 보통 redux 같은 상태관리 라이브러리를 사용하지만 이번에 경우 Cotext API를 사용해 패턴을 구현했다.
### 5. Passing Down Props
####[2022.11.26]
- props를 하위 컴포넌트로 전달할 때 사용하면 효과적으로 props를 전달할 수 있다.

### 6. Custom Hooks Pattern
####[2022.11.27] 
- Custom Hooks 패턴은 [**Presentational and Container Component Pattern**](https://www.notion.so/Presentational-and-Container-Component-Pattern-6f2f5d5296f544b6950a9eecf2de963f)을 Hook으로 관리하는 걸 말한다.
- 기존 패턴에서는 공통 로직이 발생했을 때 다른 container 컴포넌트로 로직을 넘겨주지 못했는데, hook으로 로직을 관리하게 되면 UI 재사용을 넘어 로직까지 재사용이 가능해진다.
- 즉 기존 컨테이너의 역할을 Hooks 컴포넌트가 대신 하면서 로직의 재사용까지도 가능하게 된 것

### 7. Atomic Design Pattern
####[2023.01.03]
- UI 컴포넌트를 가장 작은 단위로 쪼개고 합치며 UI를 마치 레고 블럭 쌓듯 만들어 나가는 방법
- Atom > Molecule > Organism > Template > Page
- 컴포넌트 구조를 위의 순서대로 정한다.