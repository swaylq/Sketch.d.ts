/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableViewDataSourceProtocol<T0 = void, T1 = void, T2 = void> {
    tableView_namesOfPromisedFilesDroppedAtDestination_forDraggedRowsWithIndexes<R = NSArray, P0 = NSTableView, P1 = NSURL, P2 = NSIndexSet>(_tableView: P0, _namesOfPromisedFilesDroppedAtDestination: P1, _forDraggedRowsWithIndexes: P2): R;
    tableView_acceptDrop_row_dropOperation<R = boolean, P0 = NSTableView, P1 = NSDraggingInfo, P2 = number, P3 = number>(_tableView: P0, _acceptDrop: P1, _row: P2, _dropOperation: P3): R;
    tableView_validateDrop_proposedRow_proposedDropOperation<R = number, P0 = NSTableView, P1 = NSDraggingInfo, P2 = number, P3 = number>(_tableView: P0, _validateDrop: P1, _proposedRow: P2, _proposedDropOperation: P3): R;
    tableView_writeRowsWithIndexes_toPasteboard<R = boolean, P0 = NSTableView, P1 = NSIndexSet, P2 = NSPasteboard>(_tableView: P0, _writeRowsWithIndexes: P1, _toPasteboard: P2): R;
    tableView_updateDraggingItemsForDrag<R = void, P0 = NSTableView, P1 = NSDraggingInfo>(_tableView: P0, _updateDraggingItemsForDrag: P1): R;
    tableView_draggingSession_endedAtPoint_operation<R = void, P0 = NSTableView, P1 = NSDraggingSession, P2 = CGPoint, P3 = number>(_tableView: P0, _draggingSession: P1, _endedAtPoint: P2, _operation: P3): R;
    tableView_draggingSession_willBeginAtPoint_forRowIndexes<R = void, P0 = NSTableView, P1 = NSDraggingSession, P2 = CGPoint, P3 = NSIndexSet>(_tableView: P0, _draggingSession: P1, _willBeginAtPoint: P2, _forRowIndexes: P3): R;
    tableView_pasteboardWriterForRow<R = NSPasteboardWriting, P0 = NSTableView, P1 = number>(_tableView: P0, _pasteboardWriterForRow: P1): R;
    tableView_sortDescriptorsDidChange<R = void, P0 = NSTableView, P1 = NSArray>(_tableView: P0, _sortDescriptorsDidChange: P1): R;
    tableView_setObjectValue_forTableColumn_row<R = void, P0 = NSTableView, P1 = unknown, P2 = NSTableColumn, P3 = number>(_tableView: P0, _setObjectValue: P1, _forTableColumn: P2, _row: P3): R;
    tableView_objectValueForTableColumn_row<R = unknown, P0 = NSTableView, P1 = NSTableColumn, P2 = number>(_tableView: P0, _objectValueForTableColumn: P1, _row: P2): R;
    numberOfRowsInTableView<R = number, P0 = NSTableView>(_numberOfRowsInTableView: P0): R;
  }
  namespace NSTableViewDataSourceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
