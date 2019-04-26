/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSelfContainedHighLevelExporter<T0 = void, T1 = void, T2 = void> extends MSHighLevelExporter, MSHighLevelExportDelegateProtocol {
    initWithOptions_driver<R = unknown, P0 = unknown, P1 = unknown>(_initWithOptions: P0, _driver: P1): R;
    initWithOptions<R = unknown, P0 = unknown>(_initWithOptions: P0): R;
    infoStack<R = NSMutableArray>(): R;
    setInfoStack<R = void, P0 = NSMutableArray>(_v: P0): R;
    infoRecord<R = NSMutableDictionary>(): R;
    setInfoRecord<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    options<R = NSDictionary>(): R;
    setOptions<R = void, P0 = NSDictionary>(_v: P0): R;
    errors<R = NSMutableArray>(): R;
    setErrors<R = void, P0 = NSMutableArray>(_v: P0): R;
    output<R = NSMutableString>(): R;
    setOutput<R = void, P0 = NSMutableString>(_v: P0): R;
    results<R = NSDictionary>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSSelfContainedHighLevelExporter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSHighLevelExporter, MSHighLevelExportDelegateProtocol {
      alloc<R = MSSelfContainedHighLevelExporter>(): R;
      new: <R = MSSelfContainedHighLevelExporter>() => R;
    }
  }
}

declare const MSSelfContainedHighLevelExporter: cocoa.MSSelfContainedHighLevelExporter.CLASS;
