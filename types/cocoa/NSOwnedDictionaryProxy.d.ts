/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOwnedDictionaryProxy<T0 = void, T1 = void, T2 = void> extends NSDictionary {
    objectForKey<R = unknown, P0 = unknown>(_objectForKey: P0): R;
    keyEnumerator<R = unknown>(): R;
    count<R = number>(): R;
    superRelease<R = void>(): R;
    release<R = void>(): R;
    retain<R = unknown>(): R;
    initWithOwner<R = unknown, P0 = unknown>(_initWithOwner: P0): R;
  }
  namespace NSOwnedDictionaryProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDictionary {}
  }
}

declare const NSOwnedDictionaryProxy: cocoa.NSOwnedDictionaryProxy.CLASS;
