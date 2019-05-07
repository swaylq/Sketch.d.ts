/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCloseCommand<T0 = void, T1 = void, T2 = void> extends NSScriptCommand {
    saveOptions<R = number>(): R;
  }
  namespace NSCloseCommand {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptCommand {
      alloc<R = NSCloseCommand>(): R;
      new: <R = NSCloseCommand>() => R;
    }
  }
}

declare const NSCloseCommand: cocoa.NSCloseCommand.CLASS;
