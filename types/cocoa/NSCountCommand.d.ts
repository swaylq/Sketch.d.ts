/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCountCommand<T0 = void, T1 = void, T2 = void> extends NSScriptCommand {}
  namespace NSCountCommand {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptCommand {
      alloc<R = NSCountCommand>(): R;
      new: <R = NSCountCommand>() => R;
    }
  }
}

declare const NSCountCommand: cocoa.NSCountCommand.CLASS;
