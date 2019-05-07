/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginLogActionProtocol<T0 = void, T1 = void, T2 = void> {
    logStringFor<R = NSString, P0 = NSString>(_logStringFor: P0): R;
    clearLogFor<R = void, P0 = NSString>(_clearLogFor: P0): R;
    log_from<R = void, P0 = NSDictionary, P1 = NSString>(_log: P0, _from: P1): R;
  }
  namespace MSPluginLogActionProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
