/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDirectorySubpathsOperation<T0 = void, T1 = void, T2 = void> extends NSDirectoryTraversalOperation {
    subpaths<R = unknown>(): R;
  }
  namespace NSDirectorySubpathsOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDirectoryTraversalOperation {
      alloc<R = NSDirectorySubpathsOperation>(): R;
      new: <R = NSDirectorySubpathsOperation>() => R;
      directorySubpathsOperationAtPath<R = unknown, P0 = unknown>(_directorySubpathsOperationAtPath: P0): R;
    }
  }
}

declare const NSDirectorySubpathsOperation: cocoa.NSDirectorySubpathsOperation.CLASS;
