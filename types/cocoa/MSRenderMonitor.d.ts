/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderMonitor<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    timeIntervalBetweenStartEvent_endEvent<R = number, P0 = number, P1 = number>(_timeIntervalBetweenStartEvent: P0, _endEvent: P1): R;
    timestampForEvent<R = number, P0 = number>(_timestampForEvent: P0): R;
    registerHook_forEvent<R = void, P0 = CDUnknownBlockType, P1 = number>(_registerHook: P0, _forEvent: P1): R;
    recordEvent_timestamp<R = void, P0 = number, P1 = number>(_recordEvent: P0, _timestamp: P1): R;
    recordEvent<R = void, P0 = number>(_recordEvent: P0): R;
    hooks<R = NSMutableArray>(): R;
    setHooks<R = void, P0 = NSMutableArray>(_v: P0): R;
    timestamps<R = unknown>(): R;
    setTimestamps<R = void, P0 = unknown>(_v: P0): R;
    shouldForceFullRedraw<R = boolean>(): R;
    setShouldForceFullRedraw<R = void, P0 = boolean>(_v: P0): R;
    shouldClearAllCaches<R = boolean>(): R;
    setShouldClearAllCaches<R = void, P0 = boolean>(_v: P0): R;
    shouldRemoveWhenDone<R = boolean>(): R;
    setShouldRemoveWhenDone<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSRenderMonitor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSRenderMonitor>(): R;
      new: <R = MSRenderMonitor>() => R;
    }
  }
}

declare const MSRenderMonitor: cocoa.MSRenderMonitor.CLASS;
