/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDraggingInfoProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    resetSpringLoading<R = void>(): R;
    enumerateDraggingItemsWithOptions_forView_classes_searchOptions_usingBlock<R = void, P0 = number, P1 = NSView, P2 = NSArray, P3 = NSDictionary, P4 = CDUnknownBlockType>(_enumerateDraggingItemsWithOptions: P0, _forView: P1, _classes: P2, _searchOptions: P3, _usingBlock: P4): R;
    namesOfPromisedFilesDroppedAtDestination<R = NSArray, P0 = NSURL>(_namesOfPromisedFilesDroppedAtDestination: P0): R;
    slideDraggedImageTo<R = void, P0 = CGPoint>(_slideDraggedImageTo: P0): R;
    springLoadingHighlight<R = number>(): R;
    numberOfValidItemsForDrop<R = number>(): R;
    setNumberOfValidItemsForDrop<R = void, P0 = number>(_v: P0): R;
    animatesToDestination<R = boolean>(): R;
    setAnimatesToDestination<R = void, P0 = boolean>(_v: P0): R;
    draggingFormation<R = number>(): R;
    setDraggingFormation<R = void, P0 = number>(_v: P0): R;
    draggingSequenceNumber<R = number>(): R;
    draggingSource<R = unknown>(): R;
    draggingPasteboard<R = NSPasteboard>(): R;
    draggedImage<R = NSImage>(): R;
    draggedImageLocation<R = CGPoint>(): R;
    draggingLocation<R = CGPoint>(): R;
    draggingSourceOperationMask<R = number>(): R;
    draggingDestinationWindow<R = NSWindow>(): R;
  }
  namespace NSDraggingInfoProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
