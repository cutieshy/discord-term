import {IAppState, IAppOptions} from "./display";
import blessed from "blessed";

export const tips: string[] = [
    "You can use the {bold}{prefix}sync{/bold} command to discard unsaved changes and reload saved state",
    "You can use the {bold}{prefix}format{/bold} command to change the message format style",
    "Toggle full-screen chat using the {bold}{prefix}fullscreen{/bold} command",
    "Command autocomplete is supported, type {bold}{prefix}he{/bold} then press tab to try it!",
    "Press {bold}ESC{/bold} anytime to clear the current input",
    "Press {bold}UP{/bold} to edit your last message",
    "Exiting with {bold}CTRL + C{/bold} is recommended since it will automatically save state",
    "Press {bold}CTRL + X{/bold} to force exit without saving state"
];

export const defaultAppState: IAppState = {
    globalMessages: false,
    ignoreBots: false,
    ignoreEmptyMessages: true,
    muted: false,
    messageFormat: "<{sender}> {message}",
    trackList: [],
    wordPins: [],
    ignoredUsers: [],
    tags: {},
    theme: "default",
    decriptionKey: "discord-term",
    encrypt: false,

    themeData: {
        messages: {
            foregroundColor: "white",
            backgroundColor: "gray"
        },

        channels: {
            foregroundColor: "white",
            backgroundColor: "black",
            foregroundColorHover: "white",
            backgroundColorHover: "gray"
        },

        input: {
            foregroundColor: "gray",
            backgroundColor: "lightgray"
        },

        header: {
            foregroundColor: "black",
            backgroundColor: "white"
        }
    }
};

export const defaultAppOptions: IAppOptions = {
    maxMessages: 50,
    commandPrefix: "/",
    stateFilePath: "state.json",
    headerAutoHideTimeoutPerChar: 100,

    screen: blessed.screen({
        smartCSR: true,
        fullUnicode: true
    }),

    nodes: {
        messages: blessed.box({
            top: "0%",
            left: "0%",
            width: "100%",
            height: "100%-3",

            style: {
                fg: defaultAppState.themeData.messages.foregroundColor,
                bg: defaultAppState.themeData.messages.backgroundColor
            },

            scrollable: true,
            tags: true,
            padding: 1
        }),

        channels: blessed.box({
            top: "0%",
            left: "0%",
            height: "100%",
            width: "25%",
            scrollable: true,
            padding: 1,
            hidden: true,

            style: {
                fg: defaultAppState.themeData.channels.foregroundColor,
                bg: defaultAppState.themeData.channels.backgroundColor
            } as any
        }),

        input: blessed.textbox({
            style: {
                fg: defaultAppState.themeData.input.foregroundColor,
                bg: defaultAppState.themeData.input.backgroundColor
            },

            left: "0%",
            bottom: "0",
            width: "100%",
            inputOnFocus: true,
            height: "shrink",
            padding: 1
        }),

        header: blessed.box({
            style: {
                fg: defaultAppState.themeData.header.foregroundColor,
                bg: defaultAppState.themeData.header.backgroundColor
            },

            top: "0%",
            left: "0%",
            height: "0%+3",
            padding: 1,
            width: "100%",
            hidden: true,
            tags: true
        })
    }
};
