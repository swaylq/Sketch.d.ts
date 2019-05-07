/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableRowAndCellTracker<T0 = void, T1 = void, T2 = void> extends NSObject {
    removeAll<R = void>(): R;
    unregisterCellsOfRowIndexes_columnIndexes<R = void, P0 = unknown, P1 = unknown>(_unregisterCellsOfRowIndexes: P0, _columnIndexes: P1): R;
    shiftIndex_shiftAmount_isDeleteForMove<R = void, P0 = number, P1 = number, P2 = boolean>(_shiftIndex: P0, _shiftAmount: P1, _isDeleteForMove: P2): R;
    unregisterCellsOfTableColumns<R = void, P0 = unknown>(_unregisterCellsOfTableColumns: P0): R;
    _elementSpecifiersForTableColumns<R = unknown, P0 = unknown>(__elementSpecifiersForTableColumns: P0): R;
    insertSpecifierComponent_atIndex<R = void, P0 = number, P1 = number>(_insertSpecifierComponent: P0, _atIndex: P1): R;
    insertIndex<R = void, P0 = number>(_insertIndex: P0): R;
    removeChildrenOfIndex<R = void, P0 = number>(_removeChildrenOfIndex: P0): R;
    removeIndex_shiftsResults<R = void, P0 = number, P1 = boolean>(_removeIndex: P0, _shiftsResults: P1): R;
    indexForSpecifierComponent<R = number, P0 = number>(_indexForSpecifierComponent: P0): R;
    indexForSpecifierComponent_inRange<R = number, P0 = number, P1 = _NSRange>(_indexForSpecifierComponent: P0, _inRange: P1): R;
    specifierComponentForIndex_registerIfNeeded<R = number, P0 = number, P1 = boolean>(_specifierComponentForIndex: P0, _registerIfNeeded: P1): R;
    dealloc<R = void>(): R;
    initWithTableView<R = unknown, P0 = unknown>(_initWithTableView: P0): R;
  }
  namespace NSTableRowAndCellTracker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTableRowAndCellTracker>(): R;
      new: <R = NSTableRowAndCellTracker>() => R;
    }
  }
}

declare const NSTableRowAndCellTracker: cocoa.NSTableRowAndCellTracker.CLASS;
