/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPrintInfoDictionaryProxy<T0 = void, T1 = void, T2 = void> extends NSMutableDictionary {
    removeObjectForKey<R = void, P0 = unknown>(_removeObjectForKey: P0): R;
    setObject_forKey<R = void, P0 = unknown, P1 = unknown>(_setObject: P0, _forKey: P1): R;
    objectForKey<R = unknown, P0 = unknown>(_objectForKey: P0): R;
    keyEnumerator<R = unknown>(): R;
    count<R = number>(): R;
    superRelease<R = void>(): R;
    release<R = void>(): R;
    retain<R = unknown>(): R;
    initWithPrintInfo_purpose<R = unknown, P0 = unknown, P1 = number>(_initWithPrintInfo: P0, _purpose: P1): R;
  }
  namespace NSPrintInfoDictionaryProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableDictionary {
      _pmKeyForKey<R = unknown, P0 = unknown>(__pmKeyForKey: P0): R;
      _keysForPMKeys<R = unknown, P0 = unknown>(__keysForPMKeys: P0): R;
    }
  }
}

declare const NSPrintInfoDictionaryProxy: cocoa.NSPrintInfoDictionaryProxy.CLASS;
