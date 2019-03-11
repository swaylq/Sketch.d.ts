/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDoubleClickActionBinderPlugin<T = any> extends cocoa._NSActionBinderPlugin {}
  namespace classes {
    export interface _NSDoubleClickActionBinderPlugin<T = any> extends cocoa.classes._NSActionBinderPlugin {
      alloc<R = _NSDoubleClickActionBinderPlugin>(): R;
      new: <R = _NSDoubleClickActionBinderPlugin>() => R;
    }
  }
}
