/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGridColumn<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    _previousVisibleColumn<R = unknown>(): R;
    _nextVisibleColumn<R = unknown>(): R;
    _trailingContentAnchor<R = unknown>(): R;
    _trailingBoundaryAnchor<R = unknown>(): R;
    _findTrailingBoundaryAnchorAndContentPadding<R = unknown, P0 = number>(__findTrailingBoundaryAnchorAndContentPadding: P0): R;
    _leadingContentAnchor<R = unknown>(): R;
    _leadingBoundaryAnchor<R = unknown>(): R;
    mergeCellsInRange<R = void, P0 = _NSRange>(_mergeCellsInRange: P0): R;
    _removedFromGridView<R = void>(): R;
    _sanityCheck<R = void>(): R;
    _forEachCell<R = void, P0 = CDUnknownBlockType>(__forEachCell: P0): R;
    _indexOfCell<R = number, P0 = unknown>(__indexOfCell: P0): R;
    cellAtIndex<R = unknown, P0 = number>(_cellAtIndex: P0): R;
    index<R = number>(): R;
    set_hasContentInGeneration<R = void, P0 = number>(_set_hasContentInGeneration: P0): R;
    _hasContentInGeneration<R = number>(): R;
    dealloc<R = void>(): R;
    initWithGridView<R = unknown, P0 = unknown>(_initWithGridView: P0): R;
    numberOfCells<R = number>(): R;
    gridView<R = NSGridView>(): R;
    trailingPadding<R = number>(): R;
    setTrailingPadding<R = void, P0 = number>(_v: P0): R;
    leadingPadding<R = number>(): R;
    setLeadingPadding<R = void, P0 = number>(_v: P0): R;
    width<R = number>(): R;
    setWidth<R = void, P0 = number>(_v: P0): R;
    hidden<R = boolean>(): R;
    setHidden<R = void, P0 = boolean>(_v: P0): R;
    xPlacement<R = number>(): R;
    setXPlacement<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSGridColumn {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSGridColumn>(): R;
      new: <R = NSGridColumn>() => R;
    }
  }
}

declare const NSGridColumn: cocoa.NSGridColumn.CLASS;
