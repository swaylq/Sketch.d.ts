/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSeguePerformingProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    shouldPerformSegueWithIdentifier_sender<R = boolean, P0 = NSString, P1 = unknown>(_shouldPerformSegueWithIdentifier: P0, _sender: P1): R;
    performSegueWithIdentifier_sender<R = void, P0 = NSString, P1 = unknown>(_performSegueWithIdentifier: P0, _sender: P1): R;
    prepareForSegue_sender<R = void, P0 = NSStoryboardSegue, P1 = unknown>(_prepareForSegue: P0, _sender: P1): R;
  }
  namespace NSSeguePerformingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
