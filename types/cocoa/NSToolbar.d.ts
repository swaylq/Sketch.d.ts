/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbar<T0 = void, T1 = void, T2 = void> extends NSObject {
    // + NSToolbar(CHToolbarExtensions): 
    itemWithIdentifier<R = unknown, P0 = unknown>(_itemWithIdentifier: P0): R;
  }
  namespace NSToolbar {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSToolbar>(): R;
      new: <R = NSToolbar>() => R;
      _servicesIdentifiers<R = unknown>(): R;
  
  }
  }
}

declare const NSToolbar: cocoa.NSToolbar.CLASS;
