# React + TypeScript + Vite

# Giphy Grid App

This is a responsive React application that retrieves and showcases trending GIFs from the Giphy API in a grid view. Users can search for specific GIFs, view them in a modal, and navigate the app using keyboard controls. The application is developed using React, Vite, React Query, styled-components, and TypeScript.

## Features

- Fetch and display trending GIFs using the Giphy API.
- Search for specific GIFs using a debounced query.
- Responsive grid layout with dynamically adjusting columns.
- Smooth transitions when opening and closing the modal.
- Keyboard navigation and focus management for accessibility.
- Screen reader compatibility with ARIA attributes.

## Install the dependencies

```bash
npm install
# or
pnpm install
```

## Create a .env file in the root directory and add your Giphy API key:

```bash
VITE_GIPHY_API_KEY=your_api_key_here
```

## Running the App

To start the development server, run:

```bash
npm run dev
# or
pnpm dev
```

## Testing

To run the tests, use:

```bash
npm run test
# or
pnpm test
```
