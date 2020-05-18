import * as LogRocket from "logrocket";
import { Bag } from "@paperbits/common";
import { Logger } from "@paperbits/common/logging";
import { ISettingsProvider } from "@paperbits/common/configuration";
import { LogRocketSettings } from "./logrocketSettings";


export class LogRocketLogger implements Logger {
    constructor(private readonly settingsProvider: ISettingsProvider) {
        this.init();
    }

    public async init(): Promise<void> {
        const logrocketSettings = await this.settingsProvider.getSetting<LogRocketSettings>("logRocket");

        if (!logrocketSettings?.appId) {
            return;
        }

        LogRocket.init(logrocketSettings.appId);
    }

    /**
     * Traces information related to beginning of session.
     */
    public async traceSession(userId?: string): Promise<void> {
        if (userId) {
            LogRocket.identify(userId);
        }

        LogRocket.track("Session started.");
    }

    /**
     * Traces error.
     * @param error {Error} Error object.
     * @param handledAt 
     */
    public async traceError(error: Error, handledAt?: string): Promise<void> {
        LogRocket.captureException(error, !!handledAt ? { extra: { handledAt: handledAt, } } : undefined);
    }

    /**
     * Traces opening of a particular view.
     * @param name {string} Name of the view.
     */
    public async traceView(name: string): Promise<void> {
        LogRocket.track(`View: ${name}`);
    }

    /**
     * Traces an arbitrary event.
     * @param eventName {string} Name of the event.
     * @param properties {Bag<string>} A bag of event properties, e.g. { event: "click" }.
     * @param measurments {Bag<number>} A bag of measurement, e.g. { numberOfClicks: 5 }.
     */
    public async traceEvent(eventName: string, properties?: Bag<string>, measurments?: Bag<number>): Promise<void> {
        LogRocket.track(eventName);
    }
}