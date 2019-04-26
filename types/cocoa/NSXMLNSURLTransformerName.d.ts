/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLNSURLTransformerName<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {}
  namespace NSXMLNSURLTransformerName {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {
      alloc<R = NSXMLNSURLTransformerName>(): R;
      new: <R = NSXMLNSURLTransformerName>() => R;
    }
  }
}

declare const NSXMLNSURLTransformerName: cocoa.NSXMLNSURLTransformerName.CLASS;
