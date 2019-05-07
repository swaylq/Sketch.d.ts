/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarSpaceItem<T0 = void, T1 = void, T2 = void> extends NSToolbarItem {
    spaceItemSize<R = number>(): R;
    isSpace<R = boolean>(): R;
    configureForDisplayMode_andSizeMode<R = void, P0 = number, P1 = number>(_configureForDisplayMode: P0, _andSizeMode: P1): R;
    maxSize<R = CGSize>(): R;
    minSize<R = CGSize>(): R;
    view<R = unknown>(): R;
    _emptyContents<R = boolean>(): R;
    _needsRedisplayWhenBeginningToolbarEditing<R = boolean>(): R;
    wantsToDrawIconIntoLabelAreaInDisplayMode<R = boolean, P0 = number>(_wantsToDrawIconIntoLabelAreaInDisplayMode: P0): R;
    wantsToDrawLabelInDisplayMode<R = boolean, P0 = number>(_wantsToDrawLabelInDisplayMode: P0): R;
    wantsToDrawIconInDisplayMode<R = boolean, P0 = number>(_wantsToDrawIconInDisplayMode: P0): R;
    isSeparatorItem<R = boolean>(): R;
    dealloc<R = void>(): R;
    _spaceView<R = unknown>(): R;
    initWithItemIdentifier<R = unknown, P0 = unknown>(_initWithItemIdentifier: P0): R;
    _separatorFinishInit<R = void>(): R;
  }
  namespace NSToolbarSpaceItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSToolbarItem {
      alloc<R = NSToolbarSpaceItem>(): R;
      new: <R = NSToolbarSpaceItem>() => R;
      itemIdentifier<R = unknown>(): R;
    }
  }
}

declare const NSToolbarSpaceItem: cocoa.NSToolbarSpaceItem.CLASS;
