/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSidebarSplitView<T0 = void, T1 = void, T2 = void> extends NSSplitView {
    setFrame<R = void, P0 = CGRect>(_setFrame: P0): R;
    shouldDrawDivider<R = boolean>(): R;
    dividerColor<R = unknown>(): R;
    dividerThickness<R = number>(): R;
  }
  namespace MSSidebarSplitView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSplitView {
      alloc<R = MSSidebarSplitView>(): R;
      new: <R = MSSidebarSplitView>() => R;
    }
  }
}

declare const MSSidebarSplitView: cocoa.MSSidebarSplitView.CLASS;
