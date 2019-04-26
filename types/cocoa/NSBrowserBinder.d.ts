/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBrowserBinder<T0 = void, T1 = void, T2 = void> extends NSBinder {
    _updateSelectionIndexPaths<R = void, P0 = unknown>(__updateSelectionIndexPaths: P0): R;
    browser_willDisplayCell_atRow_column<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = number>(_browser: P0, _willDisplayCell: P1, _atRow: P2, _column: P3): R;
    browser_createRowsForColumn_inMatrix<R = void, P0 = unknown, P1 = number, P2 = unknown>(_browser: P0, _createRowsForColumn: P1, _inMatrix: P2): R;
    adjustMatrix_numberOfRows<R = void, P0 = unknown, P1 = number>(_adjustMatrix: P0, _numberOfRows: P1): R;
    indexPathFromSelectionInBrowser_upToColumn<R = unknown, P0 = unknown, P1 = number>(_indexPathFromSelectionInBrowser: P0, _upToColumn: P1): R;
    performAction<R = void, P0 = unknown>(_performAction: P0): R;
    _selectionIndexPathsInBrowser<R = unknown, P0 = unknown>(__selectionIndexPathsInBrowser: P0): R;
    _redisplayCellForNode<R = void, P0 = unknown>(__redisplayCellForNode: P0): R;
    setSelectedIndexPaths<R = void, P0 = unknown>(_setSelectedIndexPaths: P0): R;
    selectedIndexPaths<R = unknown>(): R;
  }
  namespace NSBrowserBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBinder {
      alloc<R = NSBrowserBinder>(): R;
      new: <R = NSBrowserBinder>() => R;
    }
  }
}

declare const NSBrowserBinder: cocoa.NSBrowserBinder.CLASS;
