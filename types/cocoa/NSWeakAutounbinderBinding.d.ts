/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWeakAutounbinderBinding<T0 = void, T1 = void, T2 = void> extends NSObject {
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    initWithName_boundObject<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _boundObject: P1): R;
  }
  namespace NSWeakAutounbinderBinding {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSWeakAutounbinderBinding>(): R;
      new: <R = NSWeakAutounbinderBinding>() => R;
    }
  }
}

declare const NSWeakAutounbinderBinding: cocoa.NSWeakAutounbinderBinding.CLASS;
