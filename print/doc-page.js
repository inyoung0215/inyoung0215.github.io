// doc-page custom element — 최소 정의
// CSS의 `doc-page:not(:defined){visibility:hidden}` 규칙을 해제하기 위한 등록
if (!customElements.get('doc-page')) {
  customElements.define('doc-page', class extends HTMLElement {
    connectedCallback() {
      // size, margin 속성은 CSS @page 규칙이 처리하므로 별도 로직 불필요
      // 필요 시 확장 가능
    }
  });
}
