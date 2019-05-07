/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCloneCommand<T0 = void, T1 = void, T2 = void> extends NSScriptCommand {
    setReceiversSpecifier<R = void, P0 = unknown>(_setReceiversSpecifier: P0): R;
    keySpecifier<R = NSScriptObjectSpecifier>(): R;
  }
  namespace NSCloneCommand {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptCommand {
      alloc<R = NSCloneCommand>(): R;
      new: <R = NSCloneCommand>() => R;
    }
  }
}

declare const NSCloneCommand: cocoa.NSCloneCommand.CLASS;
