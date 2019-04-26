/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileSpecifier<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    asRef<R = FSRef>(): R;
    presentableName<R = unknown>(): R;
    parentSpecifier<R = unknown>(): R;
    path<R = unknown>(): R;
    hash<R = number>(): R;
    initWithParentSpecifier_name<R = unknown, P0 = unknown, P1 = unknown>(_initWithParentSpecifier: P0, _name: P1): R;
    initWithURL_traverseLink<R = unknown, P0 = unknown, P1 = boolean>(_initWithURL: P0, _traverseLink: P1): R;
    initWithRef<R = unknown, P0 = FSRef>(_initWithRef: P0): R;
    initWithPath_traverseLink<R = unknown, P0 = unknown, P1 = boolean>(_initWithPath: P0, _traverseLink: P1): R;
  }
  namespace NSFileSpecifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSFileSpecifier>(): R;
      new: <R = NSFileSpecifier>() => R;
      specifierWithURL_traverseLink<R = unknown, P0 = unknown, P1 = boolean>(_specifierWithURL: P0, _traverseLink: P1): R;
      specifierWithPath_traverseLink<R = unknown, P0 = unknown, P1 = boolean>(_specifierWithPath: P0, _traverseLink: P1): R;
    }
  }
}

declare const NSFileSpecifier: cocoa.NSFileSpecifier.CLASS;
