/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCFError<T0 = void, T1 = void, T2 = void> extends NSError {
    classForCoder<R = unknown>(): R;
    userInfo<R = unknown>(): R;
    domain<R = unknown>(): R;
    code<R = number>(): R;
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
  }
  namespace NSCFError {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSError {
      alloc<R = NSCFError>(): R;
      new: <R = NSCFError>() => R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
    }
  }
}

declare const NSCFError: cocoa.NSCFError.CLASS;
