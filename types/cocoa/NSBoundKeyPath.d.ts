/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBoundKeyPath<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSBoundKeyPath {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSBoundKeyPath>(): R;
      new: <R = NSBoundKeyPath>() => R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
    }
  }
}

declare const NSBoundKeyPath: cocoa.NSBoundKeyPath.CLASS;
