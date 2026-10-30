/* =====================================================
   HAN JI YUN — Portfolio interactions
   필요한 값은 아래 설정 부분에서 쉽게 변경할 수 있습니다.
===================================================== */

// 01. 이메일 설정: 본인의 실제 이메일로 수정하세요.
const EMAIL = 'your-email@example.com';

const header = document.getElementById('header');
const themeToggle = document.getElementById('themeToggle');
const copyEmail = document.getElementById('copyEmail');
const copyFeedback = document.getElementById('copyFeedback');

// 02. 스크롤 위치에 따라 헤더 배경 표시
function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 30);
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// 03. 테마 전환: 선택 상태를 브라우저에 기억
function setTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', isDark ? '라이트 모드 켜기' : '다크 모드 켜기');
  localStorage.setItem('hjy-theme', isDark ? 'dark' : 'light');
}
setTheme(localStorage.getItem('hjy-theme') === 'dark');
themeToggle.addEventListener('click', () => {
  setTheme(!document.body.classList.contains('dark'));
});

// 04. 이메일 클릭 시 클립보드 복사
// 로컬 파일(file://)에서는 클립보드 권한 제한이 있을 수 있습니다.
document.getElementById('emailText').textContent = EMAIL;
copyEmail.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    copyFeedback.textContent = '이메일 주소가 복사되었습니다.';
  } catch (error) {
    copyFeedback.textContent = '복사할 수 없습니다. 이메일 주소를 직접 선택해 주세요.';
  }
});

// 05. 연도 자동 갱신
document.getElementById('year').textContent = new Date().getFullYear();

// 06. 아직 링크를 설정하지 않은 영상 카드 안내
// 실제 영상 URL을 넣고 data-placeholder 속성을 제거하세요.
document.querySelectorAll('[data-placeholder="true"]').forEach((card) => {
  card.addEventListener('click', (event) => {
    event.preventDefault();
    alert('영상 링크를 연결하면 이곳에서 작품을 볼 수 있습니다.');
  });
});
