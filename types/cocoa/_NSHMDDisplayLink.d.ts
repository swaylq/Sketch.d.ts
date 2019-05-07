/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSHMDDisplayLink<T0 = void, T1 = void, T2 = void> extends NSHMDDisplayLink {
    isValid<R = boolean>(): R;
    dealloc<R = void>(): R;
    initWithDisplayTiming_handler<R = unknown, P0 = CDUnknownBlockType, P1 = CDUnknownBlockType>(_initWithDisplayTiming: P0, _handler: P1): R;
  }
  namespace _NSHMDDisplayLink {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSHMDDisplayLink {
      alloc<R = _NSHMDDisplayLink>(): R;
      new: <R = _NSHMDDisplayLink>() => R;
    }
  }
}
