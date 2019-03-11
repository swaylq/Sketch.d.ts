/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentTree<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    ancestorLayersOfObject<R = unknown, P0 = unknown>(_ancestorLayersOfObject: P0): R;
    ancestorsOfObject<R = unknown, P0 = unknown>(_ancestorsOfObject: P0): R;
    parentForObject<R = unknown, P0 = unknown>(_parentForObject: P0): R;
    storeParentsForLayersContainedInParent<R = void, P0 = unknown>(_storeParentsForLayersContainedInParent: P0): R;
    initWithDocumentData<R = unknown, P0 = unknown>(_initWithDocumentData: P0): R;
    parentByObject<R = cocoa.NSMapTable>(): R;
    setParentByObject<R = void, P0 = cocoa.NSMapTable>(_v: P0): R;
    cache<R = cocoa.BCCache>(): R;
    setCache<R = void, P0 = cocoa.BCCache>(_v: P0): R;
    documentData<R = cocoa.MSImmutableDocumentData>(): R;
  }
  namespace classes {
    export interface MSDocumentTree<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSDocumentTree>(): R;
      new: <R = MSDocumentTree>() => R;
    }
  }
}

declare const MSDocumentTree: cocoa.classes.MSDocumentTree;
