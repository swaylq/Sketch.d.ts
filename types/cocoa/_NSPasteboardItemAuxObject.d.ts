/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPasteboardItemAuxObject<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    providersByType<R = unknown>(): R;
    dataByType<R = unknown>(): R;
    orderedTypes<R = unknown>(): R;
  }
  namespace _NSPasteboardItemAuxObject {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSPasteboardItemAuxObject>(): R;
      new: <R = _NSPasteboardItemAuxObject>() => R;
    }
  }
}
