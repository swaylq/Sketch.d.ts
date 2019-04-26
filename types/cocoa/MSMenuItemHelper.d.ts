/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMenuItemHelper<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    menuItem<R = unknown>(): R;
    isSeparator<R = boolean>(): R;
    setIsSeparator<R = void, P0 = boolean>(_v: P0): R;
    tag<R = number>(): R;
    setTag<R = void, P0 = number>(_v: P0): R;
    title<R = NSString>(): R;
    setTitle<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace MSMenuItemHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSMenuItemHelper>(): R;
      new: <R = MSMenuItemHelper>() => R;
      separator<R = unknown>(): R;
      itemWithTitle<R = unknown, P0 = unknown>(_itemWithTitle: P0): R;
      itemWithTitle_tag<R = unknown, P0 = unknown, P1 = number>(_itemWithTitle: P0, _tag: P1): R;
    }
  }
}

declare const MSMenuItemHelper: cocoa.MSMenuItemHelper.CLASS;
