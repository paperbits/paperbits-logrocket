# LogRocket integration for Paperbits
 
This repository contains an integration with LogRocket (https://logrocket.com) - a JavaScript SDK which works by intercepting actions in your website/app, such as network requests, touch actions, and Redux events, and sending them to a remote server.

[![Join the chat at https://gitter.im/paperbits/discussions](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/paperbits/discussions)



## Installation

```bash
npm i @paperbits/logrocket --save
```

## Usage
Add imports and registration to `startup.design.ts` file of your project:

```ts
import { LogRocketDesignModule } from "@paperbits/logrocket/logrocket.design.module";
injector.bindModule(new LogRocketDesignModule());
```


## License
Use of this source code is governed by an MIT-style license that can be found in the LICENSE file and at https://paperbits.io/license/mit.

2020 (c) Copyright Paperbits. All Rights Reserved.
