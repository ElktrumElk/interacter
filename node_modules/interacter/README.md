# Interacter | IOS
Interacter is a module that helps dev in performing input and output operation, which values can be stored and later used for manipulation

## Example
```js
import Input from "./ios.js";
import { main, writeLine } from "./ios.js";

main (async () => {

  const username = new Input();
  const password = new Input();
  
  await username.readl("Enter your username: ");
  await password.readl("Enter your password: ");
  
  writeLine(username.value, password.value);

});
```
## Features
- Live input read
- Character restrict
  ### Example
  ```js
    main(async() => {

    const a = new Input();

    a.readl("Enter anything except a: ", keypress((key) => {
      if (key === "a") {
        a.alt("a"); //restict the character a
      }
  })
  });
  ```
- Store value

Installation `npm install interacter`;
Importation `import Input from "./ios"`

## Modules
- Input
- writeLine: Just as console.log() but plain
- int: convert to integer numbers
- keypress: listen to keyboard event
- main

### Note
All module should be used within the main module for proper behavour.

  
