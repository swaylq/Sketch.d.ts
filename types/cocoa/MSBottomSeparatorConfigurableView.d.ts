/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBottomSeparatorConfigurableView<T0 = void, T1 = void, T2 = void> extends MSSeparatorConfigurableView {
    wantsBottomSeparator<R = boolean>(): R;
    setWantsBottomSeparator<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSBottomSeparatorConfigurableView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSeparatorConfigurableView {
      alloc<R = MSBottomSeparatorConfigurableView>(): R;
      new: <R = MSBottomSeparatorConfigurableView>() => R;
    }
  }
}

declare const MSBottomSeparatorConfigurableView: cocoa.MSBottomSeparatorConfigurableView.CLASS;
