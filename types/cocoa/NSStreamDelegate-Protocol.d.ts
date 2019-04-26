/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStreamDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    stream_handleEvent<R = void, P0 = NSStream, P1 = number>(_stream: P0, _handleEvent: P1): R;
  }
  namespace NSStreamDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
