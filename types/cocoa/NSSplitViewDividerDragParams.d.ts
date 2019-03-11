/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSplitViewDividerDragParams<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSSplitViewDividerDragParams<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSSplitViewDividerDragParams>(): R;
      new: <R = NSSplitViewDividerDragParams>() => R;
    }
  }
}

declare const NSSplitViewDividerDragParams: cocoa.classes.NSSplitViewDividerDragParams;
