/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindowServerOrderingState<T0 = void, T1 = void, T2 = void> extends NSObject, _NSCGSWindowOrderingStateProtocol {
    commit<R = void>(): R;
    dealloc<R = void>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSCGSWindowServerOrderingState {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, _NSCGSWindowOrderingStateProtocol {
      alloc<R = _NSCGSWindowServerOrderingState>(): R;
      new: <R = _NSCGSWindowServerOrderingState>() => R;
    }
  }
}
