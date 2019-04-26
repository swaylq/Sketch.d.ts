/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPort<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSCodingProtocol {
    removeConnection_fromRunLoop_forMode<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_removeConnection: P0, _fromRunLoop: P1, _forMode: P2): R;
    addConnection_toRunLoop_forMode<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_addConnection: P0, _toRunLoop: P1, _forMode: P2): R;
    removeFromRunLoop_forMode<R = void, P0 = unknown, P1 = unknown>(_removeFromRunLoop: P0, _forMode: P1): R;
    scheduleInRunLoop_forMode<R = void, P0 = unknown, P1 = unknown>(_scheduleInRunLoop: P0, _forMode: P1): R;
    sendBeforeDate_msgid_components_from_reserved<R = boolean, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown, P4 = number>(_sendBeforeDate: P0, _msgid: P1, _components: P2, _from: P3, _reserved: P4): R;
    sendBeforeDate_components_from_reserved<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(_sendBeforeDate: P0, _components: P1, _from: P2, _reserved: P3): R;
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    classForCoder<R = unknown>(): R;
    classForPortCoder<R = unknown>(): R;
    replacementObjectForCoder<R = unknown, P0 = unknown>(_replacementObjectForCoder: P0): R;
    delegate<R = unknown>(): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
    machPort<R = number>(): R;
    invalidate<R = void>(): R;
    initWithMachPort<R = unknown, P0 = number>(_initWithMachPort: P0): R;
    reservedSpaceLength<R = number>(): R;
    valid<R = boolean>(): R;
  }
  namespace NSPort {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSCodingProtocol {
      alloc<R = NSPort>(): R;
      new: <R = NSPort>() => R;
      portWithMachPort<R = unknown, P0 = number>(_portWithMachPort: P0): R;
      port<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSPort: cocoa.NSPort.CLASS;
