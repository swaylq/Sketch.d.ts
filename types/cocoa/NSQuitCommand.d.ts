/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSQuitCommand<T0 = void, T1 = void, T2 = void> extends NSScriptCommand {
    saveOptions<R = number>(): R;
  }
  namespace NSQuitCommand {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptCommand {
      alloc<R = NSQuitCommand>(): R;
      new: <R = NSQuitCommand>() => R;
    }
  }
}

declare const NSQuitCommand: cocoa.NSQuitCommand.CLASS;
