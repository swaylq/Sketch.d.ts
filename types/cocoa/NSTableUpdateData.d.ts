/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableUpdateData<T0 = void, T1 = void, T2 = void> extends NSObject {
    hasChanges<R = boolean>(): R;
    dealloc<R = void>(): R;
    updateItemsToRemove<R = NSMutableArray>(): R;
    setUpdateItemsToRemove<R = void, P0 = NSMutableArray>(_v: P0): R;
    views<R = NSMutableArray>(): R;
    setViews<R = void, P0 = NSMutableArray>(_v: P0): R;
    containsInserts<R = boolean>(): R;
    setContainsInserts<R = void, P0 = boolean>(_v: P0): R;
    containsMoves<R = boolean>(): R;
    setContainsMoves<R = void, P0 = boolean>(_v: P0): R;
    containsSwipeToDelete<R = boolean>(): R;
    setContainsSwipeToDelete<R = void, P0 = boolean>(_v: P0): R;
    containsSlideDeletes<R = boolean>(): R;
    setContainsSlideDeletes<R = void, P0 = boolean>(_v: P0): R;
    containsDeletes<R = boolean>(): R;
    setContainsDeletes<R = void, P0 = boolean>(_v: P0): R;
    rowIndexesToViews<R = NSMutableIndexSet>(): R;
    setRowIndexesToViews<R = void, P0 = NSMutableIndexSet>(_v: P0): R;
    priorGroupRowIndexes<R = NSIndexSet>(): R;
    setPriorGroupRowIndexes<R = void, P0 = NSIndexSet>(_v: P0): R;
    priorColumnWidths<R = NSArray>(): R;
    setPriorColumnWidths<R = void, P0 = NSArray>(_v: P0): R;
    priorRowHeightStorage<R = _NSTableRowHeightStorage>(): R;
    setPriorRowHeightStorage<R = void, P0 = _NSTableRowHeightStorage>(_v: P0): R;
    updateCount<R = number>(): R;
    setUpdateCount<R = void, P0 = number>(_v: P0): R;
    needsFrameUpdate<R = boolean>(): R;
    setNeedsFrameUpdate<R = void, P0 = boolean>(_v: P0): R;
    allRowsToInsert<R = NSMutableIndexSet>(): R;
    setAllRowsToInsert<R = void, P0 = NSMutableIndexSet>(_v: P0): R;
    allRowsToDelete<R = NSMutableIndexSet>(): R;
    setAllRowsToDelete<R = void, P0 = NSMutableIndexSet>(_v: P0): R;
    containsAnimations<R = boolean>(): R;
    setContainsAnimations<R = void, P0 = boolean>(_v: P0): R;
    selectionChanged<R = boolean>(): R;
    setSelectionChanged<R = void, P0 = boolean>(_v: P0): R;
    updateItemsToInsert<R = NSMutableArray>(): R;
    setUpdateItemsToInsert<R = void, P0 = NSMutableArray>(_v: P0): R;
    rowHeightsChanged<R = boolean>(): R;
    setRowHeightsChanged<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSTableUpdateData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTableUpdateData>(): R;
      new: <R = NSTableUpdateData>() => R;
    }
  }
}

declare const NSTableUpdateData: cocoa.NSTableUpdateData.CLASS;
