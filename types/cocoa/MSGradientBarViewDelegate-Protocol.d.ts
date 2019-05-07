/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGradientBarViewDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    gradientBarChanged<R = void, P0 = MSGradientBarView>(_gradientBarChanged: P0): R;
    gradientBarViewPreviewColorSpace<R = NSColorSpace, P0 = MSGradientBarView>(_gradientBarViewPreviewColorSpace: P0): R;
  }
  namespace MSGradientBarViewDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
