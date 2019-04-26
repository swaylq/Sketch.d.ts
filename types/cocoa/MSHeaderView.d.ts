/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHeaderView<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace MSHeaderView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSHeaderView>(): R;
      new: <R = MSHeaderView>() => R;
    }
  }
}

declare const MSHeaderView: cocoa.MSHeaderView.CLASS;
