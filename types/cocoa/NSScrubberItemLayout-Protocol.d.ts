/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberItemLayoutProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    invalidateForStateIfNeeded<R = void, P0 = unknown>(_invalidateForStateIfNeeded: P0): R;
    itemLayoutAttributesForItemAtIndex_withState_inView<R = NSScrubberLayoutAttributes, P0 = number, P1 = unknown, P2 = NSView>(_itemLayoutAttributesForItemAtIndex: P0, _withState: P1, _inView: P2): R;
    itemLayoutAttributesForState_inView<R = NSSet, P0 = unknown, P1 = NSView>(_itemLayoutAttributesForState: P0, _inView: P1): R;
    wantsTrackingPosition<R = boolean>(): R;
    scrubberLayout<R = NSScrubberLayout>(): R;
    setScrubberLayout<R = void, P0 = NSScrubberLayout>(_v: P0): R;
  }
  namespace NSScrubberItemLayoutProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
