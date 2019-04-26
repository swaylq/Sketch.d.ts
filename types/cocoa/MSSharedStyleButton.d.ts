/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedStyleButton<T0 = void, T1 = void, T2 = void> extends NSButton {
    cxx_destruct<R = void>(): R;
    sharedStyle<R = MSSharedStyle>(): R;
    setSharedStyle<R = void, P0 = MSSharedStyle>(_v: P0): R;
  }
  namespace MSSharedStyleButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = MSSharedStyleButton>(): R;
      new: <R = MSSharedStyleButton>() => R;
    }
  }
}

declare const MSSharedStyleButton: cocoa.MSSharedStyleButton.CLASS;
