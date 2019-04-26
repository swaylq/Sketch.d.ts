/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOutlineViewBinder<T0 = void, T1 = void, T2 = void> extends NSBinder {
    outlineView_child_ofItem<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_outlineView: P0, _child: P1, _ofItem: P2): R;
    outlineView_numberOfChildrenOfItem<R = number, P0 = unknown, P1 = unknown>(_outlineView: P0, _numberOfChildrenOfItem: P1): R;
    outlineView_isItemExpandable<R = boolean, P0 = unknown, P1 = unknown>(_outlineView: P0, _isItemExpandable: P1): R;
    outlineView_willCollapseItem<R = void, P0 = unknown, P1 = unknown>(_outlineView: P0, _willCollapseItem: P1): R;
    outlineView_didExpandItem<R = void, P0 = unknown, P1 = unknown>(_outlineView: P0, _didExpandItem: P1): R;
    tableView_didChangeToSortDescriptors<R = void, P0 = unknown, P1 = unknown>(_tableView: P0, _didChangeToSortDescriptors: P1): R;
    _updateSortDescriptors<R = void, P0 = unknown>(__updateSortDescriptors: P0): R;
    tableView_didChangeToSelectedRowIndexes<R = void, P0 = unknown, P1 = unknown>(_tableView: P0, _didChangeToSelectedRowIndexes: P1): R;
    _updateSelectionIndexPaths<R = void, P0 = unknown>(__updateSelectionIndexPaths: P0): R;
    _scrollSelectionToVisible<R = void>(): R;
    tableView_updateVisibleRowInformation<R = void, P0 = unknown, P1 = _NSRange>(_tableView: P0, _updateVisibleRowInformation: P1): R;
    expandIndexPath<R = void, P0 = unknown>(_expandIndexPath: P0): R;
    _childrenChangedForNode<R = void, P0 = unknown>(__childrenChangedForNode: P0): R;
    stopObservingOutlineViewChildrenOfItem<R = void, P0 = unknown>(_stopObservingOutlineViewChildrenOfItem: P0): R;
    startObservingOutlineViewChildrenOfItem<R = void, P0 = unknown>(_startObservingOutlineViewChildrenOfItem: P0): R;
    modifyObservingOutlineViewChildrenOfItem_withOption<R = void, P0 = unknown, P1 = number>(_modifyObservingOutlineViewChildrenOfItem: P0, _withOption: P1): R;
    outlineView_willDisplayCell_forTableColumn_row<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(_outlineView: P0, _willDisplayCell: P1, _forTableColumn: P2, _row: P3): R;
    outlineView_willDisplayOutlineCell_forTableColumn_row<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(_outlineView: P0, _willDisplayOutlineCell: P1, _forTableColumn: P2, _row: P3): R;
    outlineView_objectValueForTableColumn_byItem<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_outlineView: P0, _objectValueForTableColumn: P1, _byItem: P2): R;
    tableView_objectValueForRow<R = unknown, P0 = unknown, P1 = number>(_tableView: P0, _objectValueForRow: P1): R;
    endIgnoreChanges<R = void>(): R;
    beginIgnoreChanges<R = void>(): R;
  }
  namespace NSOutlineViewBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBinder {
      alloc<R = NSOutlineViewBinder>(): R;
      new: <R = NSOutlineViewBinder>() => R;
    }
  }
}

declare const NSOutlineViewBinder: cocoa.NSOutlineViewBinder.CLASS;
