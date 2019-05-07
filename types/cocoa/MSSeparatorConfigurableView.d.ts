/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSeparatorConfigurableView<T0 = void, T1 = void, T2 = void> extends NSView {
    wantsSeparatorBetweenSelfAndView<R = boolean, P0 = unknown>(_wantsSeparatorBetweenSelfAndView: P0): R;
    separatorInsetBetweenSelfAndView<R = NSEdgeInsets, P0 = unknown>(_separatorInsetBetweenSelfAndView: P0): R;
    inset<R = boolean>(): R;
    setInset<R = void, P0 = boolean>(_v: P0): R;
    wantsSeparator<R = boolean>(): R;
    setWantsSeparator<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSSeparatorConfigurableView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSSeparatorConfigurableView>(): R;
      new: <R = MSSeparatorConfigurableView>() => R;
    }
  }
}

declare const MSSeparatorConfigurableView: cocoa.MSSeparatorConfigurableView.CLASS;
