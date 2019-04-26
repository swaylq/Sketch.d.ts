/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSetCommand<T0 = void, T1 = void, T2 = void> extends NSScriptCommand {
    setReceiversSpecifier<R = void, P0 = unknown>(_setReceiversSpecifier: P0): R;
    keySpecifier<R = NSScriptObjectSpecifier>(): R;
  }
  namespace NSSetCommand {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptCommand {
      alloc<R = NSSetCommand>(): R;
      new: <R = NSSetCommand>() => R;
    }
  }
}

declare const NSSetCommand: cocoa.NSSetCommand.CLASS;
