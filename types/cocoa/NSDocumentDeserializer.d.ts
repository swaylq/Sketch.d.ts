/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentDeserializer<T = any> extends NSAKDeserializer {
    fixupDirInfo<R = void, P0 = unknown>(_fixupDirInfo: P0): R;
  }
  namespace classes {
    export interface NSDocumentDeserializer<T = any> extends NSAKDeserializer {
      alloc<R = NSDocumentDeserializer>(): R;
      new: <R = NSDocumentDeserializer>() => R;
    }
  }
}

declare const NSDocumentDeserializer: cocoa.classes.NSDocumentDeserializer;