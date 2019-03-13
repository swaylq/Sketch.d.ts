/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPasteboardItemAuxObject<T = any> extends NSObject {
    dealloc<R = void>(): R;
    providersByType<R = unknown>(): R;
    dataByType<R = unknown>(): R;
    orderedTypes<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSPasteboardItemAuxObject<T = any> extends NSObject {
      alloc<R = _NSPasteboardItemAuxObject>(): R;
      new: <R = _NSPasteboardItemAuxObject>() => R;
    }
  }
}