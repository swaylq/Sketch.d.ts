/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentSerializer<T0 = void, T1 = void, T2 = void> extends NSAKSerializer {}
  namespace NSDocumentSerializer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAKSerializer {
      alloc<R = NSDocumentSerializer>(): R;
      new: <R = NSDocumentSerializer>() => R;
    }
  }
}

declare const NSDocumentSerializer: cocoa.NSDocumentSerializer.CLASS;
