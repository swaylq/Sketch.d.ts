/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWhiteHeaderView<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace MSWhiteHeaderView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSWhiteHeaderView>(): R;
      new: <R = MSWhiteHeaderView>() => R;
    }
  }
}

declare const MSWhiteHeaderView: cocoa.MSWhiteHeaderView.CLASS;
