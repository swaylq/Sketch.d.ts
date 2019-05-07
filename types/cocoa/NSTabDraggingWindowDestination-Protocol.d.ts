/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabDraggingWindowDestinationProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    destinationForTabDragOperation<R = NSTabDraggingDestination, P0 = NSTabDraggingInfo>(_destinationForTabDragOperation: P0): R;
  }
  namespace NSTabDraggingWindowDestinationProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
