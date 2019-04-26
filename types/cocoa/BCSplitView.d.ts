/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCSplitView<T0 = void, T1 = void, T2 = void> extends NSSplitView {
    dividerColor<R = unknown>(): R;
  }
  namespace BCSplitView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSplitView {
      alloc<R = BCSplitView>(): R;
      new: <R = BCSplitView>() => R;
    }
  }
}

declare const BCSplitView: cocoa.BCSplitView.CLASS;
