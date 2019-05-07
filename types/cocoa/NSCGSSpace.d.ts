/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSSpace<T0 = void, T1 = void, T2 = void> extends NSObject {
    setMenuBarCompanionWindow_offset<R = void, P0 = number, P1 = number>(_setMenuBarCompanionWindow: P0, _offset: P1): R;
    finishedResizeForRect_ackImmediately<R = void, P0 = CGRect, P1 = boolean>(_finishedResizeForRect: P0, _ackImmediately: P1): R;
    spaceID<R = number>(): R;
  }
  namespace NSCGSSpace {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSCGSSpace>(): R;
      new: <R = NSCGSSpace>() => R;
      spaceWithSpaceID<R = unknown, P0 = number>(_spaceWithSpaceID: P0): R;
      currentManagedSpaces<R = unknown>(): R;
      allManagedSpaces<R = unknown>(): R;
    }
  }
}

declare const NSCGSSpace: cocoa.NSCGSSpace.CLASS;
