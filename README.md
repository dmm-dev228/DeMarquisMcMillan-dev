# DeMarquis McMillan | Software Engineering Portfolio

My personal software engineering portfolio, built to showcase my projects, technical experience, engineering decisions, and approach to building production-ready software.

The portfolio goes beyond project screenshots by presenting detailed engineering case studies covering architecture, implementation decisions, technical challenges, tradeoffs, deployment, and lessons learned.

## Live Portfolio

**Website:** [demarquismcmillan.com](https://demarquismcmillan.com)

> The custom domain is currently being configured. The portfolio is deployed through AWS Amplify.

## About the Portfolio

This portfolio serves as a central place to explore my work as a software engineer.

It includes:

- Detailed software engineering project case studies
- Full-stack, backend, frontend, and C++ projects
- System architecture and implementation breakdowns
- Engineering challenges and technical decisions
- Project demo videos
- Professional experience and leadership background
- Resume and contact information
- Responsive desktop and mobile design

## Featured Projects

### CogniHaven

An AI-powered cognitive wellness and daily support platform built as a full production system.

**Technologies:** Java, Spring Boot, Spring Security, React, MySQL, Docker, OpenAI API

Key engineering areas include:

- JWT authentication and account security
- Context-aware AI workflows
- Cognitive games and performance analytics
- AI-generated insights and recommendations
- Medication and goal reminder scheduling
- Community features and moderation
- REST API architecture
- Relational data persistence
- Automated testing and CI/CD
- Distributed cloud deployment

### ConnectM

A configurable C++ strategy game based on Connect Four concepts.

**Technologies:** C++, Minimax, Alpha-Beta Pruning

The project includes customizable board dimensions and win conditions along with an AI opponent using game-tree search and pruning.

### Weather Subscription Platform

A multithreaded client-server application written in C++.

**Technologies:** C++, TCP Sockets, Threads, Mutexes

The system supports authentication, subscriptions, online users, direct messaging, group messaging, password management, and concurrent client connections.

### Stock & Housing Regression Engine

C++ linear regression programs built to analyze real-world datasets and generate predictions.

**Technologies:** C++, Linear Regression, libcurl, CSV/Data Processing

The projects explore regression calculations, normalization, external data retrieval, and prediction using housing and stock-market datasets.

### Munchify

A full-stack recipe discovery and management application.

**Technologies:** React, Node.js, Express, MySQL, JWT

Features include recipe discovery, authentication, saved recipes, relational persistence, and integration with an external recipe API.

## Portfolio Tech Stack

### Frontend

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router
- Motion for React

### Deployment

- AWS Amplify
- GitHub
- Git-based continuous deployment
- Custom domain and DNS configuration

## Project Structure

```text
src/
├── assets/
├── components/
├── pages/
│   └── projects/
└── ...
```

The portfolio uses reusable React components while dedicated project pages provide deeper engineering case studies for individual applications.

## Local Development

Clone the repository:

```bash
git clone https://github.com/dmm-dev228/DeMarquisMcMillan-dev.git
```

Navigate into the project:

```bash
cd DeMarquisMcMillan-dev
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide the local development URL in the terminal.

## Production Build

Create a production build with:

```bash
npm run build
```

## Deployment

The production portfolio is deployed through **AWS Amplify** and connected to the GitHub repository.

Updates pushed to the production branch trigger a new Amplify build and deployment.

The custom domain is managed separately through DNS and connected to the Amplify deployment using AWS-managed SSL.

## Contact

**DeMarquis McMillan**

Software Engineer

- Portfolio: [demarquismcmillan.com](https://demarquismcmillan.com)
- GitHub: [dmm-dev228](https://github.com/dmm-dev228)
- LinkedIn: Available through the portfolio contact page
- Email: Available through the portfolio contact page

## License

This repository contains the source code for my personal portfolio. The design, written content, and personal branding are intended for portfolio use.