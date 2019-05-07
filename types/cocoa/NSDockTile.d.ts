/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDockTile<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    _dockIsAlive<R = void, P0 = boolean>(__dockIsAlive: P0): R;
    _updateDockWindowIDAndDisplayIfNeeded<R = void, P0 = boolean>(__updateDockWindowIDAndDisplayIfNeeded: P0): R;
    _dockTileScaleFactorChanged<R = void, P0 = unknown>(__dockTileScaleFactorChanged: P0): R;
    _backstopView<R = unknown>(): R;
    _tileImage<R = unknown>(): R;
    display<R = void>(): R;
    _reenableAppNap<R = void, P0 = unknown>(__reenableAppNap: P0): R;
    _temporarilyDisableAppNap<R = void>(): R;
    _getSizeFromDock<R = CGSize>(): R;
    dealloc<R = void>(): R;
    _createFrameViewIfNeeded<R = void>(): R;
    _releaseContextIfEmpty<R = boolean>(): R;
    _hasCustomContent<R = boolean>(): R;
    _releaseDockContext<R = void>(): R;
    _unregisterForDockScaleChangeNotification<R = void>(): R;
    _registerForDockScaleChangeNotification<R = void>(): R;
    invalidateOwner<R = void>(): R;
    initWithOwner<R = unknown, P0 = unknown>(_initWithOwner: P0): R;
    _getDockContext_andSize<R = boolean, P0 = CGContext, P1 = CGSize>(__getDockContext: P0, _andSize: P1): R;
    frameChanged<R = void, P0 = unknown>(_frameChanged: P0): R;
    _miniViewResized<R = void>(): R;
    _setMiniViewWindowLevel<R = void, P0 = number>(__setMiniViewWindowLevel: P0): R;
    _setMiniViewShown<R = void, P0 = boolean>(__setMiniViewShown: P0): R;
    _setMiniView_contextid<R = void, P0 = number, P1 = number>(__setMiniView: P0, _contextid: P1): R;
    badgeLabel<R = NSString>(): R;
    setBadgeLabel<R = void, P0 = NSString>(_v: P0): R;
    showsApplicationBadge<R = boolean>(): R;
    setShowsApplicationBadge<R = void, P0 = boolean>(_v: P0): R;
    contentView<R = NSView>(): R;
    setContentView<R = void, P0 = NSView>(_v: P0): R;
    size<R = CGSize>(): R;
    owner<R = unknown>(): R;
    miniView<R = NSView>(): R;
    setMiniView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace NSDockTile {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDockTile>(): R;
      new: <R = NSDockTile>() => R;
    }
  }
}

declare const NSDockTile: cocoa.NSDockTile.CLASS;
