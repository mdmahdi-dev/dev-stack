# Dev Stack Builder 🚀

Dev Stack Builder is a responsive React + TypeScript web application that helps developers explore modern web technologies and build their own development stack.

Users can browse available technologies, view their details, and add technologies to their personal stack.

## Live Demo

Add your deployed project link here.

## Features

- 🔍 Explore modern web development technologies with descriptions, categories, ratings, and difficulty levels.
- 🧩 Build a personal technology stack by adding and removing technologies.
- 📱 Fully responsive design with a mobile-friendly navigation menu and responsive technology grid.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React Toastify
- JSON

## React Questions & Answers

### 1. What is React?

React is a JavaScript library for building user interfaces, especially interactive web applications.

### 2. What is JSX?

JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript or TypeScript.

### 3. What are components in React?

Components are reusable building blocks of a React application. They can contain their own structure, logic, and styling.

### 4. What are props in React?

Props are values passed from a parent component to a child component. They allow components to receive and use data from their parent.

### 5. What is state in React?

State is data managed by a React component. When state changes, React can re-render the component with the updated data.

### 6. What is useEffect?

`useEffect` is a React Hook used to perform side effects such as fetching data, updating external systems, or responding to changes in state or props.

### 7. What is the Virtual DOM?

The Virtual DOM is an in-memory representation of the browser DOM. React compares changes in the Virtual DOM and updates the necessary parts of the actual DOM.

## Project Structure

```text
src/
├── components/
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── TechnologyCard.tsx
│   ├── TechnologyGrid.tsx
│   └── YourStack.tsx
│
├── types/
│   └── technology.ts
│
├── App.tsx
├── index.css
└── main.tsx

public/
└── data/
    └── technologies.json