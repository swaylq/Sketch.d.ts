/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDuplicateOffsetTracker<T0 = void, T1 = void, T2 = void> extends NSObject {
    offset<R = number>(): R;
    increment<R = void>(): R;
    resetToInitialOffset<R = void>(): R;
    reset<R = void>(): R;
  }
  namespace MSDuplicateOffsetTracker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSDuplicateOffsetTracker>(): R;
      new: <R = MSDuplicateOffsetTracker>() => R;
    }
  }
}

declare const MSDuplicateOffsetTracker: cocoa.MSDuplicateOffsetTracker.CLASS;
