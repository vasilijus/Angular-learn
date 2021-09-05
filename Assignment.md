# Definite assignment assertion and ambient declaration?

```
declare name: string;
```
This says to the compiler:
```
"There is a property called name of type string. I shouldn't have to prove to you that name actually exists, but I want to use it anyway."
```
The declare keyword is typically used in type definition files that provide typings for files that Typescript cannot get type information from (such as plain JS files). So if I was reading your code, I would assume that name is getting monkey patched in from some JS file somewhere, and you are noting that here.

I would be incorrect.
```
name!: string;
```
This says to the compiler:
```
"There is a property called name with a type of string | undefined. It starts with a value of undefined. But every time I get or set that property, I want to treat it as type string."
```
Using this form it's clear to anyone reading the code that name is undefined at first, but is treated like a string anyway. That means it must be set in this file somewhere, just probably not in the constructor.