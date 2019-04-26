/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileManager<T0 = void, T1 = void, T2 = void> extends NSObject {
    // + NSFileManager(Chocolat): 
    visibleSubpathsOfDirectoryWithoutGoingIntoPackages<R = unknown, P0 = unknown>(_visibleSubpathsOfDirectoryWithoutGoingIntoPackages: P0): R;
    visibleSubpathsOfDirectoryAtURLWithoutGoingIntoPackages<R = unknown, P0 = unknown>(_visibleSubpathsOfDirectoryAtURLWithoutGoingIntoPackages: P0): R;
  }
  namespace NSFileManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSFileManager>(): R;
      new: <R = NSFileManager>() => R;
      defaultManager<R = unknown>(): R;
      // + NSFileManager(NSWorkspaceAuthorization): 
      fileManagerWithAuthorization<R = unknown, P0 = unknown>(_fileManagerWithAuthorization: P0): R;
    }
  }
}

declare const NSFileManager: cocoa.NSFileManager.CLASS;
