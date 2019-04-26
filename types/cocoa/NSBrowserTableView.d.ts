/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBrowserTableView<T0 = void, T1 = void, T2 = void> extends NSTableView {
    _sendShouldTrackCell_forTableColumn_row<R = boolean, P0 = unknown, P1 = unknown, P2 = number>(__sendShouldTrackCell: P0, _forTableColumn: P1, _row: P2): R;
    _delegateRespondsToShouldTrackCell<R = boolean>(): R;
    _columnPositionsTheSame<R = boolean>(): R;
    _onlyDragOnContent<R = boolean>(): R;
    _drawDropHighlightBackgroundForRow<R = void, P0 = number>(__drawDropHighlightBackgroundForRow: P0): R;
    _drawDropHighlight<R = void>(): R;
    _columnsForDragImage<R = unknown>(): R;
    _dataSourceRespondsToValidateDrop<R = boolean>(): R;
    _dataSourceRespondsToNamesOfPromisedFilesDroppedAtDestination<R = boolean>(): R;
    _dataSourceRespondsToWriteDragData<R = boolean>(): R;
    _doImageDragUsingRowsWithIndexes_event_pasteboard_source_slideBack_startRow<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = boolean, P5 = number>(__doImageDragUsingRowsWithIndexes: P0, _event: P1, _pasteboard: P2, _source: P3, _slideBack: P4, _startRow: P5): R;
    dragImageForRowsWithIndexes_tableColumns_event_offset<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CGPoint>(_dragImageForRowsWithIndexes: P0, _tableColumns: P1, _event: P2, _offset: P3): R;
    canDragRowsWithIndexes_atPoint<R = boolean, P0 = unknown, P1 = CGPoint>(_canDragRowsWithIndexes: P0, _atPoint: P1): R;
    draggingSourceOperationMaskForLocal<R = number, P0 = boolean>(_draggingSourceOperationMaskForLocal: P0): R;
    preservesContentDuringLiveResize<R = boolean>(): R;
    _adjustFrameSizeToFitSuperview<R = CGSize, P0 = CGSize>(__adjustFrameSizeToFitSuperview: P0): R;
    __ivar_setClickedRow_clickedColumn<R = void, P0 = number, P1 = number>(___ivar_setClickedRow: P0, _clickedColumn: P1): R;
    _draggingSource<R = unknown>(): R;
    _supportsVariableHeightRows<R = boolean>(): R;
    _delegateRespondsTo_shouldTypeSelectForEvent<R = boolean>(): R;
    _delegateRespondsTo_typeSelectStringForTableColumn<R = boolean>(): R;
    _delegateRespondsTo_nextTypeSelectMatchFromRow<R = boolean>(): R;
    selectAll<R = void, P0 = unknown>(_selectAll: P0): R;
    setShouldSuppressDropHighlight<R = void, P0 = boolean>(_setShouldSuppressDropHighlight: P0): R;
    shouldSuppressDropHighlight<R = boolean>(): R;
    _performTypeSelect<R = boolean, P0 = unknown>(__performTypeSelect: P0): R;
    _selectRowsFromArrowKey_withEvent<R = void, P0 = number, P1 = unknown>(__selectRowsFromArrowKey: P0, _withEvent: P1): R;
    selectionShouldUsePrimaryColor<R = boolean>(): R;
    _setUsePrimaryColorForSelection<R = void, P0 = boolean>(__setUsePrimaryColorForSelection: P0): R;
    accessibilitySetSelectedChildrenAttribute<R = void, P0 = unknown>(_accessibilitySetSelectedChildrenAttribute: P0): R;
    _accessibilityWantsToBeList<R = boolean>(): R;
    columnController<R = NSBrowserColumnViewController>(): R;
    setColumnController<R = void, P0 = NSBrowserColumnViewController>(_v: P0): R;
    columnIndex<R = number>(): R;
    browser<R = NSBrowser>(): R;
  }
  namespace NSBrowserTableView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableView {
      alloc<R = NSBrowserTableView>(): R;
      new: <R = NSBrowserTableView>() => R;
    }
  }
}

declare const NSBrowserTableView: cocoa.NSBrowserTableView.CLASS;
