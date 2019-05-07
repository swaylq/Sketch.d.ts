/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSVerticalRulerView<T0 = void, T1 = void, T2 = void> extends MSRulerView {
    isFlipped<R = boolean>(): R;
  }
  namespace MSVerticalRulerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSRulerView {
      alloc<R = MSVerticalRulerView>(): R;
      new: <R = MSVerticalRulerView>() => R;
    }
  }
}

declare const MSVerticalRulerView: cocoa.MSVerticalRulerView.CLASS;
