**JavaScript, TypeScript, and Angular Flashcards for Interview Prep**

---

## 🎴 JavaScript Flashcards

### Flashcard 1
**Q:** What is the difference between `var`, `let`, and `const`?
**A:**
- `var`: function-scoped, hoisted, can be redeclared.  
- `let`: block-scoped, not hoisted (TDZ), can't be redeclared.  
- `const`: block-scoped, must be initialized, immutable reference (not value).

### Flashcard 2
**Q:** What is hoisting in JavaScript?
**A:**
JavaScript moves variable and function declarations to the top of their scope before execution. Only `var` and function declarations are hoisted.

### Flashcard 3
**Q:** What are closures?
**A:**
A closure is a function that remembers the scope in which it was created, even after that scope has exited.

### Flashcard 4
**Q:** Explain the difference between `==` and `===`.
**A:**
- `==` checks value after type coercion.  
- `===` checks value **and** type (strict equality).

### Flashcard 5
**Q:** What is the `this` keyword?
**A:**
`this` refers to the object that is executing the current function. In strict mode/global scope, it can refer to `undefined` or `window`.

### Flashcard 6
**Q:** What is a Promise?
**A:**
A Promise represents a value that may be available now, later, or never. It has three states: pending, resolved, and rejected.

### Flashcard 7
**Q:** What are `async/await`?
**A:**
They are syntactic sugar over Promises to write async code that looks synchronous.

### Flashcard 8
**Q:** What is event bubbling and capturing?
**A:**
- **Bubbling**: Event propagates from target element **up** to the root.  
- **Capturing**: Event propagates from root **down** to the target.

### Flashcard 9
**Q:** What are arrow functions?
**A:**
A concise way to write functions. They do **not** bind their own `this`.

### Flashcard 10
**Q:** What are the differences between `null` and `undefined`?
**A:**
- `undefined`: A variable declared but not assigned.  
- `null`: An assigned value representing no value.

### Flashcard 11
**Q:** What is the spread operator?
**A:**
`...` is used to expand arrays or objects into individual elements.

### Flashcard 12
**Q:** What is destructuring?
**A:**
A syntax to unpack values from arrays or properties from objects into distinct variables.

---

## 🔬 TypeScript Flashcards

### Flashcard 1
**Q:** What is TypeScript?
**A:**
A typed superset of JavaScript that compiles to plain JavaScript. It adds static typing, interfaces, and other features useful for large-scale development.

### Flashcard 2
**Q:** What is type inference in TypeScript?
**A:**
TypeScript automatically infers the type of a variable if it's not explicitly typed.

### Flashcard 3
**Q:** What is an interface?
**A:**
An interface defines the shape of an object (like a contract). It ensures that the object has specific properties and methods.

### Flashcard 4
**Q:** What is the difference between `interface` and `type`?
**A:**
- `interface`: Can be extended and merged.  
- `type`: Can use unions and intersections. More flexible for primitives and complex types.

### Flashcard 5
**Q:** What are union types?
**A:**
A variable that can hold **more than one type** using the `|` symbol.

### Flashcard 6
**Q:** What is a generic in TypeScript?
**A:**
A generic allows you to write reusable components that work with any data type.

### Flashcard 7
**Q:** What is type assertion?
**A:**
Tells the compiler to treat a value as a specific type.

### Flashcard 8
**Q:** What are enums in TypeScript?
**A:**
Enums allow defining named constants that can be numeric or string-based.

### Flashcard 9
**Q:** What is `any`, `unknown`, and `never`?
**A:**
- `any`: Disable type checking (avoid it).  
- `unknown`: Like `any`, but safer – must check type before using.  
- `never`: For functions that never return (e.g., throw error).

### Flashcard 10
**Q:** How do you define optional and readonly properties?
**A:**
Use `?` for optional and `readonly` before the property name in an interface.

### Flashcard 11
**Q:** What is a function type?
**A:**
A way to type-check functions:
```ts
type Add = (a: number, b: number) => number;
```

### Flashcard 12
**Q:** How does TypeScript help in large-scale app development?
**A:**
- Early bug detection  
- Code auto-completion & refactoring  
- Better tooling with strict typing  
- Enforces contracts using interfaces/types

---

## 🏠 Angular Flashcards

### Flashcard 1
**Q:** What is Angular?
**A:**
A TypeScript-based open-source framework developed by Google for building single-page applications (SPAs).

### Flashcard 2
**Q:** What is a component in Angular?
**A:**
A building block of the UI. It includes a TypeScript class, an HTML template, and a CSS stylesheet.

### Flashcard 3
**Q:** What are Angular lifecycle hooks?
**A:**
Special methods like `ngOnInit()`, `ngAfterViewInit()`, `ngOnDestroy()` used to tap into key moments in a component’s life.

### Flashcard 4
**Q:** What is dependency injection in Angular?
**A:**
A design pattern where Angular injects dependencies (like services) into components.

### Flashcard 5
**Q:** What are services in Angular?
**A:**
Reusable classes to encapsulate logic (e.g., fetching data, business rules) and can be injected into components.

### Flashcard 6
**Q:** What are Observables in Angular?
**A:**
They represent asynchronous data streams (from RxJS). Used for HTTP calls, event handling, etc.

### Flashcard 7
**Q:** What is routing in Angular?
**A:**
Allows navigation between components/pages using the Angular Router.

### Flashcard 8
**Q:** What is lazy loading?
**A:**
A technique to load feature modules on demand, reducing the initial bundle size.

### Flashcard 9
**Q:** What are Angular forms?
**A:**
Two types: Template-driven (simple, HTML-based) and Reactive forms (model-driven with validation).

### Flashcard 10
**Q:** What is `ngIf` vs `ngFor`?
**A:**
- `*ngIf`: conditionally adds/removes elements  
- `*ngFor`: iterates over a list

### Flashcard 11
**Q:** What is a pipe in Angular?
**A:**
A way to transform output in templates (e.g., `{{ name | uppercase }}`)

### Flashcard 12
**Q:** What are guards in Angular?
**A:**
Used to control route access — `CanActivate`, `CanDeactivate`, etc.

### Flashcard 13
**Q:** What is a standalone component in Angular?
**A:**
Introduced in Angular 14 — components that do not require inclusion in a module.

### Flashcard 14
**Q:** What is the purpose of interceptors?
**A:**
To intercept HTTP requests/responses for adding headers, handling errors, etc.

### Flashcard 15
**Q:** How do you optimize performance in Angular?
**A:**
- Lazy loading  
- `OnPush` change detection  
- Pure pipes  
- TrackBy in `ngFor`  
- Avoid memory leaks in subscriptions

