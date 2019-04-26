/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAlphaThresholdColorModifier<T0 = void, T1 = void, T2 = void> extends NSObject, NSDynamicColorModifierProtocol {
    dealloc<R = void>(): R;
    initWithAlphaThreshold_belowThresholdColor_aboveThresholdColor<R = unknown, P0 = number, P1 = unknown, P2 = unknown>(_initWithAlphaThreshold: P0, _belowThresholdColor: P1, _aboveThresholdColor: P2): R;
    aboveThresholdColor<R = NSColor>(): R;
    setAboveThresholdColor<R = void, P0 = NSColor>(_v: P0): R;
    belowThresholdColor<R = NSColor>(): R;
    setBelowThresholdColor<R = void, P0 = NSColor>(_v: P0): R;
    alphaThreshold<R = number>(): R;
    setAlphaThreshold<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSAlphaThresholdColorModifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSDynamicColorModifierProtocol {
      alloc<R = NSAlphaThresholdColorModifier>(): R;
      new: <R = NSAlphaThresholdColorModifier>() => R;
    }
  }
}

declare const NSAlphaThresholdColorModifier: cocoa.NSAlphaThresholdColorModifier.CLASS;
