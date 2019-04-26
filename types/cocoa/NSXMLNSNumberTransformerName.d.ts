/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLNSNumberTransformerName<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {
    dealloc<R = void>(): R;
    _oldTransformedValue<R = unknown, P0 = unknown>(__oldTransformedValue: P0): R;
  }
  namespace NSXMLNSNumberTransformerName {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {
      alloc<R = NSXMLNSNumberTransformerName>(): R;
      new: <R = NSXMLNSNumberTransformerName>() => R;
    }
  }
}

declare const NSXMLNSNumberTransformerName: cocoa.NSXMLNSNumberTransformerName.CLASS;
