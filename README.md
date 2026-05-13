# inyoung0215.github.io

> **황인영 · Inyoung Hwang** — Backend Developer Portfolio
>
> [https://inyoung0215.github.io](https://inyoung0215.github.io)

구조를 설계하고 경험을 구현하는 백엔드 개발자, 황인영의 포트폴리오 사이트입니다.

---

## 소개

- **이름** 황인영 (Inyoung Hwang)
- **직무** 서비스 백엔드 개발자 · 3년차
- **소속** 더즌 (Dozn) / 키오스크 사업본부
- **이전 커리어** UX/UI Designer · 1y
- **이메일** hinyoung0215@gmail.com
- **GitHub** [@inyoung0215](https://github.com/inyoung0215)
- **Tech Blog** [velog.io/@nyoung215](https://velog.io/@nyoung215)

## 페이지 구성

| # | 섹션 | 내용 |
|---|---|---|
| 01 | **Intro** | 한 줄 소개 + Kotlin 터미널 코드 카드 |
| 02 | **About** | 디자이너 → 백엔드 전향 스토리 |
| 03 | **Skills** | Language · Backend · Data/Messaging · DevOps |
| 04 | **Career** | 더즌 (실무 경력, 묵직한 타임라인 카드) |
| 05 | **Side Projects** | 부트캠프·팀 프로젝트 4건 (컴팩트 카드형) |
| 06 | **Education** | 패스트캠퍼스 부트캠프 · 가톨릭대학교 |
| 07 | **Background** | 이전 UX/UI Designer 경력 3건 |
| 08 | **Contact** | Email · GitHub · Tech Blog |

## 기술 구성

- **HTML / CSS / Vanilla JS** — 빌드 도구 없이 단일 `index.html`
- **Pretendard Variable** · **JetBrains Mono** · **Fraunces** 웹폰트
- **IntersectionObserver** — 스크롤 active 네비 · 진입 시 fade-in
- **반응형** — 1440 / 1080 / 820 / 480px 4단 브레이크포인트
- **SEO** — Open Graph · Twitter Card · canonical · 메타 description

## 로컬에서 미리보기

```bash
# 1) Python 정적 서버
python3 -m http.server 8080
# → http://localhost:8080

# 2) 또는 그냥 브라우저로 열기
open index.html
```

## 배포

`main` 브랜치에 푸시되면 **GitHub Actions**가 자동으로 GitHub Pages에 배포합니다.
워크플로는 `.github/workflows/deploy.yml` 참조.

> 최초 1회: GitHub repo Settings → Pages → **Source: GitHub Actions** 로 설정 필요.

## 콘텐츠 업데이트

- 더즌 프로젝트 카드(`Mockup` 배지가 붙은 카드 3개)는 `index.html`의 `<!-- TODO -->` 주석을 따라 실 내용으로 교체합니다.
- 새 사이드 프로젝트는 `id="side-projects"` 섹션의 `.sp-card` 패턴을 복사해 추가합니다.
- 새 케이스 스터디는 `<script>` 내 `cases` 객체에 키를 추가하고, 해당 카드의 `<button data-case="...">` 만 연결하면 모달이 동작합니다.

---

© 2026 Inyoung Hwang
