/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGridRow<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    _previousVisibleRow<R = unknown>(): R;
    _nextVisibleRow<R = unknown>(): R;
    _bottomContentAnchor<R = unknown>(): R;
    _bottomBoundaryAnchor<R = unknown>(): R;
    _findBottomBoundaryAnchorAndContentOffset<R = unknown, P0 = number>(__findBottomBoundaryAnchorAndContentOffset: P0): R;
    _topContentAnchor<R = unknown>(): R;
    _topBoundaryAnchor<R = unknown>(): R;
    _removedFromGridView<R = void>(): R;
    mergeCellsInRange<R = void, P0 = _NSRange>(_mergeCellsInRange: P0): R;
    cellAtIndex<R = unknown, P0 = number>(_cellAtIndex: P0): R;
    _cellAtIndex_allocatingIfNeeded<R = unknown, P0 = number, P1 = boolean>(__cellAtIndex: P0, _allocatingIfNeeded: P1): R;
    description<R = unknown>(): R;
    _sanityCheck<R = void>(): R;
    _didDeleteColumnAtIndex<R = void, P0 = number>(__didDeleteColumnAtIndex: P0): R;
    _didInsertColumn_atIndex<R = void, P0 = unknown, P1 = number>(__didInsertColumn: P0, _atIndex: P1): R;
    _insertCell_atIndex<R = void, P0 = unknown, P1 = number>(__insertCell: P0, _atIndex: P1): R;
    _removeCellAtIndex<R = unknown, P0 = number>(__removeCellAtIndex: P0): R;
    _setViews<R = void, P0 = unknown>(__setViews: P0): R;
    _forEachCell<R = void, P0 = CDUnknownBlockType>(__forEachCell: P0): R;
    index<R = number>(): R;
    set_hasContentInGeneration<R = void, P0 = number>(_set_hasContentInGeneration: P0): R;
    _hasContentInGeneration<R = number>(): R;
    dealloc<R = void>(): R;
    initWithGridView<R = unknown, P0 = unknown>(_initWithGridView: P0): R;
    numberOfCells<R = number>(): R;
    gridView<R = NSGridView>(): R;
    bottomPadding<R = number>(): R;
    setBottomPadding<R = void, P0 = number>(_v: P0): R;
    topPadding<R = number>(): R;
    setTopPadding<R = void, P0 = number>(_v: P0): R;
    height<R = number>(): R;
    setHeight<R = void, P0 = number>(_v: P0): R;
    hidden<R = boolean>(): R;
    setHidden<R = void, P0 = boolean>(_v: P0): R;
    rowAlignment<R = number>(): R;
    setRowAlignment<R = void, P0 = number>(_v: P0): R;
    yPlacement<R = number>(): R;
    setYPlacement<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSGridRow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSGridRow>(): R;
      new: <R = NSGridRow>() => R;
    }
  }
}

declare const NSGridRow: cocoa.NSGridRow.CLASS;
