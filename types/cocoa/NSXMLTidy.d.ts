/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLTidy<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSXMLTidy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSXMLTidy>(): R;
      new: <R = NSXMLTidy>() => R;
      loadTidy<R = void>(): R;
      isLoaded<R = boolean>(): R;
    }
  }
}

declare const NSXMLTidy: cocoa.NSXMLTidy.CLASS;
