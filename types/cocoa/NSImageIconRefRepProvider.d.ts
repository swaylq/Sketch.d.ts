/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageIconRefRepProvider<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithIconRef<R = unknown, P0 = OpaqueIconRef>(_initWithIconRef: P0): R;
    representations<R = NSArray>(): R;
  }
  namespace NSImageIconRefRepProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSImageIconRefRepProvider>(): R;
      new: <R = NSImageIconRefRepProvider>() => R;
    }
  }
}

declare const NSImageIconRefRepProvider: cocoa.NSImageIconRefRepProvider.CLASS;
