/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabDraggingInfoProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    draggingItem<R = NSTabBarItem>(): R;
    draggingSource<R = unknown>(): R;
    draggedImage<R = NSImage>(): R;
    draggingLocation<R = CGPoint>(): R;
    draggingSourceOperationMask<R = number>(): R;
    draggingDestinationWindow<R = NSWindow>(): R;
  }
  namespace NSTabDraggingInfoProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
