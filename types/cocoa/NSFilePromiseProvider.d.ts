/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilePromiseProvider<T0 = void, T1 = void, T2 = void> extends NSObject, NSFileProviderProtocol, _NSPasteboardPromiseProviderAgencyProtocol, NSPasteboardWritingProtocol {}
  namespace NSFilePromiseProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSFileProviderProtocol, _NSPasteboardPromiseProviderAgencyProtocol, NSPasteboardWritingProtocol {
      alloc<R = NSFilePromiseProvider>(): R;
      new: <R = NSFilePromiseProvider>() => R;
      _provideItemNotifyQueue<R = unknown>(): R;
    }
  }
}

declare const NSFilePromiseProvider: cocoa.NSFilePromiseProvider.CLASS;
