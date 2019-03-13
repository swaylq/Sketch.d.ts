/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLTidy<T = any> extends NSObject {}
  namespace classes {
    export interface NSXMLTidy<T = any> extends NSObject {
      alloc<R = NSXMLTidy>(): R;
      new: <R = NSXMLTidy>() => R;
      loadTidy<R = void>(): R;
      isLoaded<R = boolean>(): R;
    }
  }
}

declare const NSXMLTidy: cocoa.classes.NSXMLTidy;