/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFileWatcherDirectoryFileHandleInfo<T0 = void, T1 = void, T2 = void> extends _NSFileWatcherFileHandleInfo {
    hash<R = number>(): R;
    isDirectory<R = boolean>(): R;
  }
  namespace _NSFileWatcherDirectoryFileHandleInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSFileWatcherFileHandleInfo {
      alloc<R = _NSFileWatcherDirectoryFileHandleInfo>(): R;
      new: <R = _NSFileWatcherDirectoryFileHandleInfo>() => R;
    }
  }
}
