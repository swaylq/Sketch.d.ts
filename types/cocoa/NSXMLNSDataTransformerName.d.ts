/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLNSDataTransformerName<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {}
  namespace NSXMLNSDataTransformerName {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {
      alloc<R = NSXMLNSDataTransformerName>(): R;
      new: <R = NSXMLNSDataTransformerName>() => R;
    }
  }
}

declare const NSXMLNSDataTransformerName: cocoa.NSXMLNSDataTransformerName.CLASS;
