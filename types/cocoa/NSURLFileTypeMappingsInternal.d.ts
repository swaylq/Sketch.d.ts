/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLFileTypeMappingsInternal<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSURLFileTypeMappingsInternal {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSURLFileTypeMappingsInternal>(): R;
      new: <R = NSURLFileTypeMappingsInternal>() => R;
    }
  }
}

declare const NSURLFileTypeMappingsInternal: cocoa.NSURLFileTypeMappingsInternal.CLASS;
