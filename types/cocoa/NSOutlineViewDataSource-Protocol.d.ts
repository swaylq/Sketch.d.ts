/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOutlineViewDataSourceProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    outlineView_namesOfPromisedFilesDroppedAtDestination_forDraggedItems<R = NSArray, P0 = NSOutlineView, P1 = NSURL, P2 = NSArray>(_outlineView: P0, _namesOfPromisedFilesDroppedAtDestination: P1, _forDraggedItems: P2): R;
    outlineView_acceptDrop_item_childIndex<R = boolean, P0 = NSOutlineView, P1 = NSDraggingInfo, P2 = unknown, P3 = number>(_outlineView: P0, _acceptDrop: P1, _item: P2, _childIndex: P3): R;
    outlineView_validateDrop_proposedItem_proposedChildIndex<R = number, P0 = NSOutlineView, P1 = NSDraggingInfo, P2 = unknown, P3 = number>(_outlineView: P0, _validateDrop: P1, _proposedItem: P2, _proposedChildIndex: P3): R;
    outlineView_updateDraggingItemsForDrag<R = void, P0 = NSOutlineView, P1 = NSDraggingInfo>(_outlineView: P0, _updateDraggingItemsForDrag: P1): R;
    outlineView_writeItems_toPasteboard<R = boolean, P0 = NSOutlineView, P1 = NSArray, P2 = NSPasteboard>(_outlineView: P0, _writeItems: P1, _toPasteboard: P2): R;
    outlineView_draggingSession_endedAtPoint_operation<R = void, P0 = NSOutlineView, P1 = NSDraggingSession, P2 = CGPoint, P3 = number>(_outlineView: P0, _draggingSession: P1, _endedAtPoint: P2, _operation: P3): R;
    outlineView_draggingSession_willBeginAtPoint_forItems<R = void, P0 = NSOutlineView, P1 = NSDraggingSession, P2 = CGPoint, P3 = NSArray>(_outlineView: P0, _draggingSession: P1, _willBeginAtPoint: P2, _forItems: P3): R;
    outlineView_pasteboardWriterForItem<R = NSPasteboardWriting, P0 = NSOutlineView, P1 = unknown>(_outlineView: P0, _pasteboardWriterForItem: P1): R;
    outlineView_sortDescriptorsDidChange<R = void, P0 = NSOutlineView, P1 = NSArray>(_outlineView: P0, _sortDescriptorsDidChange: P1): R;
    outlineView_persistentObjectForItem<R = unknown, P0 = NSOutlineView, P1 = unknown>(_outlineView: P0, _persistentObjectForItem: P1): R;
    outlineView_itemForPersistentObject<R = unknown, P0 = NSOutlineView, P1 = unknown>(_outlineView: P0, _itemForPersistentObject: P1): R;
    outlineView_setObjectValue_forTableColumn_byItem<R = void, P0 = NSOutlineView, P1 = unknown, P2 = NSTableColumn, P3 = unknown>(_outlineView: P0, _setObjectValue: P1, _forTableColumn: P2, _byItem: P3): R;
    outlineView_objectValueForTableColumn_byItem<R = unknown, P0 = NSOutlineView, P1 = NSTableColumn, P2 = unknown>(_outlineView: P0, _objectValueForTableColumn: P1, _byItem: P2): R;
    outlineView_isItemExpandable<R = boolean, P0 = NSOutlineView, P1 = unknown>(_outlineView: P0, _isItemExpandable: P1): R;
    outlineView_child_ofItem<R = unknown, P0 = NSOutlineView, P1 = number, P2 = unknown>(_outlineView: P0, _child: P1, _ofItem: P2): R;
    outlineView_numberOfChildrenOfItem<R = number, P0 = NSOutlineView, P1 = unknown>(_outlineView: P0, _numberOfChildrenOfItem: P1): R;
  }
  namespace NSOutlineViewDataSourceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
