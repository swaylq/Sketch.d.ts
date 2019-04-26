/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCFType<T0 = void, T1 = void, T2 = void> extends NSObject {
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
    hash<R = number>(): R;
  }
  namespace NSCFType {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSCFType>(): R;
      new: <R = NSCFType>() => R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
    }
  }
}

declare const NSCFType: cocoa.NSCFType.CLASS;
