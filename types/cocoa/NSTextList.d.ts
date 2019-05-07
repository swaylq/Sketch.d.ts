/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextList<T0 = void, T1 = void, T2 = void> {
    // + NSTextList(BCJSONEncoding): 
    initWithJSONDecoder<R = unknown, P0 = unknown>(_initWithJSONDecoder: P0): R;
    encodeAsJSON<R = void, P0 = unknown>(_encodeAsJSON: P0): R;
    // + NSTextList(ModelSyncSupport): 
    propertiesAreEqual<R = boolean, P0 = unknown>(_propertiesAreEqual: P0): R;
    // + NSTextList(TreeAsDictionarySupport): 
    treeAsDictionary<R = unknown>(): R;
  }
  namespace NSTextList {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const NSTextList: cocoa.NSTextList.CLASS;
