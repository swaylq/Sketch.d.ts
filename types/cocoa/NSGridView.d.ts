/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGridView<T0 = void, T1 = void, T2 = void> extends NSView {
    _mergeCellsInRect<R = void, P0 = CGRect>(__mergeCellsInRect: P0): R;
    _expandMergeBoundsIfNeeded<R = CGRect, P0 = CGRect>(__expandMergeBoundsIfNeeded: P0): R;
    _expandMergeBounds_ifNeededForColumnAtIndex<R = boolean, P0 = CGRect, P1 = number>(__expandMergeBounds: P0, _ifNeededForColumnAtIndex: P1): R;
    _expandMergeBounds_ifNeededForRow<R = boolean, P0 = CGRect, P1 = unknown>(__expandMergeBounds: P0, _ifNeededForRow: P1): R;
    _expandMergeBounds_ifNeededForCell<R = boolean, P0 = CGRect, P1 = unknown>(__expandMergeBounds: P0, _ifNeededForCell: P1): R;
    _unmergeCellsInRect<R = void, P0 = CGRect>(__unmergeCellsInRect: P0): R;
    mergeCellsInHorizontalRange_verticalRange<R = void, P0 = _NSRange, P1 = _NSRange>(_mergeCellsInHorizontalRange: P0, _verticalRange: P1): R;
    deleteColumn<R = void, P0 = unknown>(_deleteColumn: P0): R;
    deleteRow<R = void, P0 = unknown>(_deleteRow: P0): R;
    _insertColumnAtIndex_withViews<R = unknown, P0 = number, P1 = unknown>(__insertColumnAtIndex: P0, _withViews: P1): R;
    _insertRowAtIndex_withViews<R = unknown, P0 = number, P1 = unknown>(__insertRowAtIndex: P0, _withViews: P1): R;
    removeColumnAtIndex<R = void, P0 = number>(_removeColumnAtIndex: P0): R;
    _insertColumnCells_atIndex<R = void, P0 = unknown, P1 = number>(__insertColumnCells: P0, _atIndex: P1): R;
    _removeColumnCellsAtIndex<R = unknown, P0 = number>(__removeColumnCellsAtIndex: P0): R;
    moveColumnAtIndex_toIndex<R = void, P0 = number, P1 = number>(_moveColumnAtIndex: P0, _toIndex: P1): R;
    _verifyInsertionOfColumnAtIndex<R = boolean, P0 = number>(__verifyInsertionOfColumnAtIndex: P0): R;
    _verifyInsertionOfRowAtIndex<R = boolean, P0 = number>(__verifyInsertionOfRowAtIndex: P0): R;
    _verifyRemovalOfRowColumn<R = boolean, P0 = unknown>(__verifyRemovalOfRowColumn: P0): R;
    insertColumnAtIndex_withViews<R = unknown, P0 = number, P1 = unknown>(_insertColumnAtIndex: P0, _withViews: P1): R;
    addColumnWithViews<R = unknown, P0 = unknown>(_addColumnWithViews: P0): R;
    removeRowAtIndex<R = void, P0 = number>(_removeRowAtIndex: P0): R;
    moveRowAtIndex_toIndex<R = void, P0 = number, P1 = number>(_moveRowAtIndex: P0, _toIndex: P1): R;
    insertRowAtIndex_withViews<R = unknown, P0 = number, P1 = unknown>(_insertRowAtIndex: P0, _withViews: P1): R;
    addRowWithViews<R = unknown, P0 = unknown>(_addRowWithViews: P0): R;
    cellForView<R = unknown, P0 = unknown>(_cellForView: P0): R;
    _setCell_forContentView<R = void, P0 = unknown, P1 = unknown>(__setCell: P0, _forContentView: P1): R;
    indexOfRow<R = number, P0 = unknown>(_indexOfRow: P0): R;
    indexOfColumn<R = number, P0 = unknown>(_indexOfColumn: P0): R;
    _rawCellAtColumnIndex_rowIndex_allocatingIfNeeded<R = unknown, P0 = number, P1 = number, P2 = boolean>(__rawCellAtColumnIndex: P0, _rowIndex: P1, _allocatingIfNeeded: P2): R;
    cellAtColumnIndex_rowIndex<R = unknown, P0 = number, P1 = number>(_cellAtColumnIndex: P0, _rowIndex: P1): R;
    columnAtIndex<R = unknown, P0 = number>(_columnAtIndex: P0): R;
    rowAtIndex<R = unknown, P0 = number>(_rowAtIndex: P0): R;
    description<R = unknown>(): R;
    _findVisibleThingNear_after_searchRows<R = unknown, P0 = unknown, P1 = boolean, P2 = boolean>(__findVisibleThingNear: P0, _after: P1, _searchRows: P2): R;
    _sanityCheck<R = void>(): R;
    _verifyMergedRegionWithHead<R = void, P0 = unknown>(__verifyMergedRegionWithHead: P0): R;
    _cellTableContainsCell<R = boolean, P0 = unknown>(__cellTableContainsCell: P0): R;
    _safeHasSubview<R = boolean, P0 = unknown>(__safeHasSubview: P0): R;
    _commonPostInit<R = void>(): R;
    _commonPreInit<R = void>(): R;
    numberOfRows<R = number>(): R;
    numberOfColumns<R = number>(): R;
    columnSpacing<R = number>(): R;
    setColumnSpacing<R = void, P0 = number>(_v: P0): R;
    rowSpacing<R = number>(): R;
    setRowSpacing<R = void, P0 = number>(_v: P0): R;
    rowAlignment<R = number>(): R;
    setRowAlignment<R = void, P0 = number>(_v: P0): R;
    yPlacement<R = number>(): R;
    setYPlacement<R = void, P0 = number>(_v: P0): R;
    xPlacement<R = number>(): R;
    setXPlacement<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSGridView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSGridView>(): R;
      new: <R = NSGridView>() => R;
      gridViewWithViews<R = unknown, P0 = unknown>(_gridViewWithViews: P0): R;
      gridViewWithNumberOfColumns_rows<R = unknown, P0 = number, P1 = number>(_gridViewWithNumberOfColumns: P0, _rows: P1): R;
    }
  }
}

declare const NSGridView: cocoa.NSGridView.CLASS;
