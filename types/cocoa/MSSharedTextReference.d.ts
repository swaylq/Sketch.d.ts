/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedTextReference<T0 = void, T1 = void, T2 = void> extends MSSharedStyleReference {
    shareableObjectType<R = number>(): R;
    foreignObjectCollectionInDocument<R = unknown, P0 = unknown>(_foreignObjectCollectionInDocument: P0): R;
    addToDocument_withAssetLibraryController<R = unknown, P0 = unknown, P1 = unknown>(_addToDocument: P0, _withAssetLibraryController: P1): R;
  }
  namespace MSSharedTextReference {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSharedStyleReference {
      alloc<R = MSSharedTextReference>(): R;
      new: <R = MSSharedTextReference>() => R;
    }
  }
}

declare const MSSharedTextReference: cocoa.MSSharedTextReference.CLASS;
