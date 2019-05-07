/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardScene<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    sceneController<R = unknown>(): R;
    setSceneController<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace NSStoryboardScene {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSStoryboardScene>(): R;
      new: <R = NSStoryboardScene>() => R;
    }
  }
}

declare const NSStoryboardScene: cocoa.NSStoryboardScene.CLASS;
