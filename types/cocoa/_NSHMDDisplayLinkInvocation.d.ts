/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSHMDDisplayLinkInvocation<T0 = void, T1 = void, T2 = void> extends NSHMDDisplayLinkInvocation {
    duration<R = number>(): R;
    timestamp<R = number>(): R;
    initWithTimestamp_duration<R = unknown, P0 = number, P1 = number>(_initWithTimestamp: P0, _duration: P1): R;
  }
  namespace _NSHMDDisplayLinkInvocation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSHMDDisplayLinkInvocation {
      alloc<R = _NSHMDDisplayLinkInvocation>(): R;
      new: <R = _NSHMDDisplayLinkInvocation>() => R;
    }
  }
}
