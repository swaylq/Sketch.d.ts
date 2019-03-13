/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHIPresentationInstance<T = any> extends NSObject {
    currentPresentationInstance<R = OpaqueHIPresentationInstanceRef>(): R;
    setSpace<R = void, P0 = number>(_setSpace: P0): R;
    discard<R = void>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSHIPresentationInstance<T = any> extends NSObject {
      alloc<R = NSHIPresentationInstance>(): R;
      new: <R = NSHIPresentationInstance>() => R;
    }
  }
}

declare const NSHIPresentationInstance: cocoa.classes.NSHIPresentationInstance;