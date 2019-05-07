/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReorderingContainerView<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
    startOffsetForStacking<R = number>(): R;
    destinationFramesForSubviews<R = unknown>(): R;
    reorderSubviewsAnimated<R = void, P0 = boolean>(_reorderSubviewsAnimated: P0): R;
    draggingView<R = unknown>(): R;
    numberOfReorderableSubviews<R = number>(): R;
    hoverIndexForDraggingInfo<R = number, P0 = unknown>(_hoverIndexForDraggingInfo: P0): R;
    moveDraggedViewToRowAtIndex<R = void, P0 = number>(_moveDraggedViewToRowAtIndex: P0): R;
    subViewDestinationFrames<R = NSArray>(): R;
    setSubViewDestinationFrames<R = void, P0 = NSArray>(_v: P0): R;
    delegate<R = MSReorderingContainerDelegate>(): R;
    setDelegate<R = void, P0 = MSReorderingContainerDelegate>(_v: P0): R;
  }
  namespace MSReorderingContainerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSReorderingContainerView>(): R;
      new: <R = MSReorderingContainerView>() => R;
    }
  }
}

declare const MSReorderingContainerView: cocoa.MSReorderingContainerView.CLASS;
