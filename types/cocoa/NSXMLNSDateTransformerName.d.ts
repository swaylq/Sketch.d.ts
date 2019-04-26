/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLNSDateTransformerName<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {}
  namespace NSXMLNSDateTransformerName {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {
      alloc<R = NSXMLNSDateTransformerName>(): R;
      new: <R = NSXMLNSDateTransformerName>() => R;
    }
  }
}

declare const NSXMLNSDateTransformerName: cocoa.NSXMLNSDateTransformerName.CLASS;
