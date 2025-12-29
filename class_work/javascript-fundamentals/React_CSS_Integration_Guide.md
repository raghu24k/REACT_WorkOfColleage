# React CSS Integration: Complete Styling Guide

## Table of Contents

1. [Introduction to CSS in React](#introduction-to-css-in-react)
2. [Regular CSS Files](#regular-css-files)
3. [CSS Modules](#css-modules)
4. [Inline Styles](#inline-styles)
5. [CSS-in-JS Solutions](#css-in-js-solutions)
6. [Styled Components](#styled-components)
7. [Sass/SCSS Integration](#sassscss-integration)
8. [Tailwind CSS Integration](#tailwind-css-integration)
9. [Best Practices](#best-practices)
10. [Common Patterns and Examples](#common-patterns-and-examples)
11. [Troubleshooting](#troubleshooting)

---

## Introduction to CSS in React

### Why CSS in React is Different

React components are modular and reusable, which means CSS needs to be organized differently than traditional web development. React offers multiple ways to style components, each with its own advantages.

### Styling Approaches Overview

1. **Regular CSS Files** - Traditional CSS imported into components
2. **CSS Modules** - Scoped CSS that prevents naming conflicts
3. **Inline Styles** - JavaScript objects for styling
4. **CSS-in-JS** - Libraries that write CSS in JavaScript
5. **Styled Components** - Component-based styling library
6. **Sass/SCSS** - Preprocessor for enhanced CSS
7. **Tailwind CSS** - Utility-first CSS framework

### Choosing the Right Approach

- **Small Projects:** Regular CSS or CSS Modules
- **Component Libraries:** CSS Modules or Styled Components
- **Dynamic Styling:** CSS-in-JS or Inline Styles
- **Large Teams:** CSS Modules or Styled Components
- **Rapid Development:** Tailwind CSS

---

## Regular CSS Files

### Basic CSS Import

The simplest way to style React components is by importing regular CSS files.

**Testing Instructions:**

1. Create `src/Button.css`
2. Create `src/Button.js`
3. Import CSS in the component
4. Check browser - styles should apply

**`src/Button.css`:**

```css
.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #0056b3;
}

.button:active {
  transform: scale(0.98);
}

.button-primary {
  background-color: #007bff;
}

.button-secondary {
  background-color: #6c757d;
}

.button-danger {
  background-color: #dc3545;
}
```

**`src/Button.js`:**

```javascript
import React from 'react';
import './Button.css';

function Button({ text, variant = 'primary', onClick }) {
  return (
    <button 
      className={`button button-${variant}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
```

**`src/App.js`:**

```javascript
import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <Button text="Primary" variant="primary" />
      <Button text="Secondary" variant="secondary" />
      <Button text="Danger" variant="danger" />
    </div>
  );
}

export default App;
```

### Global CSS Files

Global CSS files are imported once and apply styles globally.

**`src/index.css` (Global Styles):**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f5f5;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: 1rem;
  font-weight: 600;
}

p {
  margin-bottom: 1rem;
  line-height: 1.6;
}
```

**`src/index.js`:**

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles imported here
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Component-Specific CSS

Each component can have its own CSS file.

**`src/Card.css`:**

```css
.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  max-width: 300px;
}

.card-header {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.card-body {
  color: #666;
  line-height: 1.6;
}

.card-footer {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #e0e0e0;
}
```

**`src/Card.js`:**

```javascript
import React from 'react';
import './Card.css';

function Card({ header, body, footer }) {
  return (
    <div className="card">
      {header && <div className="card-header">{header}</div>}
      {body && <div className="card-body">{body}</div>}
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}

export default Card;
```

### CSS Specificity and Conflicts

**Problem:** Global CSS can cause naming conflicts.

**Solution:** Use specific class names or CSS Modules (covered next).

**`src/UserCard.css`:**

```css
/* Use component-specific prefixes */
.user-card {
  border: 1px solid #e0e0e0;
  padding: 15px;
}

.user-card-header {
  font-size: 1.2rem;
}

.user-card-body {
  margin-top: 10px;
}
```

---

## CSS Modules

### What are CSS Modules?

CSS Modules are CSS files where all class names are scoped locally by default. This prevents naming conflicts and makes styles component-specific.

### Setting Up CSS Modules

CSS Modules work automatically in Create React App. Just name your file with `.module.css`.

**Testing Instructions:**

1. Create `src/Button.module.css`
2. Create `src/Button.js`
3. Import styles as an object
4. Use `styles.className` syntax

**`src/Button.module.css`:**

```css
.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.button:hover {
  background-color: #0056b3;
}

.primary {
  background-color: #007bff;
}

.secondary {
  background-color: #6c757d;
}

.danger {
  background-color: #dc3545;
}
```

**`src/Button.js`:**

```javascript
import React from 'react';
import styles from './Button.module.css';

function Button({ text, variant = 'primary', onClick }) {
  return (
    <button 
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
```

### CSS Modules with Multiple Classes

**`src/Card.module.css`:**

```css
.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.header {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.body {
  color: #666;
  line-height: 1.6;
}

.footer {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #e0e0e0;
}

/* Conditional classes */
.highlighted {
  border: 2px solid #007bff;
}

.large {
  padding: 30px;
}
```

**`src/Card.js`:**

```javascript
import React from 'react';
import styles from './Card.module.css';

function Card({ header, body, footer, highlighted, large }) {
  return (
    <div className={`${styles.card} ${highlighted ? styles.highlighted : ''} ${large ? styles.large : ''}`}>
      {header && <div className={styles.header}>{header}</div>}
      {body && <div className={styles.body}>{body}</div>}
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
}

export default Card;
```

### Using clsx or classnames Library

For better class name composition, use the `clsx` or `classnames` library.

**Installation:**

```bash
npm install clsx
# or
npm install classnames
```

**`src/Button.js` (with clsx):**

```javascript
import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

function Button({ text, variant = 'primary', disabled, onClick }) {
  return (
    <button 
      className={clsx(
        styles.button,
        styles[variant],
        {
          [styles.disabled]: disabled
        }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
```

### CSS Modules Composition

**`src/Button.module.css`:**

```css
.base {
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.primary {
  composes: base;
  background-color: #007bff;
  color: white;
}

.secondary {
  composes: base;
  background-color: #6c757d;
  color: white;
}
```

**`src/Button.js`:**

```javascript
import React from 'react';
import styles from './Button.module.css';

function Button({ text, variant = 'primary', onClick }) {
  return (
    <button 
      className={styles[variant]}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
```

### CSS Modules with Global Classes

Sometimes you need global styles within a CSS Module.

**`src/Button.module.css`:**

```css
.button {
  background-color: #007bff;
  color: white;
}

/* Global class (not scoped) */
:global(.global-button) {
  font-weight: bold;
}

/* Or use :global() wrapper */
.button :global(.icon) {
  margin-right: 5px;
}
```

---

## Inline Styles

### Basic Inline Styles

Inline styles in React are JavaScript objects, not strings.

**Testing Instructions:**

1. Create a component with inline styles
2. Notice camelCase property names
3. Values are strings or numbers

**`src/InlineButton.js`:**

```javascript
import React from 'react';

function InlineButton({ text, onClick }) {
  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
}

export default InlineButton;
```

### Dynamic Inline Styles

Inline styles are great for dynamic styling based on props or state.

**`src/DynamicButton.js`:**

```javascript
import React, { useState } from 'react';

function DynamicButton({ text }) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? '#0056b3' : '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s'
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
}

export default DynamicButton;
```

### Inline Styles with Props

**`src/ColoredBox.js`:**

```javascript
import React from 'react';

function ColoredBox({ color, width, height, children }) {
  const boxStyle = {
    backgroundColor: color || '#f0f0f0',
    width: width || '200px',
    height: height || '200px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  return (
    <div style={boxStyle}>
      {children}
    </div>
  );
}

export default ColoredBox;
```

**`src/App.js`:**

```javascript
import './App.css';
import ColoredBox from './ColoredBox';

function App() {
  return (
    <div className="App">
      <ColoredBox color="#ff6b6b" width="300px" height="200px">
        Red Box
      </ColoredBox>
      <ColoredBox color="#4ecdc4" width="250px" height="150px">
        Teal Box
      </ColoredBox>
    </div>
  );
}

export default App;
```

### Combining Inline Styles with CSS Classes

You can combine inline styles with CSS classes.

**`src/Button.css`:**

```css
.button {
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
```

**`src/Button.js`:**

```javascript
import React from 'react';
import './Button.css';

function Button({ text, color, onClick }) {
  const inlineStyle = {
    backgroundColor: color || '#007bff',
    color: 'white'
  };

  return (
    <button 
      className="button"
      style={inlineStyle}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
```

### Inline Style Best Practices

**✅ DO:**
- Use for dynamic, computed styles
- Use for component-specific styles that change frequently
- Use for styles that depend on props or state

**❌ DON'T:**
- Use for all styles (harder to maintain)
- Use for complex animations
- Use for media queries (use CSS instead)

---

## CSS-in-JS Solutions

### What is CSS-in-JS?

CSS-in-JS allows you to write CSS directly in JavaScript. Popular libraries include:
- **Emotion**
- **Styled-JSX**
- **JSS**
- **Aphrodite**

### Emotion Example

**Installation:**

```bash
npm install @emotion/react @emotion/styled
```

**`src/EmotionButton.js`:**

```javascript
import React from 'react';
import { css } from '@emotion/react';

const buttonStyle = css`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background-color: #0056b3;
  }
`;

function EmotionButton({ text, onClick }) {
  return (
    <button css={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
}

export default EmotionButton;
```

### Styled-JSX Example

**Installation:**

```bash
npm install styled-jsx
```

**`src/StyledJSXButton.js`:**

```javascript
import React from 'react';

function StyledJSXButton({ text, onClick }) {
  return (
    <>
      <button onClick={onClick}>
        {text}
      </button>
      <style jsx>{`
        button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }
        
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </>
  );
}

export default StyledJSXButton;
```

---

## Styled Components

### What are Styled Components?

Styled Components is a popular CSS-in-JS library that lets you write CSS using tagged template literals.

### Installation

```bash
npm install styled-components
```

### Basic Styled Component

**Testing Instructions:**

1. Install styled-components
2. Create a styled component
3. Use it like a regular component

**`src/StyledButton.js`:**

```javascript
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    transform: scale(0.98);
  }
`;

function StyledButton({ text, onClick }) {
  return <Button onClick={onClick}>{text}</Button>;
}

export default StyledButton;
```

### Styled Components with Props

**`src/StyledButton.js`:**

```javascript
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => {
    if (props.variant === 'primary') return '#007bff';
    if (props.variant === 'secondary') return '#6c757d';
    if (props.variant === 'danger') return '#dc3545';
    return '#007bff';
  }};
  color: white;
  border: none;
  padding: ${props => props.large ? '15px 30px' : '10px 20px'};
  border-radius: 4px;
  cursor: pointer;
  font-size: ${props => props.large ? '18px' : '16px'};
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function StyledButton({ text, variant, large, disabled, onClick }) {
  return (
    <Button 
      variant={variant}
      large={large}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default StyledButton;
```

### Extending Styled Components

**`src/StyledComponents.js`:**

```javascript
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`;

// Extend Button
const PrimaryButton = styled(Button)`
  background-color: #007bff;
`;

const SecondaryButton = styled(Button)`
  background-color: #6c757d;
`;

const DangerButton = styled(Button)`
  background-color: #dc3545;
`;

function ButtonGroup() {
  return (
    <div>
      <PrimaryButton>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <DangerButton>Danger</DangerButton>
    </div>
  );
}

export default ButtonGroup;
```

### Styled Components with Theme

**`src/theme.js`:**

```javascript
export const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    danger: '#dc3545',
    success: '#28a745'
  },
  spacing: {
    small: '10px',
    medium: '20px',
    large: '30px'
  },
  borderRadius: '4px'
};
```

**`src/App.js`:**

```javascript
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import StyledButton from './StyledButton';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <StyledButton text="Themed Button" />
      </div>
    </ThemeProvider>
  );
}

export default App;
```

**`src/StyledButton.js`:**

```javascript
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium};
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  cursor: pointer;
`;

function StyledButton({ text, onClick }) {
  return <Button onClick={onClick}>{text}</Button>;
}

export default StyledButton;
```

---

## Sass/SCSS Integration

### What is Sass/SCSS?

Sass (Syntactically Awesome Style Sheets) is a CSS preprocessor that adds features like variables, nesting, and mixins.

### Setting Up Sass

**Installation:**

```bash
npm install sass
```

Create React App supports Sass out of the box after installation.

### Basic SCSS Example

**`src/Button.scss`:**

```scss
// Variables
$primary-color: #007bff;
$secondary-color: #6c757d;
$border-radius: 4px;
$padding: 10px 20px;

.button {
  background-color: $primary-color;
  color: white;
  border: none;
  padding: $padding;
  border-radius: $border-radius;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  // Nesting
  &:hover {
    background-color: darken($primary-color, 10%);
  }

  &:active {
    transform: scale(0.98);
  }

  // Modifiers
  &--primary {
    background-color: $primary-color;
  }

  &--secondary {
    background-color: $secondary-color;
  }

  &--large {
    padding: 15px 30px;
    font-size: 18px;
  }
}
```

**`src/Button.js`:**

```javascript
import React from 'react';
import './Button.scss';

function Button({ text, variant = 'primary', large, onClick }) {
  const classes = `button button--${variant} ${large ? 'button--large' : ''}`;
  
  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
```

### SCSS with Mixins

**`src/mixins.scss`:**

```scss
// Mixins
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin button-base {
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}

@mixin responsive($breakpoint) {
  @if $breakpoint == mobile {
    @media (max-width: 768px) {
      @content;
    }
  }
  @if $breakpoint == tablet {
    @media (max-width: 1024px) {
      @content;
    }
  }
}
```

**`src/Card.scss`:**

```scss
@import './mixins';

.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  
  @include flex-center;
  
  @include responsive(mobile) {
    padding: 15px;
  }
}
```

### SCSS Modules

**`src/Button.module.scss`:**

```scss
$primary-color: #007bff;

.button {
  background-color: $primary-color;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  
  &:hover {
    opacity: 0.9;
  }
}
```

**`src/Button.js`:**

```javascript
import React from 'react';
import styles from './Button.module.scss';

function Button({ text, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
```

---

## Tailwind CSS Integration

### What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework that provides low-level utility classes.

### Installation

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configuration

**`tailwind.config.js`:**

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**`src/index.css`:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Using Tailwind Classes

**`src/TailwindButton.js`:**

```javascript
import React from 'react';

function TailwindButton({ text, variant = 'primary', onClick }) {
  const baseClasses = 'px-4 py-2 rounded font-semibold transition-colors';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default TailwindButton;
```

### Tailwind with clsx

**`src/TailwindCard.js`:**

```javascript
import React from 'react';
import clsx from 'clsx';

function TailwindCard({ children, className, ...props }) {
  return (
    <div
      className={clsx(
        'bg-white rounded-lg shadow-md p-6',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default TailwindCard;
```

---

## Best Practices

### 1. Naming Conventions

**✅ DO: Use consistent naming**

```css
/* BEM-like naming */
.user-card { }
.user-card__header { }
.user-card__body { }
.user-card--highlighted { }
```

**❌ DON'T: Use generic names**

```css
.card { } /* Too generic */
.header { } /* Conflicts with other components */
```

### 2. Organization

**✅ DO: Organize CSS logically**

```css
/* 1. Variables */
:root {
  --primary-color: #007bff;
}

/* 2. Base styles */
.button {
  /* ... */
}

/* 3. Modifiers */
.button--primary {
  /* ... */
}

/* 4. States */
.button:hover {
  /* ... */
}
```

### 3. Performance

**✅ DO:**
- Use CSS Modules for scoped styles
- Minimize inline styles
- Use CSS for static styles
- Use inline styles only for dynamic values

**❌ DON'T:**
- Create styles in render (creates new objects)
- Use inline styles for everything
- Overuse CSS-in-JS for simple styles

### 4. Maintainability

**✅ DO:**
- Keep styles close to components
- Use CSS Modules to prevent conflicts
- Document complex styles
- Use consistent spacing/sizing scales

**❌ DON'T:**
- Use global styles excessively
- Create deeply nested selectors
- Use !important unnecessarily

### 5. Responsive Design

**✅ DO: Use media queries**

```css
.card {
  padding: 20px;
}

@media (max-width: 768px) {
  .card {
    padding: 15px;
  }
}
```

**✅ DO: Use CSS variables for breakpoints**

```css
:root {
  --breakpoint-mobile: 768px;
  --breakpoint-tablet: 1024px;
}

@media (max-width: var(--breakpoint-mobile)) {
  .card {
    padding: 15px;
  }
}
```

---

## Common Patterns and Examples

### Pattern 1: Component with Multiple Style Approaches

**`src/MixedStylesCard.js`:**

```javascript
import React from 'react';
import styles from './Card.module.css';
import './Card.css'; // Global styles if needed

function MixedStylesCard({ title, content, color }) {
  // Inline style for dynamic color
  const inlineStyle = {
    borderLeft: `4px solid ${color}`
  };

  return (
    <div 
      className={styles.card}
      style={inlineStyle}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
    </div>
  );
}

export default MixedStylesCard;
```

### Pattern 2: Conditional Styling

**`src/ConditionalButton.js`:**

```javascript
import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

function ConditionalButton({ 
  text, 
  variant, 
  disabled, 
  loading, 
  onClick 
}) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        {
          [styles.disabled]: disabled,
          [styles.loading]: loading
        }
      )}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? 'Loading...' : text}
    </button>
  );
}

export default ConditionalButton;
```

### Pattern 3: Responsive Component

**`src/ResponsiveCard.css`:**

```css
.card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
}

@media (min-width: 768px) {
  .card {
    flex-direction: row;
    padding: 30px;
  }
}

@media (min-width: 1024px) {
  .card {
    padding: 40px;
  }
}
```

### Pattern 4: Theme-Aware Component

**`src/ThemeCard.js`:**

```javascript
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => 
    props.theme === 'dark' ? '#333' : '#fff'
  };
  color: ${props => 
    props.theme === 'dark' ? '#fff' : '#333'
  };
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

function ThemeCard({ children, theme = 'light' }) {
  return <Card theme={theme}>{children}</Card>;
}

export default ThemeCard;
```

### Pattern 5: Animation with CSS

**`src/AnimatedButton.css`:**

```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.2s;
}

.button:hover {
  transform: translateY(-2px);
}

.button:active {
  transform: translateY(0);
}

.button--pulse {
  animation: pulse 2s infinite;
}
```

**`src/AnimatedButton.js`:**

```javascript
import React from 'react';
import './AnimatedButton.css';

function AnimatedButton({ text, pulse, onClick }) {
  return (
    <button
      className={`button ${pulse ? 'button--pulse' : ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default AnimatedButton;
```

---

## Troubleshooting

### Common Issues

**Issue: Styles not applying**

**Solutions:**
- Check CSS file is imported: `import './Component.css'`
- Verify class names match: `className="my-class"` and `.my-class`
- Check CSS specificity
- Inspect element in browser DevTools

**Issue: CSS Modules not working**

**Solutions:**
- Ensure file ends with `.module.css`
- Import correctly: `import styles from './Component.module.css'`
- Use `styles.className` syntax
- Check webpack configuration (if not using CRA)

**Issue: Global styles conflicting**

**Solutions:**
- Use CSS Modules for component styles
- Use specific class names
- Use CSS Modules composition
- Avoid global styles when possible

**Issue: Inline styles not updating**

**Solutions:**
- Ensure state/props are updating
- Check React DevTools for prop changes
- Verify `setState` is being called
- Check for typos in style object keys

**Issue: Sass/SCSS not compiling**

**Solutions:**
- Install sass: `npm install sass`
- Check file extension: `.scss` or `.sass`
- Verify import: `import './Component.scss'`
- Check for syntax errors in SCSS file

**Issue: Tailwind classes not working**

**Solutions:**
- Check `tailwind.config.js` content paths
- Verify `@tailwind` directives in CSS
- Restart development server
- Check for typos in class names

---

## Summary

### Key Takeaways

1. **Regular CSS** - Simple, traditional approach
2. **CSS Modules** - Scoped styles, prevents conflicts
3. **Inline Styles** - Dynamic, component-specific
4. **CSS-in-JS** - JavaScript-based styling
5. **Styled Components** - Component-based CSS
6. **Sass/SCSS** - Enhanced CSS with variables and nesting
7. **Tailwind CSS** - Utility-first framework

### Choosing the Right Approach

| Approach | Best For | Pros | Cons |
|----------|----------|------|------|
| **Regular CSS** | Small projects | Simple, familiar | Global scope issues |
| **CSS Modules** | Component libraries | Scoped, prevents conflicts | Slightly more setup |
| **Inline Styles** | Dynamic styling | Easy dynamic values | No pseudo-classes |
| **Styled Components** | Large apps | Component-based, themes | Runtime overhead |
| **Sass/SCSS** | Complex styles | Variables, nesting | Requires compilation |
| **Tailwind CSS** | Rapid development | Fast, utility classes | Large CSS file |

### Recommendations

- **Start with CSS Modules** for most projects
- **Use inline styles** for dynamic values
- **Consider Styled Components** for large, theme-heavy apps
- **Use Sass/SCSS** if you need advanced CSS features
- **Try Tailwind** for rapid prototyping

---

## Additional Resources

### Documentation

- [React Official Docs - Styling](https://react.dev/learn)
- [CSS Modules Documentation](https://github.com/css-modules/css-modules)
- [Styled Components Docs](https://styled-components.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Sass Documentation](https://sass-lang.com/documentation)

### Tools

- [PostCSS](https://postcss.org/) - CSS processing tool
- [Autoprefixer](https://github.com/postcss/autoprefixer) - Add vendor prefixes
- [CSS Modules](https://github.com/css-modules/css-modules) - Scoped CSS
- [clsx](https://github.com/lukeed/clsx) - Class name utility

### Practice

- Build components with different styling approaches
- Convert between styling methods
- Create a design system with consistent styles
- Practice responsive design patterns

---

**Last Updated:** [Date]  
**Version:** 1.0

