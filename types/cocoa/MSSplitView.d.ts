/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSplitView<T0 = void, T1 = void, T2 = void> extends NSSplitView {
    dividerThickness<R = number>(): R;
  }
  namespace MSSplitView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSplitView {
      alloc<R = MSSplitView>(): R;
      new: <R = MSSplitView>() => R;
    }
  }
}

declare const MSSplitView: cocoa.MSSplitView.CLASS;
