/*
  TypeScript Core Skills Overview
  ------------------------------
  This file outlines the key TypeScript concepts you need to understand for an interview.
*/

/*
  1. Basic Types
     - Understand TypeScript's basic types: string, number, boolean, null, undefined, any, unknown, void, never.
     - Know how to use type annotations to specify variable types.
*/
let name: string = ""
// let arr: [string] = ["car"]
// let object: {[dad:string]:number} = {'hello':2}

console.log(name);

/*
  2. Functions and Typing
     - Function return types and parameter type annotations.
     - Optional and default parameters.
     - Function overloading.
*/

function combineString(string1: string = "hello", string2?:string): string {
    
    return string1 + " " + (string2 ?? "bye")
}

console.log(combineString("hi"));
/*
  3. Interfaces and Types
     - Difference between interfaces and type aliases.
     - Extending interfaces.
     - Using intersection (&) and union (|) types.
*/

/*
  4. Classes and Object-Oriented Programming
     - Class properties and methods.
     - Access modifiers (public, private, protected, readonly).
     - Abstract classes and interfaces.
     - Inheritance and polymorphism.
*/

/*
  5. Generics
     - Creating reusable components with generics.
     - Generic constraints.
     - Using generics with functions, interfaces, and classes.
*/

/*
  6. Type Assertions & Type Guards
     - Using 'as' for type assertions.
     - Type guards (typeof, instanceof, user-defined type guards).
*/

/*
  7. Enums
     - Numeric and string enums.
     - Const enums for performance optimization.
*/

/*
  8. Modules and Namespaces
     - Importing and exporting modules.
     - Default and named exports.
*/

/*
  9. Utility Types
     - Partial<T>, Readonly<T>, Pick<T>, Omit<T>.
     - Record<K, T>, Exclude<T, U>, Extract<T, U>.
*/

/*
  10. Working with Promises and Async/Await
     - Typing async functions.
     - Handling errors with try/catch.
*/

/*
  11. Mapped & Conditional Types
     - Creating mapped types.
     - Conditional types using `extends`.
*/

/*
  12. Advanced Concepts
     - Discriminated unions.
     - Template literal types.
     - Keyof and Indexed Access Types.
     - Understanding the infer keyword.
*/
