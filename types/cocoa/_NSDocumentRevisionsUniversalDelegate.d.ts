/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDocumentRevisionsUniversalDelegate<T0 = void, T1 = void, T2 = void> extends NSObject, CAAnimationDelegateProtocol {
    dealloc<R = void>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSDocumentRevisionsUniversalDelegate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, CAAnimationDelegateProtocol {
      alloc<R = _NSDocumentRevisionsUniversalDelegate>(): R;
      new: <R = _NSDocumentRevisionsUniversalDelegate>() => R;
      delegateWithBlock<R = unknown, P0 = CDUnknownBlockType>(_delegateWithBlock: P0): R;
    }
  }
}
