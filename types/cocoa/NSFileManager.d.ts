/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileManager<T = any> extends cocoa.NSObject {
    // + NSFileManager(NSWorkspaceAuthorization,Chocolat):
    visibleSubpathsOfDirectoryWithoutGoingIntoPackages<R = unknown, P0 = unknown>(_visibleSubpathsOfDirectoryWithoutGoingIntoPackages: P0): R;
    visibleSubpathsOfDirectoryAtURLWithoutGoingIntoPackages<R = unknown, P0 = unknown>(_visibleSubpathsOfDirectoryAtURLWithoutGoingIntoPackages: P0): R;
  }
  namespace classes {
    export interface NSFileManager<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSFileManager>(): R;
      new: <R = NSFileManager>() => R;
      defaultManager<R = unknown>(): R;
      // + NSFileManager(NSWorkspaceAuthorization,Chocolat):
      fileManagerWithAuthorization<R = unknown, P0 = unknown>(_fileManagerWithAuthorization: P0): R;
    }
  }
}

declare const NSFileManager: cocoa.classes.NSFileManager;
