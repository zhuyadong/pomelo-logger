//import { EventEmitter } from "events";
declare class Level {
  readonly level: number;
  readonly levelStr: string;
  toString(): string;
  isLessThanOrEqualTo(otherLevel: string | Level): boolean;
  isGreaterThanOrEqualTo(otherLevel: string | Level): boolean;
  isEqualTo(otherLevel: string | Level): boolean;
}
declare class Logger {
  //extends EventEmitter {
  static DEFAULT_CATEGORY: string;
  readonly category: string;
  readonly level: Level;
  setLevel(level: string | Level): void;
  removeLevel(): void;
  log(): void;
  isLevelEnabled(otherLevel: string | Level): boolean;
  isTraceEnabled(): boolean;
  isDebugEnabled(): boolean;
  isInfoEnabled(): boolean;
  isWarnEnabled(): boolean;
  isErrorEnabled(): boolean;
  isFatalEnabled(): boolean;
}

declare module "log4js" {
  export function getBufferedLogger(categoryName: string): Logger;
  export function getLogger(categoryName: string): Logger;
  export function getDefaultLogger(): Logger;
  export function hasLogger(logger: string): boolean;
  export function addAppender(appender: any, ...args: string[]): void;
  export function loadAppender(appender: string, appenderModule?: any): void;
  export function clearAppenders(): void;
  export function configure(config: string | Object, options?: any): void;
  export function shutdown(cb: Function): void;
  export function replaceConsole(logger?: Logger): void;
  export function restoreConsole(): void;
  export const levels: {
    ALL: Level;
    TRACE: Level;
    DEBUG: Level;
    INFO: Level;
    WARN: Level;
    ERROR: Level;
    FATAL: Level;
    OFF: Level;
    toLevel: (sArg: string, defaultLevel: string | Level) => Level;
  };
  export function setGlobalLogLevel(level: string | Level): void;
  export const layouts: {
    basicLayout: (loggingEvent: any) => string;
    messagePassThroughLayout: (loggingEvent: any) => string;
    patternLayout: (loggingEvent: any) => string;
    colouredLayout: (loggingEvent: any) => string;
    coloredLayout: (loggingEvent: any) => string;
    layout: (name: string, config: any) => string;
  };
  export const appenders:any;
  export const appenderMakers:{[idx:string]:(arg:any)=>Logger};
  export const connectLogger:(logger:Logger, options?:any)=>(req:any, res:any, next:Function)=>void;
}
