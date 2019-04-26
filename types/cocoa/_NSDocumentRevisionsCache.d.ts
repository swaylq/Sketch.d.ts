/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDocumentRevisionsCache<T0 = void, T1 = void, T2 = void> extends NSObject {
    removeRevision<R = void, P0 = unknown>(_removeRevision: P0): R;
    updateCost_forRevision<R = void, P0 = number, P1 = unknown>(_updateCost: P0, _forRevision: P1): R;
    addRevision_cost<R = void, P0 = unknown, P1 = number>(_addRevision: P0, _cost: P1): R;
    containsRevision<R = boolean, P0 = unknown>(_containsRevision: P0): R;
    relinquishRevision<R = void, P0 = unknown>(_relinquishRevision: P0): R;
    acquireRevision<R = boolean, P0 = unknown>(_acquireRevision: P0): R;
    _insertUnpinnedRevision<R = void, P0 = unknown>(__insertUnpinnedRevision: P0): R;
    dealloc<R = void>(): R;
    initWithRevisionsController<R = unknown, P0 = unknown>(_initWithRevisionsController: P0): R;
    evictionEnabled<R = boolean>(): R;
    setEvictionEnabled<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _NSDocumentRevisionsCache {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSDocumentRevisionsCache>(): R;
      new: <R = _NSDocumentRevisionsCache>() => R;
    }
  }
}
