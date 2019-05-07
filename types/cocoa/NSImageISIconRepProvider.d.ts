/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageISIconRepProvider<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithISIcon<R = unknown, P0 = unknown>(_initWithISIcon: P0): R;
    representations<R = NSArray>(): R;
  }
  namespace NSImageISIconRepProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSImageISIconRepProvider>(): R;
      new: <R = NSImageISIconRepProvider>() => R;
    }
  }
}

declare const NSImageISIconRepProvider: cocoa.NSImageISIconRepProvider.CLASS;
