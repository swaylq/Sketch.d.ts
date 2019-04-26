/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLError<T0 = void, T1 = void, T2 = void> extends NSError {}
  namespace NSURLError {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSError {
      alloc<R = NSURLError>(): R;
      new: <R = NSURLError>() => R;
    }
  }
}

declare const NSURLError: cocoa.NSURLError.CLASS;
