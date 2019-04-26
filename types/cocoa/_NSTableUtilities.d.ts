/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTableUtilities<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _NSTableUtilities {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSTableUtilities>(): R;
      new: <R = _NSTableUtilities>() => R;
      _referenceBinderAtIndex_forTableView<R = unknown, P0 = number, P1 = unknown>(__referenceBinderAtIndex: P0, _forTableView: P1): R;
      _referenceBinderForTableColumn<R = unknown, P0 = unknown>(__referenceBinderForTableColumn: P0): R;
      _unregisterTableColumnBinder_fromTableColumn<R = void, P0 = unknown, P1 = unknown>(__unregisterTableColumnBinder: P0, _fromTableColumn: P1): R;
      _registerTableColumnBinder_toTableColumn_autoCreateReferenceController<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__registerTableColumnBinder: P0, _toTableColumn: P1, _autoCreateReferenceController: P2): R;
      _setPartialKeysWithTableBinder_forAllTableColumnBindersOfTableView<R = void, P0 = unknown, P1 = unknown>(__setPartialKeysWithTableBinder: P0, _forAllTableColumnBindersOfTableView: P1): R;
      _setPartialKeysWithTableBinder_forTableColumnBinder<R = void, P0 = unknown, P1 = unknown>(__setPartialKeysWithTableBinder: P0, _forTableColumnBinder: P1): R;
      _breakConnectionOfTableBinderIfAutoCreated<R = void, P0 = unknown>(__breakConnectionOfTableBinderIfAutoCreated: P0): R;
      _tableBinderForTableViewSupportsSorting<R = boolean, P0 = unknown>(__tableBinderForTableViewSupportsSorting: P0): R;
      _tableBinderForTableView<R = unknown, P0 = unknown>(__tableBinderForTableView: P0): R;
    }
  }
}
