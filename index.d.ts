import { GotOptions } from "got";

declare module "hastebin" {
    export interface Options {
        /** If this is enabled, the function returns a url pointing at the *raw* hastebin file. */
        raw?: boolean

        /** Shorthand for using the `gotOptions` to set the `Content-Type`. */
        contentType?: boolean

        /** The server to upload the text to. This defaults to `https://hastebin.com`. */
        server?: string;
    }

    /** Uploads text to Hastebin (or your selected server). Returns a Promise containing the URL to the paste. */
    export function createPaste (content: string, options?: Options, gotOptions?: GotOptions<string>): Promise<string>;
}

