/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPasteboardTypeCache<T0 = void, T1 = void, T2 = void> extends NSObject {
    requestOnlyTypesForIndex<R = unknown, P0 = number>(_requestOnlyTypesForIndex: P0): R;
    addRequestOnlyType_forIndex<R = void, P0 = unknown, P1 = number>(_addRequestOnlyType: P0, _forIndex: P1): R;
    _conformingTypeIdentifiers<R = unknown>(): R;
    dealloc<R = void>(): R;
    cachedTypeNames<R = NSMutableArray>(): R;
    cachedTypeNameUnion<R = NSSet>(): R;
  }
  namespace _NSPasteboardTypeCache {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSPasteboardTypeCache>(): R;
      new: <R = _NSPasteboardTypeCache>() => R;
    }
  }
}
