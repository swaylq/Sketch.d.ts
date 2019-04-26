/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCollectionViewDropReceiver<T0 = void, T1 = void, T2 = void> extends NSObject, NSDraggingDestinationProtocol {
    dealloc<R = void>(): R;
    _hoverAreaIsSameAsLast<R = boolean, P0 = unknown>(__hoverAreaIsSameAsLast: P0): R;
    _updateDragAndDropStateWithDraggingInfo_newDragOperation_newDropTargetIndexPath_newDropTargetRect_newDropOperation<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = CGRect, P4 = number>(__updateDragAndDropStateWithDraggingInfo: P0, _newDragOperation: P1, _newDropTargetIndexPath: P2, _newDropTargetRect: P3, _newDropOperation: P4): R;
    setHighlightState_forItemsAtIndexPaths<R = unknown, P0 = number, P1 = unknown>(_setHighlightState: P0, _forItemsAtIndexPaths: P1): R;
    _validateDragWithInfo_dropTargetIndexPath_dropTargetRect_dropOperation_allowDropOnOnly<R = number, P0 = unknown, P1 = unknown, P2 = CGRect, P3 = number, P4 = boolean>(__validateDragWithInfo: P0, _dropTargetIndexPath: P1, _dropTargetRect: P2, _dropOperation: P3, _allowDropOnOnly: P4): R;
    _dropIndexPathForDraggingInfo_dropTargetRect_proposedDropOperation_allowDropOnOnly<R = unknown, P0 = unknown, P1 = CGRect, P2 = number, P3 = boolean>(__dropIndexPathForDraggingInfo: P0, _dropTargetRect: P1, _proposedDropOperation: P2, _allowDropOnOnly: P3): R;
    _setWholeSectionDropTargetRect<R = void, P0 = CGRect>(__setWholeSectionDropTargetRect: P0): R;
    _setDropTargetGapRect<R = void, P0 = CGRect>(__setDropTargetGapRect: P0): R;
    initWithCollectionView<R = unknown, P0 = unknown>(_initWithCollectionView: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSCollectionViewDropReceiver {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSDraggingDestinationProtocol {
      alloc<R = _NSCollectionViewDropReceiver>(): R;
      new: <R = _NSCollectionViewDropReceiver>() => R;
      dropReceiverWithCollectionView<R = unknown, P0 = unknown>(_dropReceiverWithCollectionView: P0): R;
    }
  }
}
