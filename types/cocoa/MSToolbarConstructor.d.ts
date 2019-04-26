/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToolbarConstructor<T0 = void, T1 = void, T2 = void> extends NSObject, NSToolbarDelegateProtocol {
    cxx_destruct<R = void>(): R;
    validateToolbarItems<R = void>(): R;
    constructToolbarForWindow<R = void, P0 = unknown>(_constructToolbarForWindow: P0): R;
    initWithDocument<R = unknown, P0 = unknown>(_initWithDocument: P0): R;
    toolbar<R = NSToolbar>(): R;
    setToolbar<R = void, P0 = NSToolbar>(_v: P0): R;
    toolbarDefaultItemIdentifiers<R = NSArray>(): R;
    setToolbarDefaultItemIdentifiers<R = void, P0 = NSArray>(_v: P0): R;
    toolbarAllowedItemIdentifiers<R = NSArray>(): R;
    setToolbarAllowedItemIdentifiers<R = void, P0 = NSArray>(_v: P0): R;
    toolbarSelectableIdentifiers<R = NSArray>(): R;
    setToolbarSelectableIdentifiers<R = void, P0 = NSArray>(_v: P0): R;
    doc<R = MSDocument>(): R;
    setDoc<R = void, P0 = MSDocument>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSToolbarConstructor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSToolbarDelegateProtocol {
      alloc<R = MSToolbarConstructor>(): R;
      new: <R = MSToolbarConstructor>() => R;
    }
  }
}

declare const MSToolbarConstructor: cocoa.MSToolbarConstructor.CLASS;
