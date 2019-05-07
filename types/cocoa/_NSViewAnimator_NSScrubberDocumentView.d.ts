/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewAnimator_NSScrubberDocumentView<T0 = void, T1 = void, T2 = void> extends _NSViewAnimator {
    updateForTrackingPoint_isTrackingSelection<R = void, P0 = CGPoint, P1 = boolean>(_updateForTrackingPoint: P0, _isTrackingSelection: P1): R;
    setHighlightedIndex<R = void, P0 = number>(_setHighlightedIndex: P0): R;
    setSelectedIndex<R = void, P0 = number>(_setSelectedIndex: P0): R;
    targetView<R = NSScrubberDocumentView>(): R;
  }
  namespace _NSViewAnimator_NSScrubberDocumentView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSViewAnimator {}
  }
}
