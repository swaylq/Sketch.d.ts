/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCFilterTokenButton<T0 = void, T1 = void, T2 = void> extends NSButton {}
  namespace BCFilterTokenButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = BCFilterTokenButton>(): R;
      new: <R = BCFilterTokenButton>() => R;
    }
  }
}

declare const BCFilterTokenButton: cocoa.BCFilterTokenButton.CLASS;
