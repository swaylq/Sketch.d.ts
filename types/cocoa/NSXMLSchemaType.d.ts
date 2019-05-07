/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLSchemaType<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSXMLSchemaType {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSXMLSchemaType>(): R;
      new: <R = NSXMLSchemaType>() => R;
      stringValueForObject<R = unknown, P0 = unknown>(_stringValueForObject: P0): R;
    }
  }
}

declare const NSXMLSchemaType: cocoa.NSXMLSchemaType.CLASS;
