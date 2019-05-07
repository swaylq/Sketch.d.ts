/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollStateEventListenerProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    scrollStateEvent_sender<R = void, P0 = number, P1 = unknown>(_scrollStateEvent: P0, _sender: P1): R;
  }
  namespace _NSScrollStateEventListenerProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
