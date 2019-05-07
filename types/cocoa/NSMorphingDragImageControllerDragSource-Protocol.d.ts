/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMorphingDragImageControllerDragSourceProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    dragDestinationWindowForMorphingDragImage<R = NSWindow, P0 = NSMorphingDragImageController>(_dragDestinationWindowForMorphingDragImage: P0): R;
    morphingDragImage_wasDroppedAtPointOnScreen<R = void, P0 = NSMorphingDragImageController, P1 = CGPoint>(_morphingDragImage: P0, _wasDroppedAtPointOnScreen: P1): R;
    morphingDragImage_movedToPointOnScreen<R = void, P0 = NSMorphingDragImageController, P1 = CGPoint>(_morphingDragImage: P0, _movedToPointOnScreen: P1): R;
  }
  namespace NSMorphingDragImageControllerDragSourceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
