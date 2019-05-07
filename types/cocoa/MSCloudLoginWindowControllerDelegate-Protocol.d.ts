/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudLoginWindowControllerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    cloudLoginControllerDidCancel<R = void, P0 = MSCloudLoginWindowController>(_cloudLoginControllerDidCancel: P0): R;
    cloudLoginControllerDidOpenBrowser<R = void, P0 = MSCloudLoginWindowController>(_cloudLoginControllerDidOpenBrowser: P0): R;
    cloudLoginControllerDidSignIn<R = void, P0 = MSCloudLoginWindowController>(_cloudLoginControllerDidSignIn: P0): R;
  }
  namespace MSCloudLoginWindowControllerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
