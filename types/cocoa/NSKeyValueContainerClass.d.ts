/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueContainerClass<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    initWithOriginalClass<R = unknown, P0 = unknown>(_initWithOriginalClass: P0): R;
  }
  namespace NSKeyValueContainerClass {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSKeyValueContainerClass>(): R;
      new: <R = NSKeyValueContainerClass>() => R;
    }
  }
}

declare const NSKeyValueContainerClass: cocoa.NSKeyValueContainerClass.CLASS;
