/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSplitViewDividerDragParams<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace NSSplitViewDividerDragParams {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSSplitViewDividerDragParams>(): R;
      new: <R = NSSplitViewDividerDragParams>() => R;
    }
  }
}

declare const NSSplitViewDividerDragParams: cocoa.NSSplitViewDividerDragParams.CLASS;
