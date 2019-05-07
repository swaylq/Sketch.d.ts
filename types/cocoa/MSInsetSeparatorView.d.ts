/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsetSeparatorView<T0 = void, T1 = void, T2 = void> extends NSView {
    separatorInsetBetweenSelfAndView<R = NSEdgeInsets, P0 = unknown>(_separatorInsetBetweenSelfAndView: P0): R;
  }
  namespace MSInsetSeparatorView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSInsetSeparatorView>(): R;
      new: <R = MSInsetSeparatorView>() => R;
    }
  }
}

declare const MSInsetSeparatorView: cocoa.MSInsetSeparatorView.CLASS;
