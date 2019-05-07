/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface JSTalk<T0 = void, T1 = void, T2 = void> extends COScript {}
  namespace JSTalk {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends COScript {
      alloc<R = JSTalk>(): R;
      new: <R = JSTalk>() => R;
    }
  }
}

declare const JSTalk: cocoa.JSTalk.CLASS;
