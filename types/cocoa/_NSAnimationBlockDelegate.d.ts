/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAnimationBlockDelegate<T0 = void, T1 = void, T2 = void> extends NSObject, NSAnimationDelegateProtocol {
    dealloc<R = void>(): R;
    initWithBlock<R = unknown, P0 = CDUnknownBlockType>(_initWithBlock: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSAnimationBlockDelegate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSAnimationDelegateProtocol {
      alloc<R = _NSAnimationBlockDelegate>(): R;
      new: <R = _NSAnimationBlockDelegate>() => R;
    }
  }
}
