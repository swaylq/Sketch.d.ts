/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCFCharacterSet<T0 = void, T1 = void, T2 = void> extends NSMutableCharacterSet {
    classForKeyedArchiver<R = unknown>(): R;
    classForArchiver<R = unknown>(): R;
    makeCharacterSetFast<R = void>(): R;
    makeCharacterSetCompact<R = void>(): R;
    invertedSet<R = unknown>(): R;
    bitmapRepresentation<R = unknown>(): R;
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
  }
  namespace NSCFCharacterSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableCharacterSet {
      alloc<R = NSCFCharacterSet>(): R;
      new: <R = NSCFCharacterSet>() => R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
    }
  }
}

declare const NSCFCharacterSet: cocoa.NSCFCharacterSet.CLASS;
