/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSharingService_Subsystem<T0 = void, T1 = void, T2 = void> extends NSObject, PKModularServiceProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSSharingService_Subsystem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, PKModularServiceProtocol {
      alloc<R = NSSharingService_Subsystem>(): R;
      new: <R = NSSharingService_Subsystem>() => R;
    }
  }
}

declare const NSSharingService_Subsystem: cocoa.NSSharingService_Subsystem.CLASS;
