/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTileMipLevel<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    subtractDirtyRect<R = void, P0 = unknown>(_subtractDirtyRect: P0): R;
    uniteDirtyRect<R = void, P0 = CGRect>(_uniteDirtyRect: P0): R;
    isCurrentColorSpaceEqualTo<R = boolean, P0 = CGColorSpace>(_isCurrentColorSpaceEqualTo: P0): R;
    removeAllTilesAndResetDirtyRegionToRect<R = void, P0 = unknown>(_removeAllTilesAndResetDirtyRegionToRect: P0): R;
    removeAllTilesAndClearDirtyRegion<R = void>(): R;
    removeAllTiles<R = void>(): R;
    addTile<R = void, P0 = unknown>(_addTile: P0): R;
    findWritableTileAt<R = unknown, P0 = unknown>(_findWritableTileAt: P0): R;
    enqueueRenderableTilesForVisibleRect<R = unknown, P0 = CGRect>(_enqueueRenderableTilesForVisibleRect: P0): R;
    countExistingTilesForVisibleRect<R = number, P0 = CGRect>(_countExistingTilesForVisibleRect: P0): R;
    dealloc<R = void>(): R;
    initWithScaleRangeMax<R = unknown, P0 = number>(_initWithScaleRangeMax: P0): R;
    tiles<R = NSMutableArray>(): R;
    setTiles<R = void, P0 = NSMutableArray>(_v: P0): R;
    dirtyRegion<R = unknown>(): R;
    setDirtyRegion<R = void, P0 = unknown>(_v: P0): R;
    clearBeforeUpload<R = boolean>(): R;
    setClearBeforeUpload<R = void, P0 = boolean>(_v: P0): R;
    currentColorSpace<R = CGColorSpace>(): R;
    setCurrentColorSpace<R = void, P0 = CGColorSpace>(_v: P0): R;
    scale<R = number>(): R;
    setScale<R = void, P0 = number>(_v: P0): R;
    scaleRangeMax<R = number>(): R;
    tileCount<R = number>(): R;
  }
  namespace MSTileMipLevel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSTileMipLevel>(): R;
      new: <R = MSTileMipLevel>() => R;
      tileMipLevelWithScaleRangeMax<R = unknown, P0 = number>(_tileMipLevelWithScaleRangeMax: P0): R;
    }
  }
}

declare const MSTileMipLevel: cocoa.MSTileMipLevel.CLASS;
