/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFilterBarView<T0 = void, T1 = void, T2 = void> extends MSBarView {}
  namespace MSFilterBarView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBarView {
      alloc<R = MSFilterBarView>(): R;
      new: <R = MSFilterBarView>() => R;
    }
  }
}

declare const MSFilterBarView: cocoa.MSFilterBarView.CLASS;
