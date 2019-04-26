/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarSpace<T0 = void, T1 = void, T2 = void> extends NSView {
    _shouldDrawSpace<R = boolean>(): R;
    _drawToolbarSpaceInRect<R = void, P0 = CGRect>(__drawToolbarSpaceInRect: P0): R;
    _currentCoreUIWidget<R = __CFString>(): R;
    allowsVibrancy<R = boolean>(): R;
    preservesContentDuringLiveResize<R = boolean>(): R;
    isSpaceItem<R = boolean>(): R;
    inPalette<R = boolean>(): R;
    setInPalette<R = void, P0 = boolean>(_setInPalette: P0): R;
    initWithSize_forSpaceItem<R = unknown, P0 = CGSize, P1 = unknown>(_initWithSize: P0, _forSpaceItem: P1): R;
    spaceItem<R = NSToolbarSpaceItem>(): R;
    setSpaceItem<R = void, P0 = NSToolbarSpaceItem>(_v: P0): R;
  }
  namespace _NSToolbarSpace {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSToolbarSpace>(): R;
      new: <R = _NSToolbarSpace>() => R;
    }
  }
}
