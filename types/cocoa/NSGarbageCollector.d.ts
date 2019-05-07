/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGarbageCollector<T0 = void, T1 = void, T2 = void> extends NSObject {
    enableCollectorForPointer<R = void, P0 = void>(_enableCollectorForPointer: P0): R;
    disableCollectorForPointer<R = void, P0 = void>(_disableCollectorForPointer: P0): R;
    collectExhaustively<R = void>(): R;
    collectIfNeeded<R = void>(): R;
    isCollecting<R = boolean>(): R;
    isEnabled<R = boolean>(): R;
    enable<R = void>(): R;
    disable<R = void>(): R;
  }
  namespace NSGarbageCollector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSGarbageCollector>(): R;
      new: <R = NSGarbageCollector>() => R;
      defaultCollector<R = unknown>(): R;
    }
  }
}

declare const NSGarbageCollector: cocoa.NSGarbageCollector.CLASS;
