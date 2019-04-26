/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTiledRendererHostViewProtocol<T0 = void, T1 = void, T2 = void> {
    driver<R = MSRenderingDriver>(): R;
    hasUserFocus<R = boolean>(): R;
    scheduleRedraw<R = void>(): R;
  }
  namespace MSTiledRendererHostViewProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
