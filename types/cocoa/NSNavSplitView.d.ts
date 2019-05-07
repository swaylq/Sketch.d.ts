/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNavSplitView<T0 = void, T1 = void, T2 = void> extends NSSplitView {}
  namespace NSNavSplitView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSplitView {
      alloc<R = NSNavSplitView>(): R;
      new: <R = NSNavSplitView>() => R;
    }
  }
}

declare const NSNavSplitView: cocoa.NSNavSplitView.CLASS;
