/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPortMessage<T0 = void, T1 = void, T2 = void> extends NSObject {
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    sendBeforeDate<R = boolean, P0 = unknown>(_sendBeforeDate: P0): R;
    dealloc<R = void>(): R;
    initWithReceivePort_sendPort_components<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithReceivePort: P0, _sendPort: P1, _components: P2): R;
    initWithSendPort_receivePort_components<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithSendPort: P0, _receivePort: P1, _components: P2): R;
    initWithMachMessage<R = unknown, P0 = void>(_initWithMachMessage: P0): R;
    components<R = NSArray>(): R;
    msgid<R = number>(): R;
    setMsgid<R = void, P0 = number>(_v: P0): R;
    receivePort<R = NSPort>(): R;
    sendPort<R = NSPort>(): R;
  }
  namespace NSPortMessage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPortMessage>(): R;
      new: <R = NSPortMessage>() => R;
    }
  }
}

declare const NSPortMessage: cocoa.NSPortMessage.CLASS;
