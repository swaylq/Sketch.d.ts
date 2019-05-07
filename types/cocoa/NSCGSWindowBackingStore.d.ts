/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSWindowBackingStore<T0 = void, T1 = void, T2 = void> extends NSObject {
    makeDrawingContext<R = CGContext>(): R;
    revalidateWithDrawingHandler<R = void, P0 = CDUnknownBlockType>(_revalidateWithDrawingHandler: P0): R;
    invalidateRect<R = void, P0 = CGRect>(_invalidateRect: P0): R;
    imageInRect<R = CGImage, P0 = CGRect>(_imageInRect: P0): R;
    invalidateAlphaShape<R = void>(): R;
    colorSpace<R = CGColorSpace>(): R;
    setColorSpace<R = void, P0 = CGColorSpace>(_v: P0): R;
    depth<R = number>(): R;
    setDepth<R = void, P0 = number>(_v: P0): R;
    keepsExcessAllocation<R = boolean>(): R;
    setKeepsExcessAllocation<R = void, P0 = boolean>(_v: P0): R;
    opaque<R = boolean>(): R;
    setOpaque<R = void, P0 = boolean>(_v: P0): R;
    scale<R = number>(): R;
    setScale<R = void, P0 = number>(_v: P0): R;
    size<R = CGSize>(): R;
    workingColorSpace<R = CGColorSpace>(): R;
    setWorkingColorSpace<R = void, P0 = CGColorSpace>(_v: P0): R;
    workingDepth<R = number>(): R;
    setWorkingDepth<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSCGSWindowBackingStore {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSCGSWindowBackingStore>(): R;
      new: <R = NSCGSWindowBackingStore>() => R;
      backingStoreWithWindowID<R = unknown, P0 = number>(_backingStoreWithWindowID: P0): R;
    }
  }
}

declare const NSCGSWindowBackingStore: cocoa.NSCGSWindowBackingStore.CLASS;
