/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCMagnifierButton<T0 = void, T1 = void, T2 = void> extends MSInspectorButton {
    cxx_destruct<R = void>(): R;
    documentColorSpace<R = unknown>(): R;
    color<R = MSFlexibleColor>(): R;
    setColor<R = void, P0 = MSFlexibleColor>(_v: P0): R;
    delegate<R = BCMagnifierButtonDelegate>(): R;
    setDelegate<R = void, P0 = BCMagnifierButtonDelegate>(_v: P0): R;
  }
  namespace BCMagnifierButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorButton {
      alloc<R = BCMagnifierButton>(): R;
      new: <R = BCMagnifierButton>() => R;
    }
  }
}

declare const BCMagnifierButton: cocoa.BCMagnifierButton.CLASS;
