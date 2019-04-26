/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDraggingInfo_PrivateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    _draggingStage<R = number>(): R;
    _draggingForce<R = number>(): R;
    _enableSpringLoading_options<R = void, P0 = boolean, P1 = number>(__enableSpringLoading: P0, _options: P1): R;
    _isOnDemandSpringLoadingHoverArmed<R = boolean>(): R;
    _isOnDemandSpringLoadingArmed<R = boolean>(): R;
    _setOnDemandSpringLoadingEnabled<R = void, P0 = boolean>(__setOnDemandSpringLoadingEnabled: P0): R;
    _isOnDemandSpringLoadingActivated<R = boolean>(): R;
  }
  namespace NSDraggingInfo_PrivateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
