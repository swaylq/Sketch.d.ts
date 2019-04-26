/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarFlexibleSpace<T0 = void, T1 = void, T2 = void> extends NSView {
    _shouldDrawFlexibleSpaceOutline<R = boolean>(): R;
    _drawToolbarFlexibleSpaceInRect<R = void, P0 = CGRect>(__drawToolbarFlexibleSpaceInRect: P0): R;
    _currentCoreUIWidget<R = __CFString>(): R;
    allowsVibrancy<R = boolean>(): R;
    preservesContentDuringLiveResize<R = boolean>(): R;
    inPalette<R = boolean>(): R;
    setInPalette<R = void, P0 = boolean>(_setInPalette: P0): R;
    initWithSize_forSpaceItem<R = unknown, P0 = CGSize, P1 = unknown>(_initWithSize: P0, _forSpaceItem: P1): R;
    spaceItem<R = NSToolbarFlexibleSpaceItem>(): R;
    setSpaceItem<R = void, P0 = NSToolbarFlexibleSpaceItem>(_v: P0): R;
  }
  namespace _NSToolbarFlexibleSpace {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSToolbarFlexibleSpace>(): R;
      new: <R = _NSToolbarFlexibleSpace>() => R;
    }
  }
}
