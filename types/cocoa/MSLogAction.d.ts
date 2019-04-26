/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLogAction<T0 = void, T1 = void, T2 = void> extends MSAction, MSPluginLogActionProtocol {
    label<R = unknown>(): R;
    URLForLogFile<R = unknown>(): R;
    writeToLogFile<R = void, P0 = unknown>(_writeToLogFile: P0): R;
    latestLog<R = NSDictionary>(): R;
    setLatestLog<R = void, P0 = NSDictionary>(_v: P0): R;
    logs<R = NSMutableDictionary>(): R;
    setLogs<R = void, P0 = NSMutableDictionary>(_v: P0): R;
  }
  namespace MSLogAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAction, MSPluginLogActionProtocol {
      alloc<R = MSLogAction>(): R;
      new: <R = MSLogAction>() => R;
    }
  }
}

declare const MSLogAction: cocoa.MSLogAction.CLASS;
