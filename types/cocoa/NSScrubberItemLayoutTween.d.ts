/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberItemLayoutTween<T0 = void, T1 = void, T2 = void> extends NSObject, NSScrubberItemLayoutProtocol {
    layoutAttributesWithPrimaryAttributes_secondaryAttributes_ratioOfSecondary<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_layoutAttributesWithPrimaryAttributes: P0, _secondaryAttributes: P1, _ratioOfSecondary: P2): R;
    recacheLayoutAttributesForModelStateIfNeeded_inView<R = void, P0 = unknown, P1 = unknown>(_recacheLayoutAttributesForModelStateIfNeeded: P0, _inView: P1): R;
    dealloc<R = void>(): R;
    cachedSecondarySelection<R = NSSet>(): R;
    setCachedSecondarySelection<R = void, P0 = NSSet>(_v: P0): R;
    cachedPrimarySelection<R = NSSet>(): R;
    setCachedPrimarySelection<R = void, P0 = NSSet>(_v: P0): R;
    cachedSecondaryKey<R = unknown>(): R;
    setCachedSecondaryKey<R = void, P0 = unknown>(_v: P0): R;
    cachedPrimaryKey<R = unknown>(): R;
    setCachedPrimaryKey<R = void, P0 = unknown>(_v: P0): R;
    cleanState<R = unknown>(): R;
    setCleanState<R = void, P0 = unknown>(_v: P0): R;
    scrubberLayout<R = NSScrubberLayout>(): R;
    setScrubberLayout<R = void, P0 = NSScrubberLayout>(_v: P0): R;
    wantsTrackingPosition<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSScrubberItemLayoutTween {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSScrubberItemLayoutProtocol {
      alloc<R = NSScrubberItemLayoutTween>(): R;
      new: <R = NSScrubberItemLayoutTween>() => R;
    }
  }
}

declare const NSScrubberItemLayoutTween: cocoa.NSScrubberItemLayoutTween.CLASS;
