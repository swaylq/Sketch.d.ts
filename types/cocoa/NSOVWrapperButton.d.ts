/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOVWrapperButton<T0 = void, T1 = void, T2 = void> extends NSButton {
    setBackgroundStyle<R = void, P0 = number>(_setBackgroundStyle: P0): R;
  }
  namespace NSOVWrapperButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = NSOVWrapperButton>(): R;
      new: <R = NSOVWrapperButton>() => R;
    }
  }
}

declare const NSOVWrapperButton: cocoa.NSOVWrapperButton.CLASS;
