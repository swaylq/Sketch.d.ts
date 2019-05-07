/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextTab<T0 = void, T1 = void, T2 = void> {
    // + NSTextTab(BCJSONEncoding): 
    initWithJSONDecoder<R = unknown, P0 = unknown>(_initWithJSONDecoder: P0): R;
    encodeAsJSON<R = void, P0 = unknown>(_encodeAsJSON: P0): R;
    // + NSTextTab(TreeAsDictionarySupport): 
    treeAsDictionary<R = unknown>(): R;
  }
  namespace NSTextTab {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const NSTextTab: cocoa.NSTextTab.CLASS;
