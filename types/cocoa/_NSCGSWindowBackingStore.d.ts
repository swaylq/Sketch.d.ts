/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindowBackingStore<T0 = void, T1 = void, T2 = void> extends NSCGSWindowBackingStore {
    flushBackBufferInRect<R = void, P0 = CGRect>(_flushBackBufferInRect: P0): R;
    flushBackBufferInRegion<R = void, P0 = CGSRegionObject>(_flushBackBufferInRegion: P0): R;
    dirtyBackBufferInRect<R = void, P0 = CGRect>(_dirtyBackBufferInRect: P0): R;
    dirtyBackBufferInRegion<R = void, P0 = CGSRegionObject>(_dirtyBackBufferInRegion: P0): R;
    defineBackBufferInRect<R = void, P0 = CGRect>(_defineBackBufferInRect: P0): R;
    defineBackBufferInRegion<R = void, P0 = CGSRegionObject>(_defineBackBufferInRegion: P0): R;
    unlockBackBuffer<R = void>(): R;
    lockBackBuffer<R = void>(): R;
    backBuffer<R = unknown>(): R;
    setKeepsExcessAllocation<R = void, P0 = boolean>(_setKeepsExcessAllocation: P0): R;
    keepsExcessAllocation<R = boolean>(): R;
    setDepth<R = void, P0 = number>(_setDepth: P0): R;
    depth<R = number>(): R;
    setColorSpace<R = void, P0 = CGColorSpace>(_setColorSpace: P0): R;
    colorSpace<R = CGColorSpace>(): R;
    setOpaque<R = void, P0 = boolean>(_setOpaque: P0): R;
    isOpaque<R = boolean>(): R;
    setScale<R = void, P0 = number>(_setScale: P0): R;
    scale<R = number>(): R;
    setAttached<R = void, P0 = boolean>(_setAttached: P0): R;
    isAttached<R = boolean>(): R;
    setWorkingDepth<R = void, P0 = number>(_setWorkingDepth: P0): R;
    workingDepth<R = number>(): R;
    setWorkingColorSpace<R = void, P0 = CGColorSpace>(_setWorkingColorSpace: P0): R;
    workingColorSpace<R = CGColorSpace>(): R;
    size<R = CGSize>(): R;
    dealloc<R = void>(): R;
    initWithWindowID<R = unknown, P0 = number>(_initWithWindowID: P0): R;
  }
  namespace _NSCGSWindowBackingStore {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCGSWindowBackingStore {
      alloc<R = _NSCGSWindowBackingStore>(): R;
      new: <R = _NSCGSWindowBackingStore>() => R;
    }
  }
}
