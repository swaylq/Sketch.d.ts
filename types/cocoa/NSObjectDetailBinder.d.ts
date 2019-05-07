/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObjectDetailBinder<T0 = void, T1 = void, T2 = void> extends NSEditorBinder {
    _useErrorPresenter<R = void, P0 = unknown>(__useErrorPresenter: P0): R;
    noteContentValueHasChanged<R = void>(): R;
    setMasterObjectRelationship<R = boolean, P0 = unknown>(_setMasterObjectRelationship: P0): R;
    setMasterObjectRelationship_refreshDetailContent<R = boolean, P0 = unknown, P1 = boolean>(_setMasterObjectRelationship: P0, _refreshDetailContent: P1): R;
    refreshDetailContent<R = void>(): R;
    deletesObjectsOnRemove<R = boolean>(): R;
    setDeletesObjectsOnRemove<R = void, P0 = boolean>(_setDeletesObjectsOnRemove: P0): R;
    handlesContentAsCompoundValue<R = boolean>(): R;
    setHandlesContentAsCompoundValue<R = void, P0 = boolean>(_setHandlesContentAsCompoundValue: P0): R;
    _notifyEditorStateChanged<R = void, P0 = boolean>(__notifyEditorStateChanged: P0): R;
  }
  namespace NSObjectDetailBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEditorBinder {
      alloc<R = NSObjectDetailBinder>(): R;
      new: <R = NSObjectDetailBinder>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSObjectDetailBinder: cocoa.NSObjectDetailBinder.CLASS;
