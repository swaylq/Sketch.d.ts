/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLSNotificationHelperCountedSet<T0 = void, T1 = void, T2 = void> extends NSLSNotificationHelper {
    dealloc<R = void>(): R;
  }
  namespace NSLSNotificationHelperCountedSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSLSNotificationHelper {
      alloc<R = NSLSNotificationHelperCountedSet>(): R;
      new: <R = NSLSNotificationHelperCountedSet>() => R;
    }
  }
}

declare const NSLSNotificationHelperCountedSet: cocoa.NSLSNotificationHelperCountedSet.CLASS;
