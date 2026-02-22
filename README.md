# LOST and FOUND

> 도심의 라이프스타일에 원래 있던 것처럼. 루즈하게, 자연스럽게.

Seoul-based urban essentials brand — SS 2025 launching soon.

🔗 **Live**: [wonyoung-R.github.io/lostandfound](https://wonyoung-R.github.io/lostandfound)

---

## Tech Stack

- **Framework**: Next.js 16 (Static Export)
- **Styling**: Tailwind CSS
- **Waitlist**: Google Sheets via Apps Script
- **Deployment**: GitHub Pages

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

`.env.local` 파일 생성 후 아래 값 입력:

```env
NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/...
```

## Deployment

`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드 후 GitHub Pages에 배포합니다.

GitHub 레포 → Settings → Secrets and variables → Actions에서 아래 시크릿 등록 필요:
- `APPS_SCRIPT_URL`: Google Apps Script 웹 앱 URL
