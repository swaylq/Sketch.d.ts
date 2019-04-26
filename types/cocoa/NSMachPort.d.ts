/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMachPort<T0 = void, T1 = void, T2 = void> extends NSPort {
    initWithMachPort_options<R = unknown, P0 = number, P1 = number>(_initWithMachPort: P0, _options: P1): R;
    handlePortMessage<R = void, P0 = unknown>(_handlePortMessage: P0): R;
    sendBeforeTime_streamData_components_from_msgid<R = boolean, P0 = number, P1 = void, P2 = unknown, P3 = unknown, P4 = number>(_sendBeforeTime: P0, _streamData: P1, _components: P2, _from: P3, _msgid: P4): R;
    isValid<R = boolean>(): R;
    _tryRetain<R = boolean>(): R;
    _isDeallocating<R = boolean>(): R;
    hash<R = number>(): R;
    _cfTypeID<R = number>(): R;
    machPort<R = number>(): R;
  }
  namespace NSMachPort {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPort {
      alloc<R = NSMachPort>(): R;
      new: <R = NSMachPort>() => R;
      sendBeforeTime_streamData_components_to_from_msgid_reserved<R = boolean, P0 = number, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = number, P6 = number>(_sendBeforeTime: P0, _streamData: P1, _components: P2, _to: P3, _from: P4, _msgid: P5, _reserved: P6): R;
      parseMachMessage_localPort_remotePort_msgid_components<R = void, P0 = void, P1 = unknown, P2 = unknown, P3 = number, P4 = unknown>(_parseMachMessage: P0, _localPort: P1, _remotePort: P2, _msgid: P3, _components: P4): R;
      _fixNSMachPortLeak<R = void>(): R;
      portWithMachPort_options<R = unknown, P0 = number, P1 = number>(_portWithMachPort: P0, _options: P1): R;
      resetAllPorts<R = void>(): R;
    }
  }
}

declare const NSMachPort: cocoa.NSMachPort.CLASS;
