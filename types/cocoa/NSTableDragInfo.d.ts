/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableDragInfo<T0 = void, T1 = void, T2 = void> extends NSObject {
    dropCandidateChildIndex<R = number>(): R;
    setDropCandidateChildIndex<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSTableDragInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTableDragInfo>(): R;
      new: <R = NSTableDragInfo>() => R;
    }
  }
}

declare const NSTableDragInfo: cocoa.NSTableDragInfo.CLASS;
