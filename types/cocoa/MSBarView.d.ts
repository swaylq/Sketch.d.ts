/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBarView<T0 = void, T1 = void, T2 = void> extends MSGradientView {}
  namespace MSBarView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSGradientView {
      alloc<R = MSBarView>(): R;
      new: <R = MSBarView>() => R;
    }
  }
}

declare const MSBarView: cocoa.MSBarView.CLASS;
