/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewInteractionCoordinatorDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    coordinator_didCancelDrag_isRemoval<R = void, P0 = NSTouchBarCustomizationPreviewInteractionCoordinator, P1 = _NSTouchBarCustomizationDragRecord, P2 = boolean>(_coordinator: P0, _didCancelDrag: P1, _isRemoval: P2): R;
    coordinator_didFinishDrag_isRemoval<R = void, P0 = NSTouchBarCustomizationPreviewInteractionCoordinator, P1 = _NSTouchBarCustomizationDragRecord, P2 = boolean>(_coordinator: P0, _didFinishDrag: P1, _isRemoval: P2): R;
    coordinator_willFinishDrag<R = void, P0 = NSTouchBarCustomizationPreviewInteractionCoordinator, P1 = _NSTouchBarCustomizationDragRecord>(_coordinator: P0, _willFinishDrag: P1): R;
    coordinator_didUpdateDrag<R = void, P0 = NSTouchBarCustomizationPreviewInteractionCoordinator, P1 = _NSTouchBarCustomizationDragRecord>(_coordinator: P0, _didUpdateDrag: P1): R;
    coordinator_didBeginDrag_isInsertion<R = void, P0 = NSTouchBarCustomizationPreviewInteractionCoordinator, P1 = _NSTouchBarCustomizationDragRecord, P2 = boolean>(_coordinator: P0, _didBeginDrag: P1, _isInsertion: P2): R;
  }
  namespace NSTouchBarCustomizationPreviewInteractionCoordinatorDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
