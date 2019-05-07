/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPageableTableView<T0 = void, T1 = void, T2 = void> extends NSTableView, NSTableViewDelegateProtocol {
    dragImageForRowsWithIndexes_tableColumns_event_offset<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CGPoint>(_dragImageForRowsWithIndexes: P0, _tableColumns: P1, _event: P2, _offset: P3): R;
    selectRowIndexes_byExtendingSelection<R = void, P0 = unknown, P1 = boolean>(_selectRowIndexes: P0, _byExtendingSelection: P1): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
    preservesContentDuringLiveResize<R = boolean>(): R;
    tile<R = void>(): R;
    _updateMinimumHeightConstraint<R = void>(): R;
    scrollToPage<R = void>(): R;
    _updateLastVisibleHeightIfNeeded<R = void>(): R;
    _commonPageTableInit<R = void>(): R;
    pageCount<R = number>(): R;
    paged<R = boolean>(): R;
    setPaged<R = void, P0 = boolean>(_v: P0): R;
    page<R = number>(): R;
    setPage<R = void, P0 = number>(_v: P0): R;
    displayedRowCount<R = number>(): R;
    setDisplayedRowCount<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSPageableTableView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableView, NSTableViewDelegateProtocol {
      alloc<R = NSPageableTableView>(): R;
      new: <R = NSPageableTableView>() => R;
    }
  }
}

declare const NSPageableTableView: cocoa.NSPageableTableView.CLASS;
