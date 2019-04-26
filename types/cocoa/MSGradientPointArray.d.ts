/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGradientPointArray<T0 = void, T1 = void, T2 = void> extends MSPointArray {
    delegate<R = MSGradientPointArrayDelegate>(): R;
    setDelegate<R = void, P0 = MSGradientPointArrayDelegate>(_v: P0): R;
  }
  namespace MSGradientPointArray {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPointArray {
      alloc<R = MSGradientPointArray>(): R;
      new: <R = MSGradientPointArray>() => R;
    }
  }
}

declare const MSGradientPointArray: cocoa.MSGradientPointArray.CLASS;
