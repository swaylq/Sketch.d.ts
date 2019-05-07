/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueChangeDictionary<T0 = void, T1 = void, T2 = void> extends NSDictionary {
    keyEnumerator<R = unknown>(): R;
    objectForKey<R = unknown, P0 = unknown>(_objectForKey: P0): R;
    count<R = number>(): R;
    dealloc<R = void>(): R;
    retainObjects<R = void>(): R;
    setOriginalObservable<R = void, P0 = unknown>(_setOriginalObservable: P0): R;
    setDetailsNoCopy_originalObservable<R = void, P0 = unknown, P1 = unknown>(_setDetailsNoCopy: P0, _originalObservable: P1): R;
    initWithDetailsNoCopy_originalObservable_isPriorNotification<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(_initWithDetailsNoCopy: P0, _originalObservable: P1, _isPriorNotification: P2): R;
  }
  namespace NSKeyValueChangeDictionary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDictionary {}
  }
}

declare const NSKeyValueChangeDictionary: cocoa.NSKeyValueChangeDictionary.CLASS;
