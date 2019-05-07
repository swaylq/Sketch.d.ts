/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLastActionPopoverTouchBarItem<T0 = void, T1 = void, T2 = void> extends NSPopoverTouchBarItem {
    _handleItem<R = void, P0 = unknown>(__handleItem: P0): R;
    _handleTap<R = void, P0 = unknown>(__handleTap: P0): R;
    _validateUserDefinedTouchBarItem<R = void>(): R;
    _updateInternalItems<R = void>(): R;
    initWithDictionaryRepresentation<R = unknown, P0 = unknown>(_initWithDictionaryRepresentation: P0): R;
    remembersLastAction<R = boolean>(): R;
    setRemembersLastAction<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _NSLastActionPopoverTouchBarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopoverTouchBarItem {
      alloc<R = _NSLastActionPopoverTouchBarItem>(): R;
      new: <R = _NSLastActionPopoverTouchBarItem>() => R;
    }
  }
}
