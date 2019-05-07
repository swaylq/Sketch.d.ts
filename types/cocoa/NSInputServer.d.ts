/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInputServer<T0 = void, T1 = void, T2 = void> extends NSObject, NSInputServiceProviderProtocol, NSInputServerMouseTrackerProtocol {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithDelegate_name<R = unknown, P0 = unknown, P1 = unknown>(_initWithDelegate: P0, _name: P1): R;
    cancelInput_conversation<R = void, P0 = unknown, P1 = number>(_cancelInput: P0, _conversation: P1): R;
    senderDidResignActive<R = void, P0 = unknown>(_senderDidResignActive: P0): R;
    senderDidBecomeActive<R = void, P0 = unknown>(_senderDidBecomeActive: P0): R;
    setActivated_sender<R = void, P0 = boolean, P1 = unknown>(_setActivated: P0, _sender: P1): R;
    _inputClientChangedStatus_inputClient<R = void, P0 = unknown, P1 = unknown>(__inputClientChangedStatus: P0, _inputClient: P1): R;
  }
  namespace NSInputServer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSInputServiceProviderProtocol, NSInputServerMouseTrackerProtocol {
      alloc<R = NSInputServer>(): R;
      new: <R = NSInputServer>() => R;
    }
  }
}

declare const NSInputServer: cocoa.NSInputServer.CLASS;
