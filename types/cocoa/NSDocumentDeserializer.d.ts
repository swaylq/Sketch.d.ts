/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentDeserializer<T0 = void, T1 = void, T2 = void> extends NSAKDeserializer {
    fixupDirInfo<R = void, P0 = unknown>(_fixupDirInfo: P0): R;
  }
  namespace NSDocumentDeserializer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAKDeserializer {
      alloc<R = NSDocumentDeserializer>(): R;
      new: <R = NSDocumentDeserializer>() => R;
    }
  }
}

declare const NSDocumentDeserializer: cocoa.NSDocumentDeserializer.CLASS;
