/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableHeaderData<T0 = void, T1 = void, T2 = void> extends NSObject {
    updateColumnViewWidthsAnimated<R = void, P0 = boolean>(_updateColumnViewWidthsAnimated: P0): R;
    headerCellViewAtColumn<R = unknown, P0 = number>(_headerCellViewAtColumn: P0): R;
    tableHeaderViewDraggedDistanceChanged<R = void>(): R;
    _draggedColumnHeaderViewFrameForColumn<R = CGRect, P0 = number>(__draggedColumnHeaderViewFrameForColumn: P0): R;
    endDraggingColumn_animated<R = void, P0 = number, P1 = boolean>(_endDraggingColumn: P0, _animated: P1): R;
    beginDraggingColumn<R = void, P0 = number>(_beginDraggingColumn: P0): R;
    didMoveFromColumn_toColumn_animated<R = void, P0 = number, P1 = number, P2 = boolean>(_didMoveFromColumn: P0, _toColumn: P1, _animated: P2): R;
    _updateFramesAnimated<R = void, P0 = boolean>(__updateFramesAnimated: P0): R;
    updateViews<R = void>(): R;
    removeColumn<R = void, P0 = number>(_removeColumn: P0): R;
    addTableColumn_atIndex<R = void, P0 = unknown, P1 = number>(_addTableColumn: P0, _atIndex: P1): R;
    _addViewForTableColumn_column<R = void, P0 = unknown, P1 = number>(__addViewForTableColumn: P0, _column: P1): R;
    removeAllKnownSubviews<R = void>(): R;
    dealloc<R = void>(): R;
    initWithHeaderView<R = unknown, P0 = unknown>(_initWithHeaderView: P0): R;
    headerView<R = NSTableHeaderView>(): R;
    setHeaderView<R = void, P0 = NSTableHeaderView>(_v: P0): R;
  }
  namespace NSTableHeaderData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTableHeaderData>(): R;
      new: <R = NSTableHeaderData>() => R;
    }
  }
}

declare const NSTableHeaderData: cocoa.NSTableHeaderData.CLASS;
