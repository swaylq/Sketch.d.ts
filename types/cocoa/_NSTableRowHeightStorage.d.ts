/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTableRowHeightStorage<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    deleteRowsInRange<R = void, P0 = _NSRange>(_deleteRowsInRange: P0): R;
    _variableDeleteRowsWithRange<R = void, P0 = _NSRange>(__variableDeleteRowsWithRange: P0): R;
    _normalDeleteRowsWithRange<R = void, P0 = _NSRange>(__normalDeleteRowsWithRange: P0): R;
    addInsertionHolesAtIndexes<R = void, P0 = unknown>(_addInsertionHolesAtIndexes: P0): R;
    _normalAddInsertionHolesAtIndexes<R = void, P0 = unknown>(__normalAddInsertionHolesAtIndexes: P0): R;
    _variableAddInsertionHolesAtIndexes<R = void, P0 = unknown>(__variableAddInsertionHolesAtIndexes: P0): R;
    applyRowDeletions_insertions<R = void, P0 = unknown, P1 = unknown>(_applyRowDeletions: P0, _insertions: P1): R;
    _normalApplyRowDeletions_insertions<R = void, P0 = unknown, P1 = unknown>(__normalApplyRowDeletions: P0, _insertions: P1): R;
    _variableApplyRowDeletions_insertions<R = void, P0 = unknown, P1 = unknown>(__variableApplyRowDeletions: P0, _insertions: P1): R;
    insertRowCount_atIndex<R = void, P0 = number, P1 = number>(_insertRowCount: P0, _atIndex: P1): R;
    deleteRowCount_atIndex<R = void, P0 = number, P1 = number>(_deleteRowCount: P0, _atIndex: P1): R;
    _internalDeleteRows_atIndex<R = void, P0 = number, P1 = number>(__internalDeleteRows: P0, _atIndex: P1): R;
    _internalChangeForDeleteRows_atIndex_withPriorChange<R = number, P0 = number, P1 = number, P2 = number>(__internalChangeForDeleteRows: P0, _atIndex: P1, _withPriorChange: P2): R;
    _debugRowHeights<R = unknown>(): R;
    _internalInsertRows_atIndex<R = void, P0 = number, P1 = number>(__internalInsertRows: P0, _atIndex: P1): R;
    _internalChangeForInsertRows_atIndex<R = number, P0 = number, P1 = number>(__internalChangeForInsertRows: P0, _atIndex: P1): R;
    _ensureRowHeightsIsAtLeastThisSize<R = void, P0 = number>(__ensureRowHeightsIsAtLeastThisSize: P0): R;
    noteHeightOfRowsWithIndexesChanged<R = boolean, P0 = unknown>(_noteHeightOfRowsWithIndexesChanged: P0): R;
    noteHeightOfRowsWithIndexesChanged_heightProvider<R = boolean, P0 = unknown, P1 = CDUnknownBlockType>(_noteHeightOfRowsWithIndexesChanged: P0, _heightProvider: P1): R;
    computeTableHeightForNumberOfRows<R = number, P0 = number>(_computeTableHeightForNumberOfRows: P0): R;
    computeRowAtPoint<R = number, P0 = CGPoint>(_computeRowAtPoint: P0): R;
    _normalComputeRowAtPoint<R = number, P0 = CGPoint>(__normalComputeRowAtPoint: P0): R;
    _adjustRowForGapRow<R = number, P0 = number>(__adjustRowForGapRow: P0): R;
    _variableComputeRowAtPoint<R = number, P0 = CGPoint>(__variableComputeRowAtPoint: P0): R;
    computeRectOfRow_assumingExists<R = CGRect, P0 = number, P1 = boolean>(_computeRectOfRow: P0, _assumingExists: P1): R;
    computeRectOfRow<R = CGRect, P0 = number>(_computeRectOfRow: P0): R;
    _normalComputeRectOfRow_assumingExists<R = CGRect, P0 = number, P1 = boolean>(__normalComputeRectOfRow: P0, _assumingExists: P1): R;
    _variableComputeRectOfRow<R = CGRect, P0 = number>(__variableComputeRectOfRow: P0): R;
    _standardFullGroupHeight<R = number>(): R;
    _standardFullRowHeight<R = number>(): R;
    _ensureRowHeights<R = void>(): R;
    _createRowHeightsArray<R = void>(): R;
    _cacheRowHeights<R = void>(): R;
    _uncachedRectHeightOfRow<R = number, P0 = number>(__uncachedRectHeightOfRow: P0): R;
    backgroundFillerRect<R = CGRect>(): R;
    invalidateNumberOfRowsCache<R = void>(): R;
    invalidateCacheAndStorage<R = void>(): R;
    dealloc<R = void>(): R;
    initWithTableView<R = unknown, P0 = unknown>(_initWithTableView: P0): R;
    gapRowHeight<R = number>(): R;
    setGapRowHeight<R = void, P0 = number>(_v: P0): R;
    gapRow<R = number>(): R;
    setGapRow<R = void, P0 = number>(_v: P0): R;
    numberOfRows<R = number>(): R;
    valid<R = boolean>(): R;
  }
  namespace _NSTableRowHeightStorage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = _NSTableRowHeightStorage>(): R;
      new: <R = _NSTableRowHeightStorage>() => R;
    }
  }
}
