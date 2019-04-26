/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExistsCommand<T0 = void, T1 = void, T2 = void> extends NSScriptCommand {}
  namespace NSExistsCommand {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptCommand {
      alloc<R = NSExistsCommand>(): R;
      new: <R = NSExistsCommand>() => R;
    }
  }
}

declare const NSExistsCommand: cocoa.NSExistsCommand.CLASS;
