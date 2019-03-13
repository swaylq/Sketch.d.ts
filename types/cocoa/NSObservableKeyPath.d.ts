/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObservableKeyPath<T = any> extends NSBoundKeyPath, NSObservableProtocol {
    _wantsChanges<R = boolean>(): R;
    addObserver<R = unknown, P0 = unknown>(_addObserver: P0): R;
    changes<R = NSObservable>(): R;
    description<R = NSString>(): R;
    debugDescription<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSObservableKeyPath<T = any> extends NSBoundKeyPath, NSObservableProtocol {
      alloc<R = NSObservableKeyPath>(): R;
      new: <R = NSObservableKeyPath>() => R;
    }
  }
}

declare const NSObservableKeyPath: cocoa.classes.NSObservableKeyPath;
