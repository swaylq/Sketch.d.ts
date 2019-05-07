/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNavNameFieldFormatter<T0 = void, T1 = void, T2 = void> extends NSFormatter {
    setAutoAddExtensionToNextInput<R = void, P0 = boolean>(_setAutoAddExtensionToNextInput: P0): R;
    initWithPanel<R = unknown, P0 = unknown>(_initWithPanel: P0): R;
  }
  namespace NSNavNameFieldFormatter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFormatter {
      alloc<R = NSNavNameFieldFormatter>(): R;
      new: <R = NSNavNameFieldFormatter>() => R;
    }
  }
}

declare const NSNavNameFieldFormatter: cocoa.NSNavNameFieldFormatter.CLASS;
