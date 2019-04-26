/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGetCommand<T0 = void, T1 = void, T2 = void> extends NSScriptCommand {}
  namespace NSGetCommand {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptCommand {
      alloc<R = NSGetCommand>(): R;
      new: <R = NSGetCommand>() => R;
    }
  }
}

declare const NSGetCommand: cocoa.NSGetCommand.CLASS;
