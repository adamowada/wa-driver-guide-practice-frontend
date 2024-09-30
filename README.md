# WA Driver Guide Practice Frontend

This repository is the frontend for an application designed to help native Chinese speakers study the Washington Driver Guide for their knowledge test required to obtain a driver's license. The application generates new practice questions based on the Washington Driver Guide using GPT-4 offered by OpenAI.

Deployments and Links:

- Frontend repository [link](https://github.com/adamowada/wa-driver-guide-practice-frontend)
- Frontend deployment on Vercel [link](https://wa-driver-guide-practice-frontend.vercel.app/)
- API repository [link](https://github.com/adamowada/wa-driver-guide-practice-api)
- API deployment on Vercel [link](https://wa-driver-guide-practice-api.vercel.app/)

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Usage](#usage)
4. [Learn More](#learn-more)
5. [Contributing](#contributing)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (v12.x or later)
- npm (v6.x or later)

### Installation

Clone the repository:

```bash
git clone https://github.com/adamowada/wa-driver-guide-practice-frontend.git
cd wa-driver-guide-practice-frontend
```

Install the dependencies:

```bash
npm install
```

### Running the Development Server

Start the development server with the following command:

```bash
npm run dev
```

You can also use `yarn`, `pnpm`, or `bun` if you prefer:

```bash
# with yarn
yarn dev

# with pnpm
pnpm dev

# with bun
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```bash
├── README.md
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── src
│   ├── app
│   │   ├── api
│   │   │   ├── create-questions
│   │   │   │   └── route.js
│   │   │   └── get-questions
│   │   │       └── route.js
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── review
│   │       └── page.js
│   └── components
│       ├── Header.jsx
│       └── Question.jsx
├── tailwind.config.js
└── vercel.json
```

### Significant Files and Directories

- `src/app/api`: Contains API routes for creating and getting questions.
- `src/app/globals.css`: Global CSS styles.
- `src/app/layout.js`: Root layout component.
- `src/app/page.js`: Main page component where questions are generated.
- `src/app/review/page.js`: Review page component where previous questions are retrieved.
- `src/components`: Contains reusable React components like Header and Question.

## Usage

Once the development server is running, you can start using the application by navigating to the main page:

1. **Generate New Questions**:
   - Click on "创建10个新问题" to generate 10 new questions using GPT-4.

2. **Review Previous Questions**:
   - Navigate to the review page by clicking "复习已看过的问题" in the header. Click "检索之前的问题" to retrieve previously generated questions.

## Learn More

To learn more about Next.js and other technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Utility-first CSS framework.

## Contributing

Contributions are welcome! Please open an issue or create a pull request if you want to contribute.
