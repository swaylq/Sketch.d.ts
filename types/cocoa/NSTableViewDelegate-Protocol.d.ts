/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableViewDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    tableViewSelectionIsChanging<R = void, P0 = NSNotification>(_tableViewSelectionIsChanging: P0): R;
    tableViewColumnDidResize<R = void, P0 = NSNotification>(_tableViewColumnDidResize: P0): R;
    tableViewColumnDidMove<R = void, P0 = NSNotification>(_tableViewColumnDidMove: P0): R;
    tableViewSelectionDidChange<R = void, P0 = NSNotification>(_tableViewSelectionDidChange: P0): R;
    tableView_rowActionsForRow_edge<R = NSArray, P0 = NSTableView, P1 = number, P2 = number>(_tableView: P0, _rowActionsForRow: P1, _edge: P2): R;
    tableView_shouldReorderColumn_toColumn<R = boolean, P0 = NSTableView, P1 = number, P2 = number>(_tableView: P0, _shouldReorderColumn: P1, _toColumn: P2): R;
    tableView_sizeToFitWidthOfColumn<R = number, P0 = NSTableView, P1 = number>(_tableView: P0, _sizeToFitWidthOfColumn: P1): R;
    tableView_isGroupRow<R = boolean, P0 = NSTableView, P1 = number>(_tableView: P0, _isGroupRow: P1): R;
    tableView_shouldTypeSelectForEvent_withCurrentSearchString<R = boolean, P0 = NSTableView, P1 = NSEvent, P2 = NSString>(_tableView: P0, _shouldTypeSelectForEvent: P1, _withCurrentSearchString: P2): R;
    tableView_nextTypeSelectMatchFromRow_toRow_forString<R = number, P0 = NSTableView, P1 = number, P2 = number, P3 = NSString>(_tableView: P0, _nextTypeSelectMatchFromRow: P1, _toRow: P2, _forString: P3): R;
    tableView_typeSelectStringForTableColumn_row<R = NSString, P0 = NSTableView, P1 = NSTableColumn, P2 = number>(_tableView: P0, _typeSelectStringForTableColumn: P1, _row: P2): R;
    tableView_heightOfRow<R = number, P0 = NSTableView, P1 = number>(_tableView: P0, _heightOfRow: P1): R;
    tableView_didDragTableColumn<R = void, P0 = NSTableView, P1 = NSTableColumn>(_tableView: P0, _didDragTableColumn: P1): R;
    tableView_didClickTableColumn<R = void, P0 = NSTableView, P1 = NSTableColumn>(_tableView: P0, _didClickTableColumn: P1): R;
    tableView_mouseDownInHeaderOfTableColumn<R = void, P0 = NSTableView, P1 = NSTableColumn>(_tableView: P0, _mouseDownInHeaderOfTableColumn: P1): R;
    tableView_shouldSelectTableColumn<R = boolean, P0 = NSTableView, P1 = NSTableColumn>(_tableView: P0, _shouldSelectTableColumn: P1): R;
    tableView_selectionIndexesForProposedSelection<R = NSIndexSet, P0 = NSTableView, P1 = NSIndexSet>(_tableView: P0, _selectionIndexesForProposedSelection: P1): R;
    tableView_shouldSelectRow<R = boolean, P0 = NSTableView, P1 = number>(_tableView: P0, _shouldSelectRow: P1): R;
    selectionShouldChangeInTableView<R = boolean, P0 = NSTableView>(_selectionShouldChangeInTableView: P0): R;
    tableView_dataCellForTableColumn_row<R = NSCell, P0 = NSTableView, P1 = NSTableColumn, P2 = number>(_tableView: P0, _dataCellForTableColumn: P1, _row: P2): R;
    tableView_shouldTrackCell_forTableColumn_row<R = boolean, P0 = NSTableView, P1 = NSCell, P2 = NSTableColumn, P3 = number>(_tableView: P0, _shouldTrackCell: P1, _forTableColumn: P2, _row: P3): R;
    tableView_shouldShowCellExpansionForTableColumn_row<R = boolean, P0 = NSTableView, P1 = NSTableColumn, P2 = number>(_tableView: P0, _shouldShowCellExpansionForTableColumn: P1, _row: P2): R;
    tableView_toolTipForCell_rect_tableColumn_row_mouseLocation<R = NSString, P0 = NSTableView, P1 = NSCell, P2 = CGRect, P3 = NSTableColumn, P4 = number, P5 = CGPoint>(_tableView: P0, _toolTipForCell: P1, _rect: P2, _tableColumn: P3, _row: P4, _mouseLocation: P5): R;
    tableView_shouldEditTableColumn_row<R = boolean, P0 = NSTableView, P1 = NSTableColumn, P2 = number>(_tableView: P0, _shouldEditTableColumn: P1, _row: P2): R;
    tableView_willDisplayCell_forTableColumn_row<R = void, P0 = NSTableView, P1 = unknown, P2 = NSTableColumn, P3 = number>(_tableView: P0, _willDisplayCell: P1, _forTableColumn: P2, _row: P3): R;
    tableView_didRemoveRowView_forRow<R = void, P0 = NSTableView, P1 = NSTableRowView, P2 = number>(_tableView: P0, _didRemoveRowView: P1, _forRow: P2): R;
    tableView_didAddRowView_forRow<R = void, P0 = NSTableView, P1 = NSTableRowView, P2 = number>(_tableView: P0, _didAddRowView: P1, _forRow: P2): R;
    tableView_rowViewForRow<R = NSTableRowView, P0 = NSTableView, P1 = number>(_tableView: P0, _rowViewForRow: P1): R;
    tableView_viewForTableColumn_row<R = NSView, P0 = NSTableView, P1 = NSTableColumn, P2 = number>(_tableView: P0, _viewForTableColumn: P1, _row: P2): R;
  }
  namespace NSTableViewDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
