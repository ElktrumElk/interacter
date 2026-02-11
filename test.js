import { writeLine } from "./IOS.js";
import {Input} from "./node_modules/interacter/ios.js"
import { main } from "./node_modules/interacter/ios.js"


main(async () => {
    const username = new Input();
    const password = new Input();

    await username.readl("Enter username: ");
    await password.readl("Enter password: ");

    writeLine(username.value, password.value)
})