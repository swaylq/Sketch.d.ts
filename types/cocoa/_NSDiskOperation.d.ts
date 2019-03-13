/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDiskOperation<T = any> extends NSObject {
    dealloc<R = void>(): R;
    description<R = unknown>(): R;
    volumeURL<R = NSURL>(): R;
    eject<R = boolean>(): R;
    disk<R = __DADisk>(): R;
  }
  namespace classes {
    export interface _NSDiskOperation<T = any> extends NSObject {
      alloc<R = _NSDiskOperation>(): R;
      new: <R = _NSDiskOperation>() => R;
      diskOperationWithDisk_eject_volumeURL<R = unknown, P0 = __DADisk, P1 = boolean, P2 = unknown>(_diskOperationWithDisk: P0, _eject: P1, _volumeURL: P2): R;
    }
  }
}