export {};

// No overload matches this call error in TypeScript

// EXAMPLE 1 - Specify the correct number of parameters

const result1 = ['a', 'b', 'c'].reduce((accumulator: any, current) => {}, []);

console.log(result1);

// ---------------------------------------------------

// // EXAMPLE 2 - Working around TypeScript's limitations with a type assertion

// function example(str: 'hello'): string;
// function example(str: 'world'): string;
// function example(str: 'hello' | 'world'): string {
//   return str;
// }

// function callExample(str: 'hello' | 'world') {
//   return example(str as any); // 👈️ use type assertion
// }

// ---------------------------------------------------

// // EXAMPLE 3 - Understanding why the error occurs

// function createDate(timestamp: number): Date; // 👈️ overload
// function createDate(year: number, month: number, day: number): Date; // 👈️ overload
// function createDate( // 👈️ implementation
//   yearOrTimestamp: number,
//   month?: number,
//   day?: number,
// ): Date {
//   if (month !== undefined && day !== undefined) {
//     return new Date(yearOrTimestamp, month, day);
//   }

//   return new Date(yearOrTimestamp);
// }

// const date1 = createDate(1647778643657);
// console.log(date1); // 👉️ Sun Mar 20 2022

// const date2 = createDate(2023, 9, 24);
// console.log(date2); // 👉️ Tue Oct 24 2023

// ---------------------------------------------------

// // EXAMPLE 4 - The implementation signature cannot be called directly

// function createDate(timestamp: number): Date;
// function createDate(year: number, month: number, day: number): Date;
// function createDate(
//   yearOrTimestamp: number,
//   month?: number,
//   day?: number,
// ): Date {
//   if (month !== undefined && day !== undefined) {
//     return new Date(yearOrTimestamp, month, day);
//   }

//   return new Date(yearOrTimestamp);
// }

// // ⛔️ Error: No overload expects 2 arguments,
// // but overloads do exist that expect either 1 or 3 arguments.ts(2575)
// const date3 = createDate(2023, 9);

// ---------------------------------------------------

// // EXAMPLE 5 - Check the type definitions of the function

// function example(str: string): void; // 👈️ overload
// function example(num: number, num2: number): void; // 👈️ overload
// function example(strOrNum: string | number, num2?: number) {} // 👈️ implementation

// // ✅ OK
// example('bobbyhadz.com');

// // ✅ OK
// example(1, 2);
