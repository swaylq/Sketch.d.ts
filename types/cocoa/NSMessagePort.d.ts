/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMessagePort<T0 = void, T1 = void, T2 = void> extends NSPort {
    dealloc<R = void>(): R;
    _tryRetain<R = boolean>(): R;
    _isDeallocating<R = boolean>(): R;
    initWithRemoteName<R = unknown, P0 = unknown>(_initWithRemoteName: P0): R;
    initWithName<R = unknown, P0 = unknown>(_initWithName: P0): R;
    sendBeforeTime_streamData_components_from_msgid<R = boolean, P0 = number, P1 = void, P2 = unknown, P3 = unknown, P4 = number>(_sendBeforeTime: P0, _streamData: P1, _components: P2, _from: P3, _msgid: P4): R;
    setName<R = boolean, P0 = unknown>(_setName: P0): R;
    name<R = unknown>(): R;
    isValid<R = boolean>(): R;
  }
  namespace NSMessagePort {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPort {
      alloc<R = NSMessagePort>(): R;
      new: <R = NSMessagePort>() => R;
      _fixNSMessagePortLeak<R = void>(): R;
      sendBeforeTime_streamData_components_to_from_msgid_reserved<R = boolean, P0 = number, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = number, P6 = number>(_sendBeforeTime: P0, _streamData: P1, _components: P2, _to: P3, _from: P4, _msgid: P5, _reserved: P6): R;
    }
  }
}

declare const NSMessagePort: cocoa.NSMessagePort.CLASS;
