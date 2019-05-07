/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSInputAlignmentMatch<T0 = void, T1 = void, T2 = void> extends NSObject, NSInputAlignmentMatchProtocol {
    dealloc<R = void>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSInputAlignmentMatch {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSInputAlignmentMatchProtocol {
      alloc<R = _NSInputAlignmentMatch>(): R;
      new: <R = _NSInputAlignmentMatch>() => R;
    }
  }
}
