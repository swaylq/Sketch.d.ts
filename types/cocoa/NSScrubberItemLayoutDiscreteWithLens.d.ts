/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberItemLayoutDiscreteWithLens<T0 = void, T1 = void, T2 = void> extends NSScrubberItemLayoutDiscrete, NSScrubberItemLayoutProtocol {
    _updateAttributes_forLensWithState_inView<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__updateAttributes: P0, _forLensWithState: P1, _inView: P2): R;
    _wantsLensForState<R = boolean, P0 = unknown>(__wantsLensForState: P0): R;
    selectionLensThreshold<R = CGSize>(): R;
    setSelectionLensThreshold<R = void, P0 = CGSize>(_v: P0): R;
    wantsTrackingPosition<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    scrubberLayout<R = NSScrubberLayout>(): R;
    setScrubberLayout<R = void, P0 = NSScrubberLayout>(_v: P0): R;
    superclass<R = unknown>(): R;
  }
  namespace NSScrubberItemLayoutDiscreteWithLens {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrubberItemLayoutDiscrete, NSScrubberItemLayoutProtocol {
      alloc<R = NSScrubberItemLayoutDiscreteWithLens>(): R;
      new: <R = NSScrubberItemLayoutDiscreteWithLens>() => R;
    }
  }
}

declare const NSScrubberItemLayoutDiscreteWithLens: cocoa.NSScrubberItemLayoutDiscreteWithLens.CLASS;
