/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDisplayLinkInvocation<T0 = void, T1 = void, T2 = void> extends NSDisplayLinkInvocation {
    duration<R = number>(): R;
    timestamp<R = number>(): R;
    initWithTimestamp_duration<R = unknown, P0 = number, P1 = number>(_initWithTimestamp: P0, _duration: P1): R;
  }
  namespace _NSDisplayLinkInvocation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDisplayLinkInvocation {
      alloc<R = _NSDisplayLinkInvocation>(): R;
      new: <R = _NSDisplayLinkInvocation>() => R;
    }
  }
}
