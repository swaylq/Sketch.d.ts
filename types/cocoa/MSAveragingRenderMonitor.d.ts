/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAveragingRenderMonitor<T = any> extends MSRenderMonitor {
    incrementFrames<R = void>(): R;
    resetFrames<R = number>(): R;
    runUpdateBlock<R = void, P0 = CDUnknownBlockType>(_runUpdateBlock: P0): R;
    dealloc<R = void>(): R;
    initWithUpdateBlock<R = unknown, P0 = CDUnknownBlockType>(_initWithUpdateBlock: P0): R;
    updateTimer<R = NSTimer>(): R;
    setUpdateTimer<R = void, P0 = NSTimer>(_v: P0): R;
    start<R = number>(): R;
    setStart<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface MSAveragingRenderMonitor<T = any> extends MSRenderMonitor {
      alloc<R = MSAveragingRenderMonitor>(): R;
      new: <R = MSAveragingRenderMonitor>() => R;
    }
  }
}

declare const MSAveragingRenderMonitor: cocoa.classes.MSAveragingRenderMonitor;
