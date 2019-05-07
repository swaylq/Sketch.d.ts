/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDropableViewDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    view_performDragOperation<R = boolean, P0 = NSView, P1 = NSDraggingInfo>(_view: P0, _performDragOperation: P1): R;
    draggedTypesForView<R = NSArray, P0 = NSView>(_draggedTypesForView: P0): R;
    view_updateDraggingItemsForDrag<R = void, P0 = NSView, P1 = NSDraggingInfo>(_view: P0, _updateDraggingItemsForDrag: P1): R;
    viewWantsPeriodicDraggingUpdates<R = boolean, P0 = NSView>(_viewWantsPeriodicDraggingUpdates: P0): R;
    view_concludeDragOperation<R = void, P0 = NSView, P1 = NSDraggingInfo>(_view: P0, _concludeDragOperation: P1): R;
    view_prepareForDragOperation<R = boolean, P0 = NSView, P1 = NSDraggingInfo>(_view: P0, _prepareForDragOperation: P1): R;
    view_draggingEnded<R = void, P0 = NSView, P1 = NSDraggingInfo>(_view: P0, _draggingEnded: P1): R;
    view_draggingExited<R = void, P0 = NSView, P1 = NSDraggingInfo>(_view: P0, _draggingExited: P1): R;
    view_draggingUpdated<R = number, P0 = NSView, P1 = NSDraggingInfo>(_view: P0, _draggingUpdated: P1): R;
    view_draggingEntered<R = number, P0 = NSView, P1 = NSDraggingInfo>(_view: P0, _draggingEntered: P1): R;
  }
  namespace MSDropableViewDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
