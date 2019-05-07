/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextStorageCharacterArray<T0 = void, T1 = void, T2 = void> extends NSArray {
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    count<R = number>(): R;
    dealloc<R = void>(): R;
    initWithContainer<R = unknown, P0 = unknown>(_initWithContainer: P0): R;
  }
  namespace NSTextStorageCharacterArray {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSArray {}
  }
}

declare const NSTextStorageCharacterArray: cocoa.NSTextStorageCharacterArray.CLASS;
