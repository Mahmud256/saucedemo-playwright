# SauceDemo UI Automation Project

This project contains UI automation test scenarios for the SauceDemo website using Playwright with TypeScript.

## Project Information

- Automation Tool: Playwright
- Language: TypeScript
- Design Pattern: Page Object Model (POM)
- Reporting: HTML Report
- Target Website: https://www.saucedemo.com/

---

# Test Scenarios

## Q1 - Locked User Login Validation

- Login using `locked_out_user`
- Verify locked user error message

---

## Q2 - Standard User Purchase Flow

- Login with `standard_user`
- Reset App State
- Add three products to cart
- Verify product names
- Verify total price
- Complete checkout process
- Verify successful order message
- Reset App State again
- Logout

---

## Q3 - Performance Glitch User Purchase Flow

- Login with `performance_glitch_user`
- Reset App State
- Sort products by `Name (Z to A)`
- Add first product to cart
- Verify product names
- Verify total price
- Complete checkout process
- Verify successful order message
- Reset App State again
- Logout

---

# Project Structure

```text
saucedemo-playwright/
│
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── tests/
│   ├── q1.spec.ts
│   ├── q2.spec.ts
│   └── q3.spec.ts
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

# Prerequisites

Before running the project, install:

- Node.js
- VS Code (recommended)

Download Node.js:

https://nodejs.org/

---

# Project Setup

## Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

## Go to Project Folder

```bash
cd saucedemo-playwright
```

## Install Dependencies

```bash
npm install
```

## Install Playwright Browsers

```bash
npx playwright install
```

---

# Run Test Scenarios

## Run All Tests Sequentially

```bash
npx playwright test
```

---

## Run Q1 Only

```bash
npx playwright test tests/q1.spec.ts
```

---

## Run Q2 Only

```bash
npx playwright test tests/q2.spec.ts
```

---

## Run Q3 Only

```bash
npx playwright test tests/q3.spec.ts
```

---

# HTML Report

## Open HTML Report

```bash
npx playwright show-report
```

# Playwright Configuration

The project runs sequentially using:

```ts
workers: 1
```

This ensures:

- All tests run one after another
- Stable execution
- Predictable reporting

---

# Features Implemented

- Playwright with TypeScript
- Page Object Model (POM)
- Reusable Page Classes
- Assertions and Validations
- Sequential Test Execution
- HTML Reporting
- GitHub Repository Support

---

# Author

Mahmudul Hasan Sarkar