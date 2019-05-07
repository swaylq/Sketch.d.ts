/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberDataSourceProtocol<T0 = void, T1 = void, T2 = void> {
    scrubber_viewForItemAtIndex<R = NSScrubberItemView, P0 = NSScrubber, P1 = number>(_scrubber: P0, _viewForItemAtIndex: P1): R;
    numberOfItemsForScrubber<R = number, P0 = NSScrubber>(_numberOfItemsForScrubber: P0): R;
  }
  namespace NSScrubberDataSourceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
