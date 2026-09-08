# StockPilot — Frontend

React frontend for [StockPilot](https://github.com/harshil678/StockPilot), a cryptocurrency trading and investment platform. Handles authentication (with email OTP 2FA), live market browsing, buy/sell trading, portfolio tracking, an in-app wallet with Razorpay/Stripe top-ups, withdrawals, and watchlists.

> This repo is the client only. It requires the [StockPilot backend](https://github.com/harshil678/StockPilot) running locally (or deployed) to function — see [Backend Setup](#backend-setup) below.

---

## Features

- **Authentication** — signup/signin, JWT stored client-side, email OTP two-factor verification, forgot-password flow
- **Market Data** — live coin listings, top-50, trending, search, and per-coin price charts (via the backend's CoinGecko integration)
- **Trading** — buy/sell orders against live prices, real-time portfolio (holdings) view
- **Wallet** — balance display, wallet-to-wallet transfers, deposits via Razorpay or Stripe
- **Withdrawals** — request withdrawals against wallet balance, manage payout bank details
- **Watchlist** — track coins of interest
- **Admin** — withdrawal approval screen (built; not yet wired into routing — see [Known Issues](#known-issues))

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Routing | React Router v6 |
| State Management | Redux + Redux Thunk |
| HTTP Client | Axios |
| UI Components | shadcn/ui, Tailwind CSS |
| Charts | (see `StockChart.jsx`) |

---

## Project Structure

```
src/
├── assets/                  # Images/logos
├── components/
│   ├── Home/                # Landing page, asset table, price chart
│   ├── logo/                # Payment provider logos
│   ├── pages/                # Route-level pages (Portfolio, Wallet, Withdrawal, etc.)
│   │   ├── Admin/            # Admin withdrawal approval screen
│   │   ├── Dwarpal/           # Auth pages (Login, Signup, ForgotPassword)
│   │   └── NotFound/
│   ├── partials/             # Navbar, Sidebar, and feature-specific forms
│   │   ├── PaymentDetails/
│   │   ├── Profile/
│   │   ├── Trade/
│   │   └── wallet/
│   └── ui/                   # shadcn/ui primitives (button, card, dialog, table, etc.)
├── lib/                      # Utility helpers
├── State/                    # Redux slices — one folder per domain
│   ├── Asset/  Auth/  Coin/  Order/  Wallet/  Withdrawal/
│   └── Store.js
├── App.jsx
└── main.jsx
```

Each `State/<Domain>/` folder follows the same three-file pattern: `Action.js` (thunks calling the backend API), `ActionType(s).js` (action type constants), and `Reducer.js` (state updates).

---

## Getting Started

### Prerequisites
- Node.js 18+
- The [StockPilot backend](https://github.com/harshil678/StockPilot) running on the backend API

### Setup

```bash
git clone <this-repo-url>
cd stockpilot-frontend
npm install
npm run dev
```

The app runs on Vite's default port, matching the backend CORS config.

### Backend Setup

This frontend expects the backend API at the backend API. Follow the [backend README](https://github.com/harshil678/StockPilot) to get it running, including setting the required environment variables (DB credentials, JWT secret, Razorpay/Stripe keys, mail credentials).

---


## Author

**Harshil** — built as the client for the StockPilot trading platform, focused on Redux-based state management and integrating a multi-step auth flow (JWT + email OTP 2FA) with a Spring Boot backend.