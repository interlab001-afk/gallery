// auth-check.js — 모든 페이지에서 로그인 체크
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';

const _FC = {
  apiKey: 'AIzaSyBAHHRv_CWzDXJ2aHrG5uTysDZ7JcfewEk',
  authDomain: 'claude-grok-gallery.firebaseapp.com',
  projectId: 'claude-grok-gallery',
  storageBucket: 'claude-grok-gallery.firebasestorage.app',
  messagingSenderId: '907968891772',
  appId: '1:907968891772:web:50d9f0f9839d949e59b2f9'
};
const _app = initializeApp(_FC, 'auth-check');
const _auth = getAuth(_app);

// 페이지 숨기기 (인증 확인 전)
document.documentElement.style.visibility = 'hidden';

onAuthStateChanged(_auth, user => {
  if (user) {
    document.documentElement.style.visibility = 'visible';
  } else {
    const base = window.location.pathname.replace(/\/[^\/]*$/, '');
    window.location.href = base + '/login.html';
  }
});
