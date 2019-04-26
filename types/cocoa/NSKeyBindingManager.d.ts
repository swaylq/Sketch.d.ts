/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyBindingManager<T0 = void, T1 = void, T2 = void> extends NSObject {
    _monitorKeyBinding_flags<R = void, P0 = number, P1 = number>(__monitorKeyBinding: P0, _flags: P1): R;
    _setNextKeyBindingManager<R = void, P0 = unknown>(__setNextKeyBindingManager: P0): R;
    setQuoteBinding<R = void, P0 = unknown>(_setQuoteBinding: P0): R;
    setArgumentBinding<R = void, P0 = unknown>(_setArgumentBinding: P0): R;
    setDictionary<R = void, P0 = unknown>(_setDictionary: P0): R;
    dictionary<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithDictionary<R = unknown, P0 = unknown>(_initWithDictionary: P0): R;
    interpretKeyEvents_forClient<R = void, P0 = unknown, P1 = unknown>(_interpretKeyEvents: P0, _forClient: P1): R;
    flushTextForClient<R = void, P0 = unknown>(_flushTextForClient: P0): R;
    interpretEventAsText_forClient<R = void, P0 = unknown, P1 = unknown>(_interpretEventAsText: P0, _forClient: P1): R;
    interpretEventAsCommand_forClient<R = boolean, P0 = unknown, P1 = unknown>(_interpretEventAsCommand: P0, _forClient: P1): R;
  }
  namespace NSKeyBindingManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSKeyBindingManager>(): R;
      new: <R = NSKeyBindingManager>() => R;
      _keyBindingMonitor<R = unknown>(): R;
      _setKeyBindingMonitor<R = void, P0 = unknown>(__setKeyBindingMonitor: P0): R;
      setRepeatCountForNextCommand<R = void, P0 = number>(_setRepeatCountForNextCommand: P0): R;
      repeatCount<R = number>(): R;
      cancel<R = void>(): R;
      interpretKeyEvents_sender<R = void, P0 = unknown, P1 = unknown>(_interpretKeyEvents: P0, _sender: P1): R;
      sharedKeyBindingManager<R = unknown>(): R;
      initialize<R = void>(): R;
      draggingKeyBindingManager<R = unknown>(): R;
      inputKeyBindingManager<R = unknown>(): R;
      keyBindingManagerForClient<R = unknown, P0 = unknown>(_keyBindingManagerForClient: P0): R;
    }
  }
}

declare const NSKeyBindingManager: cocoa.NSKeyBindingManager.CLASS;
