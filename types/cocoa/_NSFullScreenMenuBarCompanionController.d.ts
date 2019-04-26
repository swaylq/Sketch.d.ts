/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenMenuBarCompanionController<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    contentController<R = unknown>(): R;
    setContentController<R = void, P0 = unknown>(_setContentController: P0): R;
    updateContentViewForMenuBarReveal<R = void>(): R;
    dispose<R = void>(): R;
    menuBarReveal<R = number>(): R;
    setMenuBarReveal<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NSFullScreenMenuBarCompanionController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSFullScreenMenuBarCompanionController>(): R;
      new: <R = _NSFullScreenMenuBarCompanionController>() => R;
    }
  }
}
