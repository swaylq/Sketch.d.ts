/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOverlayDictionaryEnumerator<T0 = void, T1 = void, T2 = void> extends NSEnumerator {
    nextObject<R = unknown>(): R;
    allObjects<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithBaseKeys_overlayKeys<R = unknown, P0 = unknown, P1 = unknown>(_initWithBaseKeys: P0, _overlayKeys: P1): R;
  }
  namespace _NSOverlayDictionaryEnumerator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEnumerator {}
  }
}
