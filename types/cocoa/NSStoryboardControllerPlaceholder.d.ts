/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardControllerPlaceholder<T0 = void, T1 = void, T2 = void> extends NSObject {
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
  }
  namespace NSStoryboardControllerPlaceholder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSStoryboardControllerPlaceholder>(): R;
      new: <R = NSStoryboardControllerPlaceholder>() => R;
    }
  }
}

declare const NSStoryboardControllerPlaceholder: cocoa.NSStoryboardControllerPlaceholder.CLASS;
