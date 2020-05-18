/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file and at https://paperbits.io/license/mit.
 */


import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { LogRocketLogger } from "./logging";


/**
 * LogRocket publishing module.
 */
export class LogRocketDesignModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bindSingleton("logger", LogRocketLogger);
    }
}