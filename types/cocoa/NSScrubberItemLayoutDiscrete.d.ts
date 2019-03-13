/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberItemLayoutDiscrete<T = any> extends NSObject, NSScrubberItemLayoutProtocol {
    dealloc<R = void>(): R;
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
  namespace classes {
    export interface NSScrubberItemLayoutDiscrete<T = any> extends NSObject, NSScrubberItemLayoutProtocol {
      alloc<R = NSScrubberItemLayoutDiscrete>(): R;
      new: <R = NSScrubberItemLayoutDiscrete>() => R;
    }
  }
}

declare const NSScrubberItemLayoutDiscrete: cocoa.classes.NSScrubberItemLayoutDiscrete;
