/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableBinder<T0 = void, T1 = void, T2 = void> extends NSBinder {
    _visibleColumnIndexesForKeyPath<R = unknown, P0 = unknown>(__visibleColumnIndexesForKeyPath: P0): R;
    _visibleRowIndexesForObject<R = unknown, P0 = unknown>(__visibleRowIndexesForObject: P0): R;
    _preparedContentRectForTableView<R = CGRect, P0 = unknown>(__preparedContentRectForTableView: P0): R;
    _redisplayTableContentWithRowIndexes_columnIndexes<R = void, P0 = unknown, P1 = unknown>(__redisplayTableContentWithRowIndexes: P0, _columnIndexes: P1): R;
    tableView_updateVisibleRowInformation<R = void, P0 = unknown, P1 = _NSRange>(_tableView: P0, _updateVisibleRowInformation: P1): R;
    tableView_didChangeToSelectedRowIndexes<R = void, P0 = unknown, P1 = unknown>(_tableView: P0, _didChangeToSelectedRowIndexes: P1): R;
    tableView_didChangeToSortDescriptors<R = void, P0 = unknown, P1 = unknown>(_tableView: P0, _didChangeToSortDescriptors: P1): R;
    tableView_willDisplayCell_forTableColumn_row<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(_tableView: P0, _willDisplayCell: P1, _forTableColumn: P2, _row: P3): R;
    tableView_shouldEditTableColumn_row<R = boolean, P0 = unknown, P1 = unknown, P2 = number>(_tableView: P0, _shouldEditTableColumn: P1, _row: P2): R;
    tableView_objectValueForRow<R = unknown, P0 = unknown, P1 = number>(_tableView: P0, _objectValueForRow: P1): R;
    numberOfRowsInTableView<R = number, P0 = unknown>(_numberOfRowsInTableView: P0): R;
    _handleContentChange<R = void, P0 = void>(__handleContentChange: P0): R;
    _updateContent<R = void>(): R;
    _updateSelectionIndexes<R = void, P0 = unknown>(__updateSelectionIndexes: P0): R;
    _updateSortDescriptors<R = void, P0 = unknown>(__updateSortDescriptors: P0): R;
    _isTableColumn_boundWithKeyPath<R = boolean, P0 = unknown, P1 = unknown>(__isTableColumn: P0, _boundWithKeyPath: P1): R;
    _scrollSelectionToVisible<R = void>(): R;
  }
  namespace NSTableBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBinder {
      alloc<R = NSTableBinder>(): R;
      new: <R = NSTableBinder>() => R;
      _editableBinderAtIndex_forTableView<R = unknown, P0 = number, P1 = unknown>(__editableBinderAtIndex: P0, _forTableView: P1): R;
      _editableBinderForTableColumn<R = unknown, P0 = unknown>(__editableBinderForTableColumn: P0): R;
    }
  }
}

declare const NSTableBinder: cocoa.NSTableBinder.CLASS;
