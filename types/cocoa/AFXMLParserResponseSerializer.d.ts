/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFXMLParserResponseSerializer<T0 = void, T1 = void, T2 = void> extends AFHTTPResponseSerializer {}
  namespace AFXMLParserResponseSerializer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends AFHTTPResponseSerializer {
      alloc<R = AFXMLParserResponseSerializer>(): R;
      new: <R = AFXMLParserResponseSerializer>() => R;
    }
  }
}

declare const AFXMLParserResponseSerializer: cocoa.AFXMLParserResponseSerializer.CLASS;
