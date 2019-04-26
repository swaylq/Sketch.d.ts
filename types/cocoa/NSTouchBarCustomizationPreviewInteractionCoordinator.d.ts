/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewInteractionCoordinator<T0 = void, T1 = void, T2 = void> extends NSObject {
    cancelDragOfItem_isRemoval<R = void, P0 = unknown, P1 = boolean>(_cancelDragOfItem: P0, _isRemoval: P1): R;
    endDragOfItem_isRemoval<R = void, P0 = unknown, P1 = boolean>(_endDragOfItem: P0, _isRemoval: P1): R;
    updateDragOfItem_toPoint<R = void, P0 = unknown, P1 = CGPoint>(_updateDragOfItem: P0, _toPoint: P1): R;
    beginDragOfItem_anchorPoint_dragType_atPoint_isInsertion<R = unknown, P0 = unknown, P1 = CGPoint, P2 = number, P3 = CGPoint, P4 = boolean>(_beginDragOfItem: P0, _anchorPoint: P1, _dragType: P2, _atPoint: P3, _isInsertion: P4): R;
    dragRecordForItem<R = unknown, P0 = unknown>(_dragRecordForItem: P0): R;
    isItemBeingDragged<R = boolean, P0 = unknown>(_isItemBeingDragged: P0): R;
    dealloc<R = void>(): R;
    initWithDelegate_referenceCoordinateSpace<R = unknown, P0 = unknown, P1 = unknown>(_initWithDelegate: P0, _referenceCoordinateSpace: P1): R;
    interactionStartTime<R = NSDate>(): R;
    setInteractionStartTime<R = void, P0 = NSDate>(_v: P0): R;
    cursorDragRecord<R = _NSTouchBarCustomizationDragRecord>(): R;
  }
  namespace NSTouchBarCustomizationPreviewInteractionCoordinator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTouchBarCustomizationPreviewInteractionCoordinator>(): R;
      new: <R = NSTouchBarCustomizationPreviewInteractionCoordinator>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewInteractionCoordinator: cocoa.NSTouchBarCustomizationPreviewInteractionCoordinator.CLASS;
