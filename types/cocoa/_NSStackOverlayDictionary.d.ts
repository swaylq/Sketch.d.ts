/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSStackOverlayDictionary<T0 = void, T1 = void, T2 = void> extends NSDictionary {
    keyEnumerator<R = unknown>(): R;
    objectForKey<R = unknown, P0 = unknown>(_objectForKey: P0): R;
    count<R = number>(): R;
    initWithBase_overlay<R = unknown, P0 = unknown, P1 = unknown>(_initWithBase: P0, _overlay: P1): R;
  }
  namespace _NSStackOverlayDictionary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDictionary {
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}
