/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenTileDividerWindowContentView<T0 = void, T1 = void, T2 = void> extends NSView {
    cleanupLiveResize<R = void>(): R;
    performDragOnMouseDown<R = void, P0 = unknown>(_performDragOnMouseDown: P0): R;
    eventLocationRelativeToTileDivider<R = CGPoint, P0 = unknown>(_eventLocationRelativeToTileDivider: P0): R;
    dividerOriginX<R = number>(): R;
    performDoubleClickResize<R = void, P0 = unknown>(_performDoubleClickResize: P0): R;
    resizeCursor<R = unknown>(): R;
  }
  namespace _NSFullScreenTileDividerWindowContentView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSFullScreenTileDividerWindowContentView>(): R;
      new: <R = _NSFullScreenTileDividerWindowContentView>() => R;
      optionsForLiveResize<R = number>(): R;
    }
  }
}
