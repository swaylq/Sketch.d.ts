/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDeleteCommand<T0 = void, T1 = void, T2 = void> extends NSScriptCommand {
    setReceiversSpecifier<R = void, P0 = unknown>(_setReceiversSpecifier: P0): R;
    keySpecifier<R = NSScriptObjectSpecifier>(): R;
  }
  namespace NSDeleteCommand {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptCommand {
      alloc<R = NSDeleteCommand>(): R;
      new: <R = NSDeleteCommand>() => R;
    }
  }
}

declare const NSDeleteCommand: cocoa.NSDeleteCommand.CLASS;
