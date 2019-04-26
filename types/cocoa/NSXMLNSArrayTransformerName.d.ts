/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLNSArrayTransformerName<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {}
  namespace NSXMLNSArrayTransformerName {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {
      alloc<R = NSXMLNSArrayTransformerName>(): R;
      new: <R = NSXMLNSArrayTransformerName>() => R;
    }
  }
}

declare const NSXMLNSArrayTransformerName: cocoa.NSXMLNSArrayTransformerName.CLASS;
