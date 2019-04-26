/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSArrayDetailBinder<T0 = void, T1 = void, T2 = void> extends NSObjectDetailBinder {
    removeObjectsFromMasterArrayRelationshipAtIndexes_selectionMode<R = boolean, P0 = unknown, P1 = number>(_removeObjectsFromMasterArrayRelationshipAtIndexes: P0, _selectionMode: P1): R;
    removeObjectFromMasterArrayRelationshipAtIndex_selectionMode<R = boolean, P0 = number, P1 = number>(_removeObjectFromMasterArrayRelationshipAtIndex: P0, _selectionMode: P1): R;
    insertObjectsIntoMasterArrayRelationship_atIndexes_selectionMode<R = boolean, P0 = unknown, P1 = unknown, P2 = number>(_insertObjectsIntoMasterArrayRelationship: P0, _atIndexes: P1, _selectionMode: P2): R;
    insertObjectIntoMasterArrayRelationship_atIndex_selectionMode<R = boolean, P0 = unknown, P1 = number, P2 = number>(_insertObjectIntoMasterArrayRelationship: P0, _atIndex: P1, _selectionMode: P2): R;
    addObjectsToMasterArrayRelationship_selectionMode<R = boolean, P0 = unknown, P1 = number>(_addObjectsToMasterArrayRelationship: P0, _selectionMode: P1): R;
    addObjectToMasterArrayRelationship_selectionMode<R = boolean, P0 = unknown, P1 = number>(_addObjectToMasterArrayRelationship: P0, _selectionMode: P1): R;
    _performArrayBinderOperation_singleObject_multipleObjects_singleIndex_multipleIndexes_selectionMode<R = boolean, P0 = number, P1 = unknown, P2 = unknown, P3 = number, P4 = unknown, P5 = number>(__performArrayBinderOperation: P0, _singleObject: P1, _multipleObjects: P2, _singleIndex: P3, _multipleIndexes: P4, _selectionMode: P5): R;
    _refreshDetailContentInBackground<R = void, P0 = boolean>(__refreshDetailContentInBackground: P0): R;
    _selectAllContent_inDetailController<R = void, P0 = unknown, P1 = unknown>(__selectAllContent: P0, _inDetailController: P1): R;
    _canGuaranteeOrderOfContentObjects<R = boolean>(): R;
    selectsAllWhenSettingContent<R = boolean>(): R;
    setSelectsAllWhenSettingContent<R = void, P0 = boolean>(_setSelectsAllWhenSettingContent: P0): R;
    _handlesSelectAll<R = boolean>(): R;
  }
  namespace NSArrayDetailBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectDetailBinder {
      alloc<R = NSArrayDetailBinder>(): R;
      new: <R = NSArrayDetailBinder>() => R;
    }
  }
}

declare const NSArrayDetailBinder: cocoa.NSArrayDetailBinder.CLASS;
