/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKDiskCacheDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    diskCache_dataForKey<R = NSData, P0 = SMKDiskCache, P1 = NSString>(_diskCache: P0, _dataForKey: P1): R;
  }
  namespace SMKDiskCacheDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
