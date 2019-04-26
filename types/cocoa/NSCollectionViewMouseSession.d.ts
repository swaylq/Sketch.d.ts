/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewMouseSession<T0 = void, T1 = void, T2 = void> extends NSResponder {
    trackWithEvent<R = void, P0 = unknown>(_trackWithEvent: P0): R;
    handleEvent<R = boolean, P0 = unknown>(_handleEvent: P0): R;
    autoscrollTimerFired<R = void, P0 = unknown>(_autoscrollTimerFired: P0): R;
    autoscrollAndDragSelectWithLastNonPeriodicEvent<R = void>(): R;
    _performDragFromMouseDown<R = boolean, P0 = unknown>(__performDragFromMouseDown: P0): R;
    updateDragSelectionForEvent<R = void, P0 = unknown>(_updateDragSelectionForEvent: P0): R;
    deselectAllNow<R = void>(): R;
    draggingEnded<R = void, P0 = unknown>(_draggingEnded: P0): R;
    clearHighlightingBeforeCompletingDrag<R = void>(): R;
    commitSelectionAndClearHighlighting<R = void>(): R;
    replaceSelectedIndexPathsWith<R = boolean, P0 = unknown>(_replaceSelectedIndexPathsWith: P0): R;
    addIndexPathsToDeselect<R = boolean, P0 = unknown>(_addIndexPathsToDeselect: P0): R;
    addIndexPathToDeselect<R = boolean, P0 = unknown>(_addIndexPathToDeselect: P0): R;
    extendRangeSelectionToEntireSection<R = boolean, P0 = number>(_extendRangeSelectionToEntireSection: P0): R;
    extendRangeSelectionToIndexPath<R = boolean, P0 = unknown>(_extendRangeSelectionToIndexPath: P0): R;
    nextIndexPathAfter<R = unknown, P0 = unknown>(_nextIndexPathAfter: P0): R;
    previousIndexPathBefore<R = unknown, P0 = unknown>(_previousIndexPathBefore: P0): R;
    addIndexPathsToSelect<R = boolean, P0 = unknown>(_addIndexPathsToSelect: P0): R;
    addIndexPathToSelect<R = boolean, P0 = unknown>(_addIndexPathToSelect: P0): R;
    setHighlightState_forItemsAtIndexPaths<R = unknown, P0 = number, P1 = unknown>(_setHighlightState: P0, _forItemsAtIndexPaths: P1): R;
    highlightStateForIndexPath<R = number, P0 = unknown>(_highlightStateForIndexPath: P0): R;
    setState<R = void, P0 = number>(_setState: P0): R;
    detachFromCollectionView<R = void>(): R;
    clearAutoscrollTimer<R = void>(): R;
    initWithCollectionView<R = unknown, P0 = unknown>(_initWithCollectionView: P0): R;
    indexPathsBeingDragged<R = NSSet>(): R;
  }
  namespace NSCollectionViewMouseSession {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSResponder {
      alloc<R = NSCollectionViewMouseSession>(): R;
      new: <R = NSCollectionViewMouseSession>() => R;
      mouseSessionWithCollectionView<R = unknown, P0 = unknown>(_mouseSessionWithCollectionView: P0): R;
    }
  }
}

declare const NSCollectionViewMouseSession: cocoa.NSCollectionViewMouseSession.CLASS;
