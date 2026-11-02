// =====================================================================
//  운동 상태 탐구실 설정 파일
//  · 처음 한 번만 채우면 됩니다. 새 버전을 받으면 index.html만 바꿔 올리고
//    이 config.js는 그대로 두세요.
//  · SUPABASE_ANON_KEY 에는 anon public 키(또는 sb_publishable_ 로 시작하는 키)만!
//    service_role / secret 키는 절대 넣지 마세요.
// =====================================================================
window.APP_CONFIG = {
  SUPABASE_URL: "https://rbpofwlpfxnsicyoxkao.supabase.co",        // 예: "https://abcdefgh.supabase.co"
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJicG9md2xwZnhuc2ljeW94a2FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzMTU4NzgsImV4cCI6MjEwNjg5MTg3OH0.gpVo5qIJ2PelW0TjWQEEKmVglVOH8oSVKe1SPiikkM0",   // 예: "eyJhbGciOi..." 또는 "sb_publishable_..."
  GRADE: 1,                // 학년 (학번 첫 자리)
  CLASS_COUNT: 7,          // 반 수
  YEAR: 2026               // 저작권 표시 연도
};
