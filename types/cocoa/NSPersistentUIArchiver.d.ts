/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUIArchiver<T0 = void, T1 = void, T2 = void> extends NSCoder, NSKeyedArchiverDelegateProtocol {
    finishEncodingWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_finishEncodingWithCompletionHandler: P0): R;
    dealloc<R = void>(): R;
    initWithQueue<R = unknown, P0 = unknown>(_initWithQueue: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSPersistentUIArchiver {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCoder, NSKeyedArchiverDelegateProtocol {
      alloc<R = NSPersistentUIArchiver>(): R;
      new: <R = NSPersistentUIArchiver>() => R;
    }
  }
}

declare const NSPersistentUIArchiver: cocoa.NSPersistentUIArchiver.CLASS;
