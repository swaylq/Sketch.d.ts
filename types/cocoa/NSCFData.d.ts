/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCFData<T0 = void, T1 = void, T2 = void> extends NSMutableData {
    _providesConcreteBacking<R = boolean>(): R;
    setLength<R = void, P0 = number>(_setLength: P0): R;
    mutableBytes<R = void>(): R;
    bytes<R = void>(): R;
    length<R = number>(): R;
    _createDispatchData<R = unknown>(): R;
    _compact<R = boolean>(): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    retainCount<R = number>(): R;
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
    release<R = void>(): R;
    retain<R = unknown>(): R;
    hash<R = number>(): R;
    isEqual<R = boolean, P0 = unknown>(_isEqual: P0): R;
  }
  namespace NSCFData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableData {
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
    }
  }
}

declare const NSCFData: cocoa.NSCFData.CLASS;
