/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSScrollView<T0 = void, T1 = void, T2 = void> extends NSScrollView {
    allowsScrolling<R = boolean>(): R;
    setAllowsScrolling<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSScrollView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrollView {
      alloc<R = MSScrollView>(): R;
      new: <R = MSScrollView>() => R;
    }
  }
}

declare const MSScrollView: cocoa.MSScrollView.CLASS;
