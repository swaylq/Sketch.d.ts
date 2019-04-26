/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSNestedDictionary<T0 = void, T1 = void, T2 = void> extends NSMutableDictionary {
    removeObjectForKey<R = void, P0 = unknown>(_removeObjectForKey: P0): R;
    setObject_forKey<R = void, P0 = unknown, P1 = unknown>(_setObject: P0, _forKey: P1): R;
    objectEnumerator<R = unknown>(): R;
    keyEnumerator<R = unknown>(): R;
    objectForKey<R = unknown, P0 = unknown>(_objectForKey: P0): R;
    count<R = number>(): R;
    _recursiveAllValues<R = unknown>(): R;
    _recursiveAllKeys<R = unknown>(): R;
  }
  namespace _NSNestedDictionary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableDictionary {}
  }
}
