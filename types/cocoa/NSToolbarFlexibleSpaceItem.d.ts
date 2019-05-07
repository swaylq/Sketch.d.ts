/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarFlexibleSpaceItem<T0 = void, T1 = void, T2 = void> extends NSToolbarItem {
    trackedSplitViewDividerIndex<R = number>(): R;
    setTrackedSplitViewDividerIndex<R = void, P0 = number>(_setTrackedSplitViewDividerIndex: P0): R;
    trackedSplitView<R = unknown>(): R;
    setTrackedSplitView<R = void, P0 = unknown>(_setTrackedSplitView: P0): R;
    configureForDisplayMode_andSizeMode<R = void, P0 = number, P1 = number>(_configureForDisplayMode: P0, _andSizeMode: P1): R;
    maxSize<R = CGSize>(): R;
    minSize<R = CGSize>(): R;
    view<R = unknown>(): R;
    _needsRedisplayWhenBeginningToolbarEditing<R = boolean>(): R;
    _emptyContents<R = boolean>(): R;
    isSpace<R = boolean>(): R;
    wantsToDrawIconIntoLabelAreaInDisplayMode<R = boolean, P0 = number>(_wantsToDrawIconIntoLabelAreaInDisplayMode: P0): R;
    wantsToDrawLabelInDisplayMode<R = boolean, P0 = number>(_wantsToDrawLabelInDisplayMode: P0): R;
    wantsToDrawIconInDisplayMode<R = boolean, P0 = number>(_wantsToDrawIconInDisplayMode: P0): R;
    isSeparatorItem<R = boolean>(): R;
    dealloc<R = void>(): R;
    initWithItemIdentifier<R = unknown, P0 = unknown>(_initWithItemIdentifier: P0): R;
    _separatorFinishInit<R = void>(): R;
  }
  namespace NSToolbarFlexibleSpaceItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSToolbarItem {
      alloc<R = NSToolbarFlexibleSpaceItem>(): R;
      new: <R = NSToolbarFlexibleSpaceItem>() => R;
      _resizeWeight<R = number>(): R;
      _resizeWeightSharedWithDuplicateItems<R = boolean>(): R;
      itemIdentifier<R = unknown>(): R;
    }
  }
}

declare const NSToolbarFlexibleSpaceItem: cocoa.NSToolbarFlexibleSpaceItem.CLASS;
