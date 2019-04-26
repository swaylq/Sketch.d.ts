/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    didCancelInteractingWithScrubber<R = void, P0 = NSScrubber>(_didCancelInteractingWithScrubber: P0): R;
    didFinishInteractingWithScrubber<R = void, P0 = NSScrubber>(_didFinishInteractingWithScrubber: P0): R;
    didBeginInteractingWithScrubber<R = void, P0 = NSScrubber>(_didBeginInteractingWithScrubber: P0): R;
    scrubber_didChangeVisibleRange<R = void, P0 = NSScrubber, P1 = _NSRange>(_scrubber: P0, _didChangeVisibleRange: P1): R;
    scrubber_didHighlightItemAtIndex<R = void, P0 = NSScrubber, P1 = number>(_scrubber: P0, _didHighlightItemAtIndex: P1): R;
    scrubber_didSelectItemAtIndex<R = void, P0 = NSScrubber, P1 = number>(_scrubber: P0, _didSelectItemAtIndex: P1): R;
  }
  namespace NSScrubberDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
