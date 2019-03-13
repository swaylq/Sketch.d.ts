/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSharingService_Subsystem<T = any> extends NSObject, PKModularServiceProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSSharingService_Subsystem<T = any> extends NSObject, PKModularServiceProtocol {
      alloc<R = NSSharingService_Subsystem>(): R;
      new: <R = NSSharingService_Subsystem>() => R;
    }
  }
}

declare const NSSharingService_Subsystem: cocoa.classes.NSSharingService_Subsystem;
