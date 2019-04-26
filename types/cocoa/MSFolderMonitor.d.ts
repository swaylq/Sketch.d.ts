/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFolderMonitor<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    flush<R = void>(): R;
    flags<R = number>(): R;
    initWithURL_latency_contentsChangedBlock<R = unknown, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_initWithURL: P0, _latency: P1, _contentsChangedBlock: P2): R;
    initWithURL_contentsChangedBlock<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_initWithURL: P0, _contentsChangedBlock: P1): R;
    contentsChangedBlock<R = CDUnknownBlockType>(): R;
    setContentsChangedBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    folderURL<R = NSURL>(): R;
    setFolderURL<R = void, P0 = NSURL>(_v: P0): R;
  }
  namespace MSFolderMonitor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSFolderMonitor>(): R;
      new: <R = MSFolderMonitor>() => R;
    }
  }
}

declare const MSFolderMonitor: cocoa.MSFolderMonitor.CLASS;
